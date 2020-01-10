$(document).ready(function() { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
        }
    });
    
    // get all slides
    var decades = document.querySelectorAll(".decade");

    // create scene for every slide
    for (var i=0; i<decades.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: decades[i],
            })
            .setPin(decades[i], {pushFollowers: false})
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }


});