// TOP 버튼 

$(document).ready(function () {
    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.top_btn').fadeIn(200);
            } else {
                $('.top_btn').fadeOut(200);
            }
        });
    
        $('.top_btn').click(function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 300);
        });
    
    });