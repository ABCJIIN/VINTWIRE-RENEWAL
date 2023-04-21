$(document).ready(function(){
    // // INCLUDE 파일 공통요소 불러오는 스크립트
    $("#header").load("../../include/header.html"); // 헤더 INCLUDE  
    $("#footer").load("../../include/footer.html"); // 푸터 INCLUDE

    /* 공통 */
    function init() {
        history.scrollRestoration = "manual"
        // $('body').addClass('fixed');
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

    // 반응형
    function respon(){
        var width = $(window).width();
        if (window.matchMedia("(max-width: 768px)").matches) {
            $('.benefit-list:nth-child(2) .benefit-item02').appendTo('.benefit-list:first-child');
            $('.benefit-list:nth-child(3) .benefit-item03').appendTo('.benefit-list:first-child');
            $('.benefit-list:nth-child(4) .benefit-item04').appendTo('.benefit-list:first-child');
            $('#about .tag-info').addClass('purple-box');
        }else{
            $('.benefit-list:first-child .benefit-item02').appendTo('.benefit-list:nth-child(2)');
            $('.benefit-list:first-child .benefit-item03').appendTo('.benefit-list:nth-child(3)');
            $('.benefit-list:first-child .benefit-item04').appendTo('.benefit-list:nth-child(4)');
            $('#about .tag-info').removeClass('purple-box');
        }
    }respon();

    function resize() {
        $(window).on('resize',$.throttle(500,function(){
            respon();
        }))
    }resize();

    AOS.init({once: true});

    /* about */
    // about 상단 비쥬얼
    const isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
    function aboutAni() {
        gsap.set('.intro-icon-wrap .icon',{ scale:0 })
        gsap.to('.intro-icon-wrap .icon.value',{ scale:1, duration:0.3, delay:0.7 })
        gsap.to('.intro-icon-wrap .icon.tech',{ scale:1, duration:0.2, delay:1 })
        gsap.to('.intro-icon-wrap .icon.wire',{ scale:1, duration:0.5, delay:1 })
        gsap.to('.intro-icon-wrap .icon.value',{ y:-10, repeat:-1, yoyo:true, delay:1, duration:1.2, ease:"Back.aseOut.config(1.71.7)" })
        gsap.to('.intro-icon-wrap .icon.value .star.big',{ y: 30, repeat:-1, yoyo:true, duration: 1, delay:.5 })
        gsap.to('.intro-icon-wrap .icon.value .star.small',{ y: -10, repeat:-1, yoyo:true, duration: 1.2, delay:.5 })
        gsap.to('.intro-icon-wrap .icon.tech',{ y:-20, repeat:-1, yoyo:true, delay:1, duration:0.7, ease:"Back.aseOut.config(1.71.7)" })
        gsap.to('.intro-icon-wrap .icon.tech .star.big',{ y: -20, repeat:-1, yoyo:true, duration: 1.2, delay:.5 })
        gsap.to('.intro-icon-wrap .icon.tech .star.small',{ y: 10, repeat:-1, yoyo:true, duration: .8, delay:.5 })
        gsap.to('.intro-icon-wrap .icon.wire',{ y:-30, repeat:-1, yoyo:true, delay:1, duration:1.1, ease:"Back.aseOut.config(1.71.7)" })
        gsap.to('.intro-icon-wrap .icon.wire .star.big',{ y: 15, repeat:-1, yoyo:true, duration: .5, delay:.5 })
        gsap.to('.intro-icon-wrap .icon.wire .star.small',{ y: -5, repeat:-1, yoyo:true, duration: 1, delay:.5 });

        gsap.set(".line p", {
            x: (i) => i * 1320
        });

        gsap.to(".line.gray p", {
        duration: 20,
        ease: "none",
        x: "+=1320", //move each box 500px to right
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 1320) //force x value to be between 0 and 500 using modulus
        },
        repeat: -1
        });

        gsap.to(".line.purple p", {
        duration: 20,
        ease: "none",
        direction:'reverse',
        x: "-=1320", //move each box 500px to right
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 1320) //force x value to be between 0 and 500 using modulus
        },
        repeat: -1
        });
    }
    
    if(isTouchDevice ) {
        $('.line-wrap').empty();
    } else {
        aboutAni();
    }

    var cursor = $('.cursor');
    $('.member-list').mousemove(function(e){
        cursor.addClass('on');
        cursor.css({
            top: e.pageY - cursor.height() / 2,
            left: e.pageX - cursor.width() / 2
        });
    });
    
    $('.member-list').mouseleave(function(e){
        cursor.removeClass('on');
    });

    /* job */
    // job 상단 슬라이드
    var swiper = new Swiper("#teamSwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        autoHeight : false,
        centeredSlides: true,
        pagination: {
            el: "#teamSwiper .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
              centeredSlides: false,
              autoHeight : false,
              resistance : false, 
            },
        },
    });

    // job benefit
    $('#benefit .more-btn').on('click', function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).html('더보기');
            $(this).parents('#benefit').removeClass('on');
        }else{
            $(this).addClass('on');
            $(this).html('접기');
            $(this).parents('#benefit').addClass('on');
        }
    });

    // job faq
    $('.faq-list-comment').slideUp();
    $('.faq-list li.on').find('.faq-list-comment').slideDown();
    $('.faq-list-tit').on('click', function() {
        function slideDown(target) {
          slideUp();
          $(target).parent('li').addClass('on').find('.faq-list-comment').slideDown();
        }

        function slideUp() {
          $('.faq-list-tit').parent('li').removeClass('on').find('.faq-list-comment').slideUp();
        }

        $(this).parent('li').hasClass('on') ? slideUp() : slideDown(this);
    });

});

