$(document).ready(function(){
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