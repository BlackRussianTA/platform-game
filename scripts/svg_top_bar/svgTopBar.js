var topBarSVG = (function(){

     var topBarSVG = function(gameWIdth, gameHeight) {

         var topBarSVG = Object.create({});

         var paper = Raphael('svg-container', 800, 500);

         // bar background
         var barBackdround = paper.rect(60, 110, 590, 80, 10);
         barBackdround.attr({
             fill: 'gray',
             stroke: 'none',
             opacity: 0.3
         });

         // bar background
         var icePowerdround = paper.rect(100, 125, 250, 50,15);
         icePowerdround.attr({
             fill: 'white',
             stroke: 'none',
             opacity: 0.8
         });

         // bar background
         var sunPowerdround = paper.rect(350, 125, 250, 50,15);
         sunPowerdround.attr({
             fill: 'black',
             stroke: 'none',
             opacity: 0.5
         });
         sunPowerdround.animate({
             width: 600
         }, 2000)
     };

    return topBarSVG();

}());
