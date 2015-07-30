//-------------------------------------------------------------------------
// POLYFILLS
//-------------------------------------------------------------------------

if (!window.requestAnimationFrame) { // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimationFrame =
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
}

//-------------------------------------------------------------------------
// GAME LOOP
//-------------------------------------------------------------------------

var Game = {

    run: function (options) {

        var now,
            deltaTime = 0,
            last = Game.Math.timestamp(),
            oneFrameTime = 1 / options.fps,
            update = options.update,
            render = options.render;

        function frame() {
            now = Game.Math.timestamp();
            deltaTime = deltaTime + Math.min(1, (now - last) / 1000);
            while (deltaTime > oneFrameTime) {
                deltaTime = deltaTime - oneFrameTime;
                update(oneFrameTime);
            }
            render(deltaTime);
            last = now;
            requestAnimationFrame(frame);
        }

        frame();
    },

    animate: function (fps, entity, animation) {
        animation = animation || entity.animation;
        entity.animationFrame = entity.animationFrame || 0;
        entity.animationCounter = entity.animationCounter || 0;
        if (entity.animation != animation) {
            entity.animation = animation;
            entity.animationFrame = 0;
            entity.animationCounter = 0;
        }
        else if (++(entity.animationCounter) === Math.round(fps / animation.fps)) {
            entity.animationFrame = Game.Math.normalize(entity.animationFrame + 1, 0, entity.animation.frames);
            entity.animationCounter = 0;
        }
    }

};

//-------------------------------------------------------------------------
// CANVAS UTILITIES
//-------------------------------------------------------------------------

Game.Canvas = {

    create: function (width, height) {
        return this.init(document.createElement('canvas'), width, height);
    },

    init: function (canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        return canvas;
    },

    render: function (width, height, render, canvas) { // http://kaioa.com/node/103
        canvas = canvas || this.create(width, height);
        render(canvas.getContext('2d'), width, height);
        return canvas;
    }

};

//-------------------------------------------------------------------------
// ASSET LOADING UTILITIES
//-------------------------------------------------------------------------

Game.Load = {

    level: function (getLevelData, level, callback) { // load level data

        var levelData = getLevelData(level);

        if (levelData) {
            callback(levelData);
        }
    },

    images: function (names, callback) { // load multiple images and callback when ALL images have loaded

        var i, name,
            result = {},
            count = names.length,
            len = count,
            onload = function () {
                if (--count === 0) {
                    callback(result);
                }
            };

        for (i = 0 ; i < len ; i += 1) {
            name = names[i];

            result[name] = document.createElement('img');

            result[name].addEventListener('load', onload);

            result[name].src = "images/" + name + ".png";
        }
    }
};

//-------------------------------------------------------------------------
// MATH UTILITIES
//-------------------------------------------------------------------------

Game.Math = {

    lerp: function (n, dn, dt) {
        return n + (dn * dt);
    },

    timestamp: function () {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    },

    bound: function (x, min, max) {
        return Math.max(min, Math.min(max, x));
    },

    between: function (n, min, max) {
        return ((n >= min) && (n <= max));
    },

    brighten: function (hex, percent) {

        var a = Math.round(255 * percent / 100),
            r = a + parseInt(hex.substr(1, 2), 16),
            g = a + parseInt(hex.substr(3, 2), 16),
            b = a + parseInt(hex.substr(5, 2), 16);

        r = r < 255 ? (r < 1 ? 0 : r) : 255;
        g = g < 255 ? (g < 1 ? 0 : g) : 255;
        b = b < 255 ? (b < 1 ? 0 : b) : 255;

        return '#' + (0x1000000 + (r * 0x10000) + (g * 0x100) + b).toString(16).slice(1);
    },

    darken: function (hex, percent) {
        return this.brighten(hex, -percent);
    },

    normalize: function (n, min, max) {
        while (n < min) {
            n += (max - min);
        }

        while (n >= max) {
            n -= (max - min);
        }

        return n;
    },

    normalizeAngle180: function (angle) { return this.normalize(angle, -180, 180); },
    normalizeAngle360: function (angle) { return this.normalize(angle, 0, 360); },

    random: function (min, max) { return (min + (Math.random() * (max - min))); },
    randomInt: function (min, max) { return Math.round(this.random(min, max)); },
    randomChoice: function (choices) { return choices[this.randomInt(0, choices.length - 1)]; }

};

//-------------------------------------------------------------------------

