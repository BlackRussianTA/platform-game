//var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//    return a.concat(b);
//});
function flatten(array) {
    return array.reduce(function (a, b) {
        return a.concat(b);
    });
}
var sprites = {
    player: {
        'idle': [
            [768, 0, 128, 256]
        ],
        'walk': [
            [640, 1280, 128, 256],
            [640, 1024, 128, 256]
        ],
        'jump': [
            [768, 256, 128, 256]
        ]
    },
    ground: {
        'cliff_left': [ 0, 1536, 128, 128],
        'cliff_right': [ 0, 1408, 128, 128],
        'mid': [ 0, 128, 128, 128]
    }
};
window.onload = function () {
    function game() {
        var constants = {
            BACKGROUND_IMAGE: 'images/Backgrounds/colored_grass.png',
            GROUND_IMAGE: 'images/Ground/spritesheet_ground.png',
            PLAYER_IMAGE: 'images/Players/spritesheet_players.png',
            PLAYER_JUMP_HEIGHT: 210,
            BOTTOM_LINE: 250,
            BACKGROUND_INITIAL_OFFSET_X: 10,
            BACKGROUND_INITIAL_OFFSET_Y: -100,
            PLAYER_MOVE_SPEED: 5,
            PLAYER_JUMP_SPEED: 5,
            LAYER_SCALE: 0.5

        };

        function scaleLayer(layer){
            layer.scaleX(constants.LAYER_SCALE);
            layer.scaleY(constants.LAYER_SCALE);
        }

        function setBackgroundLayer(stage) {
            var layer = new Kinetic.Layer();

            var imageObj = new Image();
            imageObj.src = constants.BACKGROUND_IMAGE;
            var background = new Kinetic.Image({
                x: 0,
                y: 0,
                fillPatternImage: imageObj,
                width: stage.width(),
                height: stage.height(),
                fillPatternRepeat: "repeat-x",
                fillPatternOffsetX: constants.BACKGROUND_INITIAL_OFFSET_X,
                fillPatternOffsetY: constants.BACKGROUND_INITIAL_OFFSET_Y
            });
            imageObj.onload = function () {
                layer.add(background);
                stage.add(layer);
            };
            return [layer, background];
        }

// each platforms element has x, y and platform type name
        function setGroundLayer(stage, platforms) {
            var layer = new Kinetic.Layer();
            scaleLayer(layer);
            var objects = [];
            platforms.forEach(function(elem){
                var imageObj = new Image();

                imageObj.src = constants.GROUND_IMAGE;
                var ground = new Kinetic.Sprite({
                    x: elem.x,
                    y: elem.y,
                    image: imageObj,
                    animation: 'idle',
                    animations: {
                        idle: sprites['ground'][elem.type]
                    },
                    frameRate: 7,
                    frameIndex: 0
                });
                imageObj.onload = function () {

                    layer.add(ground);
                    stage.add(layer);
                };
                objects.push(ground);

            });
            return [layer, objects]
        }

        function setPlayerLayer(stage) {
            var layer = new Kinetic.Layer();
            scaleLayer(layer);

            var imageObj = new Image();

            imageObj.src = constants.PLAYER_IMAGE;
            var player = new Kinetic.Sprite({
                x: stage.getWidth() - stage.width()/5,
                y: stage.height() -  stage.height()/2,
                image: imageObj,
                animation: 'idle',
                animations: {
                    idle: flatten(sprites['player']['idle']),
                    walk: flatten(sprites['player']['walk']),
                    jump: flatten(sprites['player']['jump'])
                },
                frameRate: 7,
                frameIndex: 0
            });
            imageObj.onload = function () {

                layer.add(player);
                stage.add(layer);
                player.start();
                var frameCount = 0;
                player.on('frameIndexChange', function (evt) {
                    if (player.animation() === 'walk' && ++frameCount > 3) {
                        player.animation('idle');
                        frameCount = 0;
                    }
                });
            };
            return [layer, player];
        }

        var background = (function () {
            background = {
                init: function (stage) {
                    res = setBackgroundLayer(stage);
                    this.layer = res[0];
                    this.object = res[1];
                    this.jumpStatus = false;
                    return this;
                },

                move: function (x) {
                    this.object.fillPatternOffsetX(this.object.fillPatternOffsetX() + x);
                    this.layer.draw();
                }
            };
            return background
        }());
        var ground = (function () {
            ground = {
                init: function (stage, platforms, width, height) {
                    res = setGroundLayer(stage, platforms);
                    this.width = width;
                    this.height = height;
                    this.layer = res[0];
                    this.jumpStatus = false;
                    this.objects = res[1];
                    return this;
                },
                player_collision_top: function(player){
                    var elem = this;
                    return this.objects.some(function (obj) {
                        console.log('tile top: '+obj.getY());
                        console.log('player bottom: '+(player.object.getY()  + player.height));

                        if(obj.getY() == player.object.getY() + player.height
                            && (player.object.getX() <= obj.getX() + elem.width)
                            && (player.object.getX() >= obj.getX())
                        ){
                            return true
                        }
                    });

                },
                move: function (x) {
                    this.objects.forEach(function(obj){
                        obj.setX(obj.getX() + x);
                    });
                    this.layer.draw();

                }
            };
            return ground
        }());

        var player = (function () {
            var player = {
                init: function (stage, width, height) {
                    res = setPlayerLayer(stage);
                    this.jumpStatus = false;
                    this.height = height;
                    this.width = width;
                    this.layer = res[0];
                    this.object = res[1];
                    return this;
                },
                jump: function (background, ground) {
                    if (this.jumpStatus == false) {
                        this.object.animation('jump');
                        var originalPositionBackground = {
                            x: background.object.fillPatternOffsetX(),
                            y: background.object.fillPatternOffsetY()
                        };
                        var originalPostionGround = {
                                x: ground.objects[0].getX(),
                                y: ground.objects[0].getY()
                            },
                            CONSTS = {
                                JUMP_HEIGHT: constants.PLAYER_JUMP_HEIGHT
                            },
                            updateBgx = this.object.scale().x * 1,
                            updateBgy = -5,
                            updateGrx = this.object.scale().x * -1,
                            updateGry = 5;
                        this.jumpStatus = true;
                        var elem = this;

                        function performJump() {
                            if (originalPositionBackground.y - CONSTS.JUMP_HEIGHT > background.object.fillPatternOffsetY()) {
                                updateBgy *= -1;
                                updateGry *= -1;
                            }
                            background.object.fillPatternOffsetX(background.object.fillPatternOffsetX() + updateBgx);
                            background.object.fillPatternOffsetY(background.object.fillPatternOffsetY() + updateBgy);
                            background.layer.draw();
                            ground.objects.forEach(function(obj){
                                obj.setX(obj.getX() + updateGrx);
                                obj.setY(obj.getY() + updateGry);
                            });
                            ground.layer.draw();
                            var collision = ground.player_collision_top(elem);

                            if (originalPositionBackground.y > background.object.fillPatternOffsetY() & collision === false ) {
                                requestAnimationFrame(performJump);
                            } else {
                                if(collision === false){
                                    elem.fall(background, ground);
                                }
                                elem.jumpStatus = false;
                                elem.object.animation('idle');
                            }
                        }

                        performJump();
                    }
                },
                fall: function(background, ground){

                    var elem = this;
                    function performFall(){
                        background.object.fillPatternOffsetY(background.object.fillPatternOffsetY() + 5);
                        background.layer.draw();
                            ground.layer.setY(ground.layer.getY() -5);
                        ground.layer.draw();


                        var collision = ground.player_collision_top(elem);

                        if(background.object.fillPatternOffsetY() >= constants.BOTTOM_LINE){
                            elem.object.visible(false);
                            elem.layer.draw();
                        }
                        if (background.object.fillPatternOffsetY() <= constants.BOTTOM_LINE && collision === false) {
                            requestAnimationFrame(performFall);
                        }
                    }

                    performFall();
                },
                move: function (background, ground,direction) {
                    if (this.object.scale().x !== direction) {
                        this.object.stop();
                        this.object.setX(this.object.getX() - direction * 128);
                        this.layer.draw();

                        this.object.scale({x: direction, y: 1});
                        this.object.start();
                    }
                    if (this.object.animation() != 'walk') {
                        this.object.animation('walk')
                    }
                    background.object.fillPatternOffsetX(background.object.fillPatternOffsetX() + direction * constants.PLAYER_MOVE_SPEED);
                    background.layer.draw();
                    ground.objects.forEach(function(obj){
                        obj.setX(obj.getX() + -1*direction * constants.PLAYER_MOVE_SPEED);
                    });
                    ground.layer.draw();
                    var collision = ground.player_collision_top(this);
                    if(collision === false){
                        this.fall(background, ground)
                    }
                }
            };
            return player
        }());
        var stage = (function () {
            stage = {
                init: function (id, width, height) {
                    var stage = new Kinetic.Stage({
                        container: id,
                        width: width,
                        height: height
                    });
                    return stage;
                }
            };
            return stage
        }());
        var game = (function () {
            game = {
                init: function (stage, background, ground ,player) {
                    this.stage = stage;
                    this.background = background;
                    this.ground = ground;
                    this.player = player;
                    return this;
                },
                playerJump: function () {
                    this.player.jump(this.background, this.ground);
                },
                playerMoveLeft: function () {
                    this.player.move(this.background, this.ground, -1)
                },
                playerMoveRight: function () {

                    this.player.move(this.background,this.ground, 1);
                }
            };
            return game
        }());

        var module = {
            getStage: function (id, width, height) {
                return Object.create(stage).init(id, width, height);
            },
            getBackground: function (stage) {
                return Object.create(background).init(stage);
            },
            getGround: function (stage, platforms, width, height) {
                return Object.create(ground).init(stage, platforms, width, height);
            },
            getPlayer: function (stage, width, height) {
                return Object.create(player).init(stage, width, height);
            },
            getGame: function (stage, background, ground,player) {
                return Object.create(game).init(stage, background, ground, player);
            }
        };
        return module;
    };

    var module = game();
    var stage = module.getStage('kinetic-canvas', 800, 600);
    var background = module.getBackground(stage);
    var setup = [
        {'x': 550, 'y': 556,'type': 'cliff_left'},
        {'x': 676, 'y': 556,'type': 'cliff_right'},
        {'x': 850, 'y': 556,'type': 'cliff_left'},
        {'x': 976, 'y': 556,'type': 'cliff_right'},
        {'x': 400, 'y': 356,'type': 'cliff_left'},
        {'x': 526, 'y': 356,'type': 'cliff_right'},
    ];
    var ground;
    var player;
    var game;
    setTimeout(function () {
        ground = module.getGround(stage, setup, 128, 128);
        setTimeout(function () {
            player = module.getPlayer(stage, 128, 256);

            game = module.getGame(stage, background, ground, player);
        }, 60);
    }, 60);
    window.onkeydown = function (ev) {
        if (ev.keyCode === 32) {
            game.playerJump();
        }
        else if (ev.keyCode === 37) {
            game.playerMoveLeft();
        } else if (ev.keyCode === 39) {
            game.playerMoveRight();
        }
    };
};