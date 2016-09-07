$(function(){

btn_search.onclick = function(){
	var input_search = $("#search_inn").val();

	var URL = "https://pixabay.com/api/?key=3215553-dad85728d2c4b345f2ce56378&q="+encodeURIComponent(input_search);
	
	$.getJSON(URL, function(data){
	
		if (parseInt(data.totalHits) > 0){
				$(".main_page").hide();
				$('.resalt_page').append('<div class="mini_main"></div>');
				$('.mini_main').append('<div class="logo2"><img src="./img/logo.png" alt="no_img"></div>');
				$('.mini_main').append('<form action="index.html" method="POST" onsubmit="return false;"><div class="input_block2 clearfix"><input type="text" class="search_inn2" id="search_inn2"><a href="" class="btn_key2"></a></div>');
				$('.mini_main').append('<div class="button_block2 clearfix"><button class="btn_search2" id="btn_search2">SEARCH</button></div></form>');
				$('.resalt_page').append('<div class="ned_menu2"></div>');
				$('.ned_menu2').append('<ul class="menu_left2 clearfix"><li><a href="#">All</a></li><li><a href="#">Pictures</a></li><li><a href="#">Videos</a></li><li><a href="#">News</a></li><li><a href="#">Maps</a></li><li><a href="#">Books</a></li>');
				$('.resalt_page').append('<div class="block_left clearfix"></div><div class="block_right clearfix"></div>');
				$('.block_right').append('<div class="ned_result clearfix"><p>Результатов примерно&nbsp;</p><p class="res">100 000</p></div>');
				$('.block_right').append('<div class="out_res"></div>');
				
				
			$.each(data.hits, function(i, hit){
				$('.out_res').append('<div class="wrap_res"><p class="res_name"><a href="'+hit.pageURL+'">'+hit.tags+'</a></p><p class="res_link">'+hit.pageURL+'</p></div>');
			});
		}else{
			console.log('No hits');
		}
	});
	
}

});