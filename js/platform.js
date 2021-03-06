(function () { // private module pattern

    'use strict';

    //===========================================================================
    // CONSTANTS
    //===========================================================================

    var FRAMES_PER_SECOND = 60,                                            // 'update' frame rate fixed at 60fps independent of rendering loop
        CANVAS_WIDTH = 720,                                                // must have width multiple of 360...
        CANVAS_HEIGHT = 540,                                               // ... and 4:3 w:h ratio
        HORIZON_HEIGHT = CANVAS_HEIGHT / 5,                                // how much ground to show below the tower
        PIXELS_IN_METER = CANVAS_HEIGHT / 20,                              // how many pixels represent 1 meter
        COL_WIDTH = PIXELS_IN_METER * 3,                                   // 2D column width
        ROW_HEIGHT = PIXELS_IN_METER,                                      // 2D row height
        ROW_SURFACE = ROW_HEIGHT * 0.3,                                    // amount of row considered 'near' enough to surface to allow jumping onto that row (instead of bouncing off again)
        PLAYER_WIDTH = PIXELS_IN_METER * 1.5,                              // player logical width
        PLAYER_HEIGHT = PIXELS_IN_METER * 2,                               // player logical height
        GROUND_SPEED = 2,                                                  // how fast ground scrolls left-right
        GRAVITY = 9.8 * 1.5,                                               // gravity
        MAX_DELTA_X = 10,                                                  // player max horizontal speed (meters per second)
        MAX_DELTA_Y = (ROW_SURFACE * FRAMES_PER_SECOND / PIXELS_IN_METER), // player max vertical speed (meters per second) - ENSURES CANNOT FALL THROUGH PLATFORM SURFACE
        ACCELERATION = 1 / 4,                                              // player take 1/4 second to reach maxDeltaX (horizontal acceleration)
        FRICTION = 1 / 8,                                                  // player take 1/8 second to stop from maxDeltaX (horizontal friction)
        IMPULSE = 15 * FRAMES_PER_SECOND,                                  // player jump impulse
        FALLING_JUMP = FRAMES_PER_SECOND / 5,                              // player allowed to jump for 1/5 second after falling off a platform
        ICECUBE = { WIDTH: ROW_HEIGHT, HEIGHT: ROW_HEIGHT },               // logical size of iceCube
        DIRECTION = { NONE: 0, LEFT: 1, RIGHT: 2 },                        // useful enum for declaring an abstract direction
        STEP = { FRAMES: 8, W: COL_WIDTH / 10, H: ROW_HEIGHT },            // attributes of player stepping up
        KEY = { SPACE: 32, LEFT: 37, RIGHT: 39 },                          // input key codes
        IMAGES = ['ground', 'player', 'monster', 'iceCubes'],              // sprite image files for loading
        PLAYER = {
            RIGHT: { x: 1008, y: 0, w: 72, h: 96, frames: 6, fps: 30 },    // animation - player running right
            STAND: { x: 1008, y: 0, w: 72, h: 96, frames: 1, fps: 30 },    // animation - player standing still
            LEFT: { x: 576, y: 0, w: 72, h: 96, frames: 6, fps: 30 },      // animation - player running left
            HURTL: { x: 72, y: 0, w: 72, h: 96, frames: 1, fps: 10 },      // animation - player hurt while running left
            HURTR: { x: 504, y: 0, w: 72, h: 96, frames: 1, fps: 10 }      // animation - player hurt while running right
        },
        MONSTERS = [
            {
                name: "BLOCK",
                nx: -0.5,
                ny: -0.5,
                w: 1.5 * PIXELS_IN_METER,
                h: 1.5 * PIXELS_IN_METER,
                speed: 4 * PIXELS_IN_METER,
                direction: 'up',
                vertical: true,
                horizontal: false,
                animation: {
                    up: { x: 0, y: 0, w: 50, h: 50, frames: 2, fps: 5 },
                    down: { x: 0, y: 0, w: 50, h: 50, frames: 2, fps: 5 }
                }

            },
            {
                name: "FLY",
                nx: -0.5,
                ny: -0.5,
                w: 1.5 * PIXELS_IN_METER,
                h: 1.0 * PIXELS_IN_METER,
                speed: 5 * PIXELS_IN_METER,
                direction: 'left',
                vertical: false,
                horizontal: true,
                animation: {
                    left: { x: 100, y: 7, w: 76, h: 36, frames: 2, fps: 5 },
                    right: { x: 252, y: 7, w: 76, h: 36, frames: 2, fps: 5 }
                }

            },
            {
                name: "SLIME",
                nx: -0.5,
                ny: 0.0,
                w: 1.5 * PIXELS_IN_METER,
                h: 1.0 * PIXELS_IN_METER,
                speed: 4 * PIXELS_IN_METER,
                direction: 'right',
                vertical: false,
                horizontal: true,
                animation: {
                    left: { x: 404, y: 11, w: 50, h: 28, frames: 2, fps: 5 },
                    right: { x: 504, y: 11, w: 50, h: 28, frames: 2, fps: 5 }
                }

            },
            {
                name: "SNAIL",
                nx: -0.5,
                ny: 0.0,
                w: 1.5 * PIXELS_IN_METER,
                h: 1.0 * PIXELS_IN_METER,
                speed: 2 * PIXELS_IN_METER,
                direction: 'left',
                vertical: false,
                horizontal: true,
                animation: {
                    left: { x: 604, y: 9, w: 58, h: 32, frames: 2, fps: 5 },
                    right: { x: 720, y: 9, w: 58, h: 32, frames: 2, fps: 5 }
                }

            }
        ];

    //===========================================================================
    // UTILITY METHODS
    //===========================================================================

    function normalizex(x) { return Game.Math.normalize(x, 0, tower.w); }             // wrap x-coord around to stay within tower boundary
    function normalizeColumn(col) { return Game.Math.normalize(col, 0, tower.cols); } // wrap column  around to stay within tower boundary
    function x2col(x) { return Math.floor(normalizex(x) / COL_WIDTH); }               // convert x-coord to tower column index
    function y2row(y) { return Math.floor(y / ROW_HEIGHT); }                          // convert y-coord to tower row    index
    function col2x(col) { return col * COL_WIDTH; }                                   // convert tower column index to x-coord
    function row2y(row) { return row * ROW_HEIGHT; }                                  // convert tower row    index to y-coord
    function x2a(x) { return 360 * (normalizex(x) / tower.w); }                       // convert x-coord to an angle around the tower
    function tx(x, r) {
        x = normalizex(x - camera.rx);
        if (x > (tower.w / 2)) {
            x = -(tower.w - x);
        }
        return x;
    } // transform x-coord for rendering
    function ty(y) { return CANVAS_HEIGHT - HORIZON_HEIGHT - (y - camera.ry); }       // transform y-coord for rendering
    function nearRowSurface(y, row) {                                                 // is y-coord "near" the surface of a tower row
        return y > (row2y(row + 1) - ROW_SURFACE);
    }

    //===========================================================================
    // TOWER
    //===========================================================================

    var Tower = {

        //-------------------------------------------------------------------------

        init: function (level) {

            level.map.reverse(); // make 0 index the ground, increasing towards the sky

            this.name = level.name;
            this.color = level.color;
            this.rows = level.map.length;
            this.cols = level.map[0].length;
            this.ir = CANVAS_WIDTH / 2;         // inner radius (walls)
            this.or = this.ir * 1.2;            // outer radius (walls plus platforms)
            this.w = this.cols * COL_WIDTH;
            this.h = this.rows * ROW_HEIGHT;
            this.map = this.createMap(level.map);
            this.ground = { platform: true };
            this.air = { platform: false };

            return this;
        },

        //-------------------------------------------------------------------------

        getCell: function (row, col) {
            if (row < 0) {
                return this.ground;
            }

            if (row >= this.rows) {
                return this.air;
            }

            return this.map[row][normalizeColumn(col)];
        },

        //-------------------------------------------------------------------------

        createMap: function (source) {
            var row, col, cell, map = [];
            for (row = 0; row < this.rows; row += 1) {
                map[row] = [];
                for (col = 0; col < this.cols; col += 1) {
                    cell = source[row][col];
                    map[row][col] = {
                        platform: (cell === "X"),
                        iceCube: (cell === "o")
                    };
                }
            }
            return map;
        }

    };

    //===========================================================================
    // MONSTER
    //===========================================================================

    var Monster = {

        init: function (row, col, type) {

            this.row = row;
            this.col = col;
            this.x = col2x(col + 0.5);
            this.y = row2y(row);
            this.deltaX = 0;
            this.dy = 0;
            this.w = type.w;
            this.h = type.h;
            this.nx = type.nx * type.w;
            this.ny = type.ny * type.h;
            this.type = type;
            this[type.direction] = true;
            this.animation = type.animation[type.direction];

            if (type.vertical) {
                this.minrow = row;
                this.maxrow = row;
                while ((this.minrow > 0) && !tower.map[this.minrow - 1][col].platform)
                    this.minrow--;
                while ((this.maxrow < tower.rows - 1) && !tower.map[this.maxrow + 1][col].platform)
                    this.maxrow++;
                this.miny = row2y(this.minrow) + this.ny;
                this.maxy = row2y(this.maxrow + 1) + this.ny - this.h;
            }

            if (type.horizontal) {
                this.mincol = col;
                this.maxcol = col;
                while ((this.mincol != normalizeColumn(col + 1)) && !tower.getCell(row, this.mincol - 1).platform && tower.getCell(row - 1, this.mincol - 1).platform)
                    this.mincol = normalizeColumn(this.mincol - 1);
                while ((this.maxcol != normalizeColumn(col - 1)) && !tower.getCell(row, this.maxcol + 1).platform && tower.getCell(row - 1, this.maxcol + 1).platform)
                    this.maxcol = normalizeColumn(this.maxcol + 1);
                this.minx = col2x(this.mincol) - this.nx;
                this.maxx = col2x(this.maxcol + 1) - this.nx - this.w;
                this.wrapx = this.minx > this.maxx;
            }

            return this;
        },

        //-------------------------------------------------------------------------

        update: function (dt) {

            if (this.left)
                this.deltaX = -this.type.speed;
            else if (this.right)
                this.deltaX = this.type.speed;
            else
                this.deltaX = 0;

            if (this.up)
                this.dy = this.type.speed;
            else if (this.down)
                this.dy = -this.type.speed;
            else
                this.dy = 0;

            this.x = normalizex(this.x + (dt * this.deltaX));
            this.y = this.y + (dt * this.dy);

            if (this.up && (this.y > this.maxy)) {
                this.y = this.maxy;
                this.up = false;
                this.down = true;
                this.animation = this.type.animation.down;
            }
            else if (this.down && (this.y < this.miny)) {
                this.y = this.miny;
                this.down = false;
                this.up = true;
                this.animation = this.type.animation.up;
            }

            if (this.left && (this.x < this.minx) && (!this.wrapx || this.x > this.maxx)) {
                this.x = this.minx;
                this.left = false;
                this.right = true;
                this.animation = this.type.animation.right;
            }
            else if (this.right && (this.x > this.maxx) && (!this.wrapx || this.x < this.minx)) {
                this.x = this.maxx;
                this.right = false;
                this.left = true;
                this.animation = this.type.animation.left;
            }

            var row = y2row(this.y - this.ny),
                col = x2col(this.x - this.nx);

            if ((row != this.row) || (col != this.col)) {
                tower.map[this.row][this.col].monster = null;
                tower.map[row][col].monster = this;
                this.row = row;
                this.col = col;
            }

            Game.animate(FRAMES_PER_SECOND, this);
        }

    };

    //===========================================================================
    // MONSTERS
    //===========================================================================

    var Monsters = {

        init: function (level) {
            this.all = this.createMonsters(level.map);
            return this;
        },

        //-------------------------------------------------------------------------

        update: function (dt) {
            var n, max, all = this.all;
            for (n = 0, max = all.length; n < max; n++) {
                all[n].update(dt);
            }
        },

        //-------------------------------------------------------------------------

        createMonsters: function (source) {
            var row,
                col,
                type,
                monster,
                all = [];

            for (row = 0 ; row < tower.rows ; row++) {
                for (col = 0 ; col < tower.cols ; col++) {
                    type = parseInt(source[row][col], 10);
                    if (!isNaN(type)) {
                        monster = Object.create(Monster).init(row, col, MONSTERS[type]);
                        all.push(monster);
                        tower.map[row][col].monster = monster;
                    }
                }
            }
            return all;
        }

    };

    //===========================================================================
    // PLAYER
    //===========================================================================

    var Player = {

        init: function () {

            this.x = col2x(0.5);
            this.y = row2y(0);
            this.w = PLAYER_WIDTH;
            this.h = PLAYER_HEIGHT;
            this.deltaX = 0;
            this.dy = 0;
            this.gravity = PIXELS_IN_METER * GRAVITY;
            this.maxDeltaX = PIXELS_IN_METER * MAX_DELTA_X;
            this.maxdy = PIXELS_IN_METER * MAX_DELTA_Y;
            this.impulse = PIXELS_IN_METER * IMPULSE;
            this.accel = this.maxDeltaX / ACCELERATION;
            this.friction = this.maxDeltaX / FRICTION;
            this.input = { left: false, right: false, jump: false, jumpAvailable: true };
            this.collision = this.createCollisionPoints();
            this.animation = PLAYER.STAND;
            this.score = 0;

            return this;
        },

        createCollisionPoints: function () {
            return {
                topLeft: { x: -this.w / 4, y: this.h - 2 },
                topRight: { x: this.w / 4, y: this.h - 2 },
                middleLeft: { x: -this.w / 2, y: this.h / 2 },
                middleRight: { x: this.w / 2, y: this.h / 2 },
                bottomLeft: { x: -this.w / 4, y: 0 },
                bottomRight: { x: this.w / 4, y: 0 },
                underLeft: { x: -this.w / 4, y: -1 },
                underRight: { x: this.w / 4, y: -1 }
            };
        },

        update: function (dt) {

            this.animate();

            var wasleft = this.deltaX < 0,
                wasright = this.deltaX > 0,
                falling = this.falling,
                friction = this.friction * (this.falling ? 0.5 : 1),
                accel = this.accel * (this.falling ? 0.5 : 1);

            if (this.stepping)
                return this.stepUp();
            else if (this.hurting)
                return this.hurt(dt);

            this.ddx = 0;
            this.ddy = falling ? -this.gravity : 0;

            if (this.input.left)
                this.ddx = this.ddx - accel;
            else if (wasleft)
                this.ddx = this.ddx + friction;

            if (this.input.right)
                this.ddx = this.ddx + accel;
            else if (wasright)
                this.ddx = this.ddx - friction;

            if (this.input.jump && (!falling || this.fallingJump))
                this.performJump();

            this.updatePosition(dt);

            while (this.checkCollision()) {
                // iterate until no more collisions
            }

            // clamp deltaX at zero to prevent friction from making us jiggle side to side
            if ((wasleft && (this.deltaX > 0)) || (wasright && (this.deltaX < 0))) {
                this.deltaX = 0;
            }

            // if falling, track short period of time during which we're falling but can still jump
            if (this.falling && (this.fallingJump > 0)) {
                this.fallingJump = this.fallingJump - 1;
            }

            if (this.falling && (this.fallingJump === 0) && (this.y < 0)) {
                this.dy = 0;
            }
        },

        updatePosition: function (dt) {
            this.x = normalizex(this.x + (dt * this.deltaX));
            this.y = this.y + (dt * this.dy);
            this.deltaX = Game.Math.bound(this.deltaX + (dt * this.ddx), -this.maxDeltaX, this.maxDeltaX);
            this.dy = Game.Math.bound(this.dy + (dt * this.ddy), -this.maxdy, this.maxdy);
        },

        hurt: function (dt) {
            if (this.hurting === true) {
                this.deltaX = -this.deltaX / 2;
                this.ddx = 0;
                this.ddy = this.impulse / 2;
                this.hurting = FRAMES_PER_SECOND;
                this.hurtLeft = this.input.left;
            }
            else {
                this.ddy = -this.gravity;
                this.hurting = this.hurting - 1;
            }
            this.updatePosition(dt);
            if (this.y <= 0) {
                this.hurting = false;
                this.falling = false;
                this.y = 0;
                this.dy = 0;
            }
        },

        animate: function () {
            if (this.hurting)
                Game.animate(FRAMES_PER_SECOND, this, this.hurtLeft ? PLAYER.HURTL : PLAYER.HURTR);
            else if (this.input.left || (this.stepping === DIRECTION.LEFT))
                Game.animate(FRAMES_PER_SECOND, this, PLAYER.LEFT);
            else if (this.input.right || (this.stepping === DIRECTION.RIGHT))
                Game.animate(FRAMES_PER_SECOND, this, PLAYER.RIGHT);
            else
                Game.animate(FRAMES_PER_SECOND, this, PLAYER.STAND);
        },

        checkCollision: function () {

            var falling = this.falling,
                fallingUp = this.falling && (this.dy > 0),
                fallingDown = this.falling && (this.dy <= 0),
                runningLeft = this.deltaX < 0,
                runningRight = this.deltaX > 0,
                tl = this.collision.topLeft,
                tr = this.collision.topRight,
                ml = this.collision.middleLeft,
                mr = this.collision.middleRight,
                bl = this.collision.bottomLeft,
                br = this.collision.bottomRight,
                ul = this.collision.underLeft,
                ur = this.collision.underRight;

            this.updateCollisionPoint(tl);
            this.updateCollisionPoint(tr);
            this.updateCollisionPoint(ml);
            this.updateCollisionPoint(mr);
            this.updateCollisionPoint(bl);
            this.updateCollisionPoint(br);
            this.updateCollisionPoint(ul);
            this.updateCollisionPoint(ur);

            if (tl.iceCube) return this.collectIceCube(tl);
            else if (tr.iceCube) return this.collectIceCube(tr);
            else if (ml.iceCube) return this.collectIceCube(ml);
            else if (mr.iceCube) return this.collectIceCube(mr);
            else if (bl.iceCube) return this.collectIceCube(bl);
            else if (br.iceCube) return this.collectIceCube(br);

            if (fallingDown && bl.blocked && !ml.blocked && !tl.blocked && nearRowSurface(this.y + bl.y, bl.row))
                return this.collideDown(bl);

            if (fallingDown && br.blocked && !mr.blocked && !tr.blocked && nearRowSurface(this.y + br.y, br.row))
                return this.collideDown(br);

            if (fallingUp && tl.blocked && !ml.blocked && !bl.blocked)
                return this.collideUp(tl);

            if (fallingUp && tr.blocked && !mr.blocked && !br.blocked)
                return this.collideUp(tr);

            if (runningRight && tr.blocked && !tl.blocked)
                return this.collide(tr);

            if (runningRight && mr.blocked && !ml.blocked)
                return this.collide(mr);

            if (runningRight && br.blocked && !bl.blocked) {
                if (falling)
                    return this.collide(br);
                else
                    return this.startSteppingUp(DIRECTION.RIGHT);
            }

            if (runningLeft && tl.blocked && !tr.blocked)
                return this.collide(tl, true);

            if (runningLeft && ml.blocked && !mr.blocked)
                return this.collide(ml, true);

            if (runningLeft && bl.blocked && !br.blocked) {
                if (falling)
                    return this.collide(bl, true);
                else
                    return this.startSteppingUp(DIRECTION.LEFT);
            }

            if (!falling && !ul.blocked && !ur.blocked)
                return this.startFalling(true);

            if (!this.hurting && (tl.monster || tr.monster || ml.monster || mr.monster || bl.monster || br.monster))
                return this.hitMonster();

            return false; // done, we didn't collide with anything

        },

        updateCollisionPoint: function (point) {
            point.row = y2row(this.y + point.y);
            point.col = x2col(this.x + point.x);
            point.cell = tower.getCell(point.row, point.col);
            point.blocked = point.cell.platform;
            point.platform = point.cell.platform;
            point.monster = false;
            point.iceCube = false;
            if (point.cell.monster) {
                var monster = point.cell.monster;
                if (Game.Math.between(this.x + point.x, monster.x + monster.nx, monster.x + monster.nx + monster.w) &&
                    Game.Math.between(this.y + point.y, monster.y + monster.ny, monster.y + monster.ny + monster.h)) {
                    point.monster = point.cell.monster;
                }
            }
            if (point.cell.iceCube) {
                if (Game.Math.between(this.x + point.x, col2x(point.col + 0.5) - ICECUBE.WIDTH / 2, col2x(point.col + 0.5) + ICECUBE.WIDTH / 2) &&  // center point of column +/- ICECUBE.WIDTH/2
                    Game.Math.between(this.y + point.y, row2y(point.row), row2y(point.row + 1))) {
                    point.iceCube = true;
                }
            }
        },

        collectIceCube: function (point) {
            point.cell.iceCube = false;
            this.score = this.score + 50;
        },

        startFalling: function (allowFallingJump) {
            this.falling = true;
            this.fallingJump = allowFallingJump ? FALLING_JUMP : 0;
        },

        collide: function (point, left) {
            this.x = normalizex(col2x(point.col + (left ? 1 : 0)) - point.x);
            this.deltaX = 0;
            return true;
        },

        collideUp: function (point) {
            this.y = row2y(point.row) - point.y;
            this.dy = 0;
            return true;
        },

        collideDown: function (point) {
            this.y = row2y(point.row + 1);
            this.dy = 0;
            this.falling = false;
            return true;
        },

        performJump: function () {
            this.dy = 0;
            this.ddy = this.impulse; // an instant big force impulse
            this.startFalling(false);
            this.input.jump = false;
        },

        startSteppingUp: function (direction) {
            this.stepping = direction;
            this.stepCount = STEP.FRAMES;
            return false; // NOT considered a collision
        },

        stepUp: function () {

            var left = (this.stepping === DIRECTION.LEFT),
                dx = STEP.W / STEP.FRAMES,
                dy = STEP.H / STEP.FRAMES;

            this.dx = 0;
            this.dy = 0;
            this.x = normalizex(this.x + (left ? -dx : dx));
            this.y = this.y + dy;

            if (--(this.stepCount) == 0)
                this.stepping = DIRECTION.NONE;
        },

        hitMonster: function () {
            this.hurting = true;
            return true;
        }

    };

    //===========================================================================
    // CAMERA
    //===========================================================================

    var Camera = {

        init: function () {
            this.x = player.x;
            this.y = player.y;
            this.deltaX = 0;
            this.dy = 0;
            this.miny = 0;
            this.maxy = tower.h;

            return this;
        },

        update: function (dt) {
            this.x = player.x;
            this.y = player.y;
            this.deltaX = player.deltaX;
            this.dy = player.dy;
        }

    };

    //===========================================================================
    // RENDERER
    //===========================================================================

    var Renderer = {

        init: function (images) {
            this.images = images;
            this.canvas = Game.Canvas.init(document.getElementById('canvas'), CANVAS_WIDTH, CANVAS_HEIGHT);
            this.ctx = this.canvas.getContext('2d');
            this.stars = this.createStars();
            this.ground = this.createGround();
            this.score = document.getElementById('score');
            this.vscore = 0;
            this.platformWidth = COL_WIDTH;

            return this;
        },

        //-------------------------------------------------------------------------

        render: function (dt) {

            player.rx = normalizex(Game.Math.lerp(player.x, player.deltaX, dt));
            player.ry = Game.Math.lerp(player.y, player.dy, dt);
            camera.rx = normalizex(Game.Math.lerp(camera.x, camera.deltaX, dt));
            camera.ry = Game.Math.lerp(camera.y, camera.dy, dt);

            player.ry = Math.max(0, player.ry); // dont let sub-frame interpolation take the player below the horizon
            camera.ry = Math.max(0, camera.ry); // dont let sub-frame interpolation take the camera below the horizon

            this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.renderStars(this.ctx);
            this.ctx.save();
            this.ctx.translate(CANVAS_WIDTH / 2, 0);
            this.renderFront(this.ctx);
            this.renderGround(this.ctx);
            this.renderPlayer(this.ctx);
            this.renderScore(this.ctx);
            this.ctx.restore();
        },

        //-------------------------------------------------------------------------

        renderStars: function (ctx) {

            var x = Game.Math.normalize(CANVAS_WIDTH * camera.x / tower.w, 0, CANVAS_WIDTH),
                y = Game.Math.normalize(CANVAS_HEIGHT * camera.y / tower.h, 0, CANVAS_HEIGHT),
                nx = CANVAS_WIDTH - x,
                ny = CANVAS_HEIGHT - y;

            ctx.drawImage(this.stars, 0, 0, nx, ny, x, y, nx, ny);
            if (x > 0)
                ctx.drawImage(this.stars, nx, 0, x, ny, 0, y, x, ny);
            if (y > 0)
                ctx.drawImage(this.stars, 0, ny, nx, y, x, 0, nx, y);
            if ((x > 0) && (y > 0))
                ctx.drawImage(this.stars, nx, ny, x, y, 0, 0, x, y);

        },

        //-------------------------------------------------------------------------

        renderGround: function (ctx) {
            var ground = this.ground,
                x = ground.w * (camera.rx / tower.w),
                y = ty(0),
                w = Math.min(CANVAS_WIDTH, ground.w - x),
                w2 = CANVAS_WIDTH - w;
            ctx.drawImage(ground.image, x, 0, w, ground.h, -CANVAS_WIDTH / 2, y, w, ground.h);
            if (w2 > 0)
                ctx.drawImage(ground.image, 0, 0, w2, ground.h, -CANVAS_WIDTH / 2 + w, y, w2, ground.h);
        },

        //-------------------------------------------------------------------------

        renderBack: function (ctx) {

            ctx.strokeStyle = tower.color.stroke;
            ctx.lineWidth = 2;

            var left = x2col(camera.rx - tower.w / 4),
                right = x2col(camera.rx + tower.w / 4);

            this.renderQuadrant(ctx, normalizeColumn(left - 3), left, +1);
            this.renderQuadrant(ctx, normalizeColumn(right + 3), right, -1);

        },

        //-------------------------------------------------------------------------

        renderFront: function (ctx) {

            ctx.strokeStyle = tower.color.stroke;
            ctx.lineWidth = 2;

            var left = x2col(camera.rx - tower.w / 4),
                center = x2col(camera.rx),
                right = x2col(camera.rx + tower.w / 4);

            this.renderQuadrant(ctx, left, normalizeColumn(center + 0), +1);
            this.renderQuadrant(ctx, right, normalizeColumn(center - 1), -1);

        },

        //-------------------------------------------------------------------------

        renderQuadrant: function (ctx, min, max, direction) {
            var r, y, cell,
                rmin = Math.max(0, y2row(camera.ry - HORIZON_HEIGHT) - 1),
                rmax = Math.min(tower.rows - 1, rmin + (CANVAS_HEIGHT / ROW_HEIGHT + 1)),
                c = min;
            while (c !== max) {
                for (r = rmin ; r <= rmax ; r++) {
                    y = ty(r * ROW_HEIGHT);
                    cell = tower.getCell(r, c);
                    if (cell.platform)
                        this.renderPlatform(ctx, c, y);
                    else if (cell.iceCube)
                        this.renderIceCube(ctx, c, y);
                    if (cell.monster)
                        this.renderMonster(ctx, c, y, cell.monster);
                }
                c = normalizeColumn(c + direction);
            }
        },

        //-------------------------------------------------------------------------

        renderPlatform: function (ctx, col, y) {

            var x = col2x(col + 0.5),
                a = Game.Math.normalizeAngle180(x2a(x) - x2a(camera.rx)),
                x0 = tx(x, tower.or),
                x1 = x0 - this.platformWidth / 2,
                x2 = x0 + this.platformWidth / 2;

            ctx.fillStyle = Game.Math.darken(tower.color.platform, 60 * Math.min(1, Math.abs(a / 90)));
            ctx.fillRect(x1, y - ROW_HEIGHT, x2 - x1, ROW_HEIGHT);
            ctx.lineWidth = 1;
            ctx.strokeRect(x1, y - ROW_HEIGHT, x2 - x1, ROW_HEIGHT);

        },

        //-------------------------------------------------------------------------

        renderIceCube: function (ctx, col, y) {

            var iceCubes = this.images.iceCubes,
                x = col2x(col + 0.5),
                a = Game.Math.normalizeAngle180(x2a(x) - x2a(camera.rx)),
                d = Math.floor(12 * Math.min(1, Math.abs(a / 90))),
                w = ICECUBE.WIDTH,
                h = ICECUBE.HEIGHT,
                x0 = tx(x, tower.or),
                x1 = x0 - w / 2,
                x2 = x0 + w / 2;

            ctx.drawImage(iceCubes, 0, d * 48, iceCubes.width, 48, x1, y - h, w, h);

        },

        //-------------------------------------------------------------------------

        renderMonster: function (ctx, col, y, monster) {

            var a = monster.animation,
                x = tx(monster.x, tower.or) + monster.nx,
                y = ty(monster.y) + monster.ny,
                w = monster.w,
                h = monster.h;

            ctx.drawImage(this.images.monster, a.x + (monster.animationFrame * a.w), a.y, a.w, a.h, x, y - h - 1, w, h);

        },

        //-------------------------------------------------------------------------

        renderPlayer: function (ctx) {
            ctx.drawImage(this.images.player, player.animation.x + (player.animationFrame * player.animation.w), player.animation.y, player.animation.w, player.animation.h, tx(player.rx, tower.ir) - player.w / 2, ty(player.ry) - player.h, player.w, player.h);
        },

        //-------------------------------------------------------------------------

        renderScore: function (ctx) {
            if (player.score > this.vscore) {
                this.vscore = this.vscore + 2;
                score.innerHTML = this.vscore;
            }
        },

        //-------------------------------------------------------------------------

        createStars: function () {
            return Game.Canvas.render(CANVAS_WIDTH, CANVAS_HEIGHT, function (ctx) {
                var n, x, y, r, max = 500,
                  colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                  sizes = [0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 2, 2];
                for (n = 0 ; n < max ; n++) {
                    ctx.fillStyle = Game.Math.darken(Game.Math.randomChoice(colors), 1);
                    x = Game.Math.randomInt(2, CANVAS_WIDTH - 4);
                    y = Game.Math.randomInt(2, CANVAS_HEIGHT - 4);
                    r = Game.Math.randomChoice(sizes);
                    ctx.fillRect(x, y, r, r);
                }
            });
        },

        //-------------------------------------------------------------------------

        createGround: function () {
            var w = CANVAS_WIDTH * GROUND_SPEED,
                h = HORIZON_HEIGHT,
                tile = this.images.ground,
                tw = tile.width,
                th = tile.height,
                max = Math.floor(w / tile.width),
                dw = w / max,
                image = Game.Canvas.render(w, h, function (ctx) {
                    var n;
                    for (n = 0 ; n < max ; n++)
                        ctx.drawImage(tile, 0, 0, tw, th, n * dw, 0, dw, h);
                });
            return { w: w, h: h, image: image };
        }

    };

    //===========================================================================
    // VARIABLES
    //===========================================================================

    var tower,
        monsters,
        player,
        camera,
        renderer;

    //===========================================================================
    // GAME - SETUP/UPDATE/RENDER
    //===========================================================================

    function update(dt) {
        player.update(dt);
        monsters.update(dt);
        camera.update(dt);
    }

    function render(dt) {
        renderer.render(dt);
    }

    function setup(images, level) {
        tower = Object.create(Tower).init(level);
        monsters = Object.create(Monsters).init(level);
        player = Object.create(Player).init();
        camera = Object.create(Camera).init();
        renderer = Object.create(Renderer).init(images);
    }

    function onkey(event, key, pressed) {
        switch (key) {
            case KEY.LEFT:
                player.input.left = pressed;
                event.preventDefault();
                return false;
            case KEY.RIGHT:
                player.input.right = pressed;
                event.preventDefault();
                return false;

            case KEY.SPACE:
                player.input.jump = pressed && player.input.jumpAvailable;
                player.input.jumpAvailable = !pressed;
                break;
        }
    }

    function run(getLevelData, level) {
        Game.Load.level(getLevelData, level, function (levelData) {
            Game.Load.images(IMAGES, function (images) {

                setup(images, levelData);

                Game.run({
                    fps: FRAMES_PER_SECOND,
                    update: update,
                    render: render
                });


                // Add event listeners for 'keydown' and 'keyup'

                document.addEventListener('keydown', function (event) {
                    return onkey(event, event.keyCode, true);
                }, false);

                document.addEventListener('keyup', function (event) {
                    return onkey(event, event.keyCode, false);
                }, false);
            });
        });
    }

    //===========================================================================
    // LETS PLAY!
    //===========================================================================

    run(window.getDataForLevel, 0);

    //---------------------------------------------------------------------------

})();
