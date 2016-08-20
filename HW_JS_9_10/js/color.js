$(document).ready(function(){
$(".services > li > a,.submenu > li > a,.submenu2 > li > a").mouseenter(
  function () {
	$(this).animate({
		backgroundColor:"#f00",
     }, 800 );
  });

$(".services > li > a,.submenu > li > a,.submenu2 > li > a").mouseleave(function() {
	$(this).animate({
		backgroundColor:"#E14B4B",
     }, 800 );
});
});