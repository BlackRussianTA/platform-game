(function () {
    var bodyElement = document.getElementsByTagName('body')[0],
        introCanvasDiv = document.createElement('div'),
        wrapper = document.createElement('div'),
        documentFragment = document.createDocumentFragment(),
        CONSTANTS = {
            INTRO_CANVAS_WIDTH: '800',
            INTRO_CANVAS_HEIGHT: '500',
            INTRO_SPRITE_LOCATION: 'media/BlackRussianIntroSprite.png',
            INTRO_ANIMATION_DIV_ID: 'intro-animation-div'
        };

    function initIntroCanvas() {
        introCanvasDiv.setAttribute('id', CONSTANTS.INTRO_ANIMATION_DIV_ID);
        introCanvasDiv.setAttribute('width', CONSTANTS.INTRO_CANVAS_WIDTH);
        introCanvasDiv.setAttribute('height', CONSTANTS.INTRO_CANVAS_HEIGHT);
    }

    function initWrapperDiv() {
        wrapper.setAttribute('id', 'wrapper');
        wrapper.appendChild(introCanvasDiv);
        documentFragment.appendChild(wrapper);
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

    bodyElement.onload = drawIntro(CONSTANTS.INTRO_SPRITE_LOCATION, introSpriteCoordinates, CONSTANTS.INTRO_ANIMATION_DIV_ID);
}());


