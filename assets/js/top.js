// TOP 버튼 

$(document).ready(function () {
    
        // 1. 특정 위치에서 부터 버튼 나타고, 사라지게..효과는 fade로
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.top_btn').fadeIn(200);
            } else {
                $('.top_btn').fadeOut(200);
            }
        });
    
        // 2. 버튼 클릭하면 원하는 위치로 이동
        $('.top_btn').click(function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 300);
        });
    
    });