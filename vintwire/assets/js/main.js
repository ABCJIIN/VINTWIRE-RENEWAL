$(document).ready(function(){
    
    const intro = $('#intro');
    const value = $('#value');

    function init() {
        history.scrollRestoration = "manual"
        $('body').addClass('fixed')
        $('.animate__animated:not(.delay)').viewportChecker({
            classToAdd: 'on',
            offset: 100,
        });
    
        $('.animate__animated.delay').viewportChecker({
            classToAdd: 'on',
            offset: 125,
        });
    }
    init()

    function introFixed() {

        intro.on('mousewheel',$.throttle(100,function(e){

            if (e.originalEvent.wheelDelta >= 0) {
                // console.log('Scroll up');
            }
            else {
                // console.log('Scroll down');
                    gsap.to(window,{scrollTo:"#value",duration:1.5, onComplete:function() {$('body').removeClass('fixed')}})
                
            }
        
        }))

        $(window).on('mousewheel',$.throttle(100,function(e){

            if (e.originalEvent.wheelDelta >= 0 && $(window).scrollTop() < intro.height()) {
                // console.log('Scroll up');
                gsap.to(window,{scrollTo:"#intro",duration:1.5, onStart:function() {$('body').addClass('fixed')}})
            }
        
        }))

    }

    function introMotion () {

        const introTitles = intro.find('.title span')
        const introSlide = intro.find('.slide-wrap')
        gsap.set(introSlide,{alpha:0})
        gsap.to(introTitles.eq(0),{top:0, delay:0.5})
        gsap.to(introTitles.eq(1),{top:0, delay:0.7})
        gsap.to(introTitles.eq(2),{top:0, delay:0.9})
        gsap.to(introSlide,{alpha:1, ease:Back.easeOut.config(0.3), duration:1.8, delay:2})

    }
    introMotion ()

    function respon() {

        var width = $(window).width()

        if (window.matchMedia("(min-width: 768px)").matches) {
            introFixed()
        } else {
            intro.off('mouseWheel')
            $('body').removeClass('fixed')
        }
        

    }
    respon()

    function resize() {

        $(window).on('resize',$.throttle(500,function(){
            respon()
        }))

    }
    resize()

});