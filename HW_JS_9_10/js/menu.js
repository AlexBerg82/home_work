$(document).ready(function(){
$(function(){
    $('.services').hide();
    $('.submenu').hide();
    $('.submenu2').hide();
	
    $('.service').hover(
        function(){
	   $('.services').slideDown(150);
        }, function(){
	   $('.services').slideUp(150);
        });

    $('.main_submenu').hover(
        function(){
            $('.submenu').slideDown(150);
        }, function(){
            $('.submenu').slideUp(150);
        });
	
	$('.main_submenu2').hover(
        function(){
            $('.submenu2').slideDown(150);
        }, function(){
            $('.submenu2').slideUp(150);
        });
});
});