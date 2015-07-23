var initIntroAnimation  = (function (canvas) {
    function initIntroAnimation (canvas)  {
        var stage,
            exportRoot;

        (function () {
            canvas = document.getElementById("intro-animation-canvas");
            exportRoot = new lib.BlackRussianIntro();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        } ())
    }

    return initIntroAnimation;
}());