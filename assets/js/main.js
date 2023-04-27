$(document).ready(function(){
    // INCLUDE 파일 공통요소 불러오는 스크립트
    $("#header").load("html/include/header_index.html"); // 헤더 INCLUDE  
    $("#footer").load("html/include/footer.html"); // 푸터 INCLUDE
    $("#topBtn").load("html/include/quick_menu.html"); // 퀵메뉴 INCLUDE
    
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
    init();

    AOS.init({once: true});

    function introFixed() {

        intro.on('mousewheel',$.throttle(100,function(e){

            if (e.originalEvent.wheelDelta >= 0) {
                // console.log('Scroll up');
            }
            else {
                // console.log('Scroll down');
                    gsap.to(window,{scrollTo:"#value",duration:0.8, onComplete:function() {$('body').removeClass('fixed')}})
                
            }
        
        }))

        $(window).on('mousewheel',$.throttle(100,function(e){

            if (e.originalEvent.wheelDelta >= 0 && $(window).scrollTop() < intro.height()) {
                // console.log('Scroll up');
                gsap.to(window,{scrollTo:"#intro",duration:0.5, onStart:function() {$('body').addClass('fixed')}})
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
        gsap.to(introSlide,{alpha:1, ease:Back.easeOut.config(0.3), duration:0.5, delay:2})

    }
    introMotion ()

    function respon() {

        var width = $(window).width()

        if (window.matchMedia("(min-width: 768px)").matches) {
            introFixed();
        } else {
            intro.off('mouseWheel');
            $('body').removeClass('fixed');
        }
        

    }
    respon()

    function resize() {

        $(window).on('resize',$.throttle(500,function(){
            respon()
        }))

    }
    resize();

    function valueAni() {

        gsap.set('.intro-icon-wrap .icon',{ scale:0 })
        gsap.to('.intro-icon-wrap .icon:nth-child(1)',{ scale:1, duration:0.3, delay:0.7 })
        gsap.to('.intro-icon-wrap .icon:nth-child(2)',{ scale:1, duration:0.2, delay:1 })
        gsap.to('.intro-icon-wrap .icon:nth-child(3)',{ scale:1, duration:0.5, delay:1 })
        gsap.to('.intro-icon-wrap .d-pc .icon:nth-child(1)',{ y:-40, repeat:-1, yoyo:true, delay:1, duration:1.2, ease:"Back.aseOut.config(1.71.7)" })
        gsap.to('.intro-icon-wrap .d-pc .icon:nth-child(2)',{ y:-20, repeat:-1, yoyo:true, delay:1, duration:0.7, ease:"Back.aseOut.config(1.71.7)" })
        gsap.to('.intro-icon-wrap .d-pc .icon:nth-child(3)',{ y:-30, repeat:-1, yoyo:true, delay:1, duration:1.1, ease:"Back.aseOut.config(1.71.7)" })

        gsap.set(".purple-line p", {
            x: (i) => i * 1200
        });

        gsap.to(".purple-line p", {
        duration: 20,
        ease: "none",
        x: "-=1200", //move each box 500px to right
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 1200) //force x value to be between 0 and 500 using modulus
        },
        repeat: -1
        });

    }

    const isTouchDevice = false; // 항상 false 값 할당

    if (isTouchDevice) {
        $('.line-wrap').empty();
    } else {
        valueAni();
    }

    // ourStory 모바일 슬라이드
    var storySlide = new Swiper('#storySlide', {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
            el: "#storySlide .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768 : {
                slidesPerView: 4,
                spaceBetween: 16,
                centeredSlides: false,
            },
        }
    });
});

$('#storySlide').on('mouseover', function(){
    storySlide.autoplay.stop();
    console.log('멈춤')
});

$('#storySlide').on('mouseleave', function(){
    storySlide.autoplay.start();
    console.log('시작')
});

// value 롤링
$(function(){
    $('.animate__animated:not(.delay)').viewportChecker({
        classToAdd: 'on',
        offset: 100,
    });

    $('.animate__animated.delay').viewportChecker({
        classToAdd: 'on',
        offset: 125,
    });
});
