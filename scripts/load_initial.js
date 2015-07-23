(function (initIntroAnimation) {
    var bodyElement = document.getElementsByTagName('body')[0],
        introCanvas = document.createElement('canvas'),
        wrapper = document.createElement('div'),
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

    function initWrapperDiv() {
        wrapper.setAttribute('id', 'wrapper');
        wrapper.appendChild(introCanvas);
        bodyElement.appendChild(wrapper);
    }

    function appendToFragment() {
        documentFragment.appendChild(wrapper);
    }

    function appendToBody() {
        bodyElement.appendChild(documentFragment);
    }

    initIntroCanvas();
    initWrapperDiv();
    appendToFragment();
    appendToBody();

    bodyElement.onload = initIntroAnimation(introCanvas);
}(initIntroAnimation));


