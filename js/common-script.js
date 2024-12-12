$(function(){
    $('#main-menu > li').mouseenter(function(){
        /* $(this) : 현재 실행 중인 문서 객체, 메인메뉴 4개중 이벤트가 발생한 메인메뉴를 선택 */
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('#main-menu > li').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp();
    });

    $('#trigger').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('#main-menu').toggleClass('active');
    });
});