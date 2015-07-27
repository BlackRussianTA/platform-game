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
            BACKGROUND_INITIAL_OFFSET_X: 10,
            BACKGROUND_INITIAL_OFFSET_Y: 210,
            PLAYER_MOVE_SPEED: 5
        };

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
                objects.push(ground)
            });
            return [layer, objects]
        }

        function setPlayerLayer(stage) {
            var layer = new Kinetic.Layer();

            var imageObj = new Image();

            imageObj.src = constants.PLAYER_IMAGE;
            var player = new Kinetic.Sprite({
                x: stage.getWidth() / 2.3,
                y: stage.height() / 3.4,
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
                jump: function (player) {
                    if (this.jumpStatus == false) {
                        player.object.animation('jump');
                        var x = this.object.fillPatternOffsetX(),
                            y = this.object.fillPatternOffsetY(),
                            originalPostion = {
                                x: x,
                                y: y
                            },
                            CONSTS = {
                                JUMP_HEIGHT: constants.PLAYER_JUMP_HEIGHT
                            },
                            updatex = player.object.scale().x * 1,
                            updatey = -5;
                        this.jumpStatus = true;
                        var elem = this;

                        function performJump() {
                            if (originalPostion.y - CONSTS.JUMP_HEIGHT > elem.object.fillPatternOffsetY()) {
                                updatey *= -1;
                            }
                            elem.object.fillPatternOffsetX(elem.object.fillPatternOffsetX() + updatex);
                            elem.object.fillPatternOffsetY(elem.object.fillPatternOffsetY() + updatey);
                            elem.layer.draw();
                            if (originalPostion.y > elem.object.fillPatternOffsetY()) {
                                requestAnimationFrame(performJump);
                            } else {
                                elem.jumpStatus = false;
                                player.object.animation('idle');
                            }
                        }

                        performJump();
                    }
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
                jump: function (player) {

                    if (this.jumpStatus == false) {
                        var originalPosition = [];
                        this.objects.forEach(function(obj){
                            originalPosition.push({
                                x: obj.getX(),
                                y: obj.getY()
                            });
                        });
                            CONSTS = {
                                JUMP_HEIGHT: constants.PLAYER_JUMP_HEIGHT
                            },
                            updatex = player.object.scale().x * -1,
                            updatey = 5;
                        this.jumpStatus = true;
                        var elem = this;

                        function performJump() {
                            if (originalPosition[0].y + CONSTS.JUMP_HEIGHT < elem.objects[0].getY()) {
                                updatey *= -1;
                            }
                            elem.objects.forEach(function(obj){
                                obj.setX(obj.getX() + updatex);
                                obj.setY(obj.getY() + updatey);
                            });
                            elem.layer.draw();
                            var collision = elem.player_collision_top(player);
                            if(collision === true){
                                console.log("collision")
                            } else {
                                console.log("not")
                            }
                            if (originalPosition[0].y < elem.objects[0].getY() && collision === false) {
                                requestAnimationFrame(performJump);
                            } else {
                                elem.jumpStatus = false;
                            }
                        }

                        performJump();
                    }
                },
                player_collision_top: function(player){
                    var elem = this;
                    return this.objects.some(function (obj) {
                        //console.log('player end: '+ (player.object.getX()  + player.width));
                        //console.log('tile start: '+ (obj.getX()));
                        if(obj.getY() + 2.47058823529414 == player.object.getY() + player.height
                           // && ((player.object.getX()  + player.width - player.width/3) >= obj.getX())
                            //&& (player.object.getX() - player.width/3 <= obj.getX() + elem.width)
                            ////&& player.object.getX() + 128 <= obj.getX() + elem.width

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
            player = {
                init: function (stage, width, height) {
                    res = setPlayerLayer(stage);
                    this.height = height;
                    this.width = width;
                    this.layer = res[0];
                    this.object = res[1];
                    return this;
                },
                jump: function (background, ground) {
                    background.jump(this);
                    ground.jump(this);
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
                    background.move(direction * constants.PLAYER_MOVE_SPEED);
                    ground.move(-1*direction * constants.PLAYER_MOVE_SPEED);
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
        {'x': 100, 'y': 250,'type': 'cliff_left'},
        {'x': 228, 'y': 250,'type': 'cliff_right'},
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