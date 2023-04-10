// INCLUDE 파일 공통요소 불러오는 스크립트
$(document).ready( function() {
    
    $("#header").load("../../../html/include/header.html"); // 헤더 INCLUDE  
    $("#footer").load("../../../html/include/footer.html"); // 푸터 INCLUDE
    $("#quickMenu").load("../../../html/include/quick-menu.html"); // 퀵메뉴 INCLUDE
    $("#pagination").load("../../../html/include/pagination.html"); // 페이지네이션 INCLUDE

});
  