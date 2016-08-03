$(document).ready(function() {
	$('ul.tabs.first_tab li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).show();
		$('ul.tabs.first_tab li').removeClass('tab_active');
		$(this).addClass('tab_active');
	});

	
	function simple_tooltip(target_items, name){
		$(target_items).each(function(i){
			$(".input_text").append("<div class='"+name+i+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
			var my_tooltip = "#"+name+i;
				$(this).removeAttr("title").mouseover(function(){
					$(my_tooltip).fadeIn(400);
				}).mouseout(function(){
					$(my_tooltip).fadeOut(400);
				});
		});
	}
	simple_tooltip("input","tooltip");
});