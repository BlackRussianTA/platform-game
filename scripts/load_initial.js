// TODO: To extract as separate js file after RequireJS usage conformation

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

(function (initIntroAnimation) {
    var bodyElement = document.getElementsByTagName('body')[0],
        introCanvas = document.createElement('canvas'),
        documentFragment = document.createDocumentFragment(),
        CONSTANTS = {
            INTRO_CANVAS_WIDTH: '800',
            INTRO_CANVAS_HEIGHT: '500'
        };

    function initIntroCanvas() {
        introCanvas.setAttribute('id', 'intro-animation-canvas');
        introCanvas.setAttribute('width', CONSTANTS.INTRO_CANVAS_WIDTH);
        introCanvas.setAttribute('height', CONSTANTS.INTRO_CANVAS_HEIGHT);
    }

    function appendToBody(){
        documentFragment.appendChild(introCanvas);
        bodyElement.appendChild(documentFragment);
    }

    initIntroCanvas();
    appendToBody();

    bodyElement.onload = initIntroAnimation(introCanvas);
}(initIntroAnimation));


