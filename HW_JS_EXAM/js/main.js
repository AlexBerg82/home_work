$(function(){

//show/hide loginn
$("#sign_inn").click(function(){
	$(".login-form").slideToggle("slow");
});

//check if JavaScript is enabled
$('.right_top_block').addClass('js');
//checkbox checked on load
$('.login-form span').addClass('checked').children('input').attr('checked', true);
//click function
$('.login-form span').on('click', function(){
	if ($(this).children('input').attr('checked')){
		$(this).children('input').attr('checked', false);
		$(this).removeClass('checked');
	} else {
		$(this).children('input').attr('checked', true);
		$(this).addClass('checked');
	}
});

//show/hide signinn
$("#sign_up_btn").click(function(){
	$(".login-form").hide();
	
	$('body').append('<div class="modal" id="modal_out"></div>');
	$('.modal').fadeIn(500);
	$('body').append('<div class="sign_up"><a href="" id="close_modal"></a></div>');
	$('.sign_up').append('<form action="#" method="POST"><p>Sign Up</p></form>');
	$('.sign_up form').append('<div class="facebook clearfix"><div class="logo"><img src="img/fbb.png" alt="no-foto" /></div><a href="http://www.facebook.com" target="_blank">Log In <span>with</span>Facebook<span>&rsaquo;</span></a>');
	$('.sign_up form').append('<div class="bord"><div class="bord3"></div><span>Register</span><div class="bord4"></div></div>');
	$('.sign_up form').append('<div class="input_text"></div>');
	$('.input_text').append('<input type="text" class="first_name" placeholder="First Name" />');
	$('.input_text').append('<input type="text" class="last_name" placeholder="Last Name" />');
	$('.input_text').append('<input type="email" class="mail" placeholder="Email Address" />');
	$('.input_text').append('<input type="password" class="pass" placeholder="Choose Password" />');
	$('.input_text').append('<input type="password" class="pass_conf" placeholder="Password Confirm" />');
	$('.sign_up form').append('<div class="check clearfix"></div>');
	$('.check').append('<div class="checker clearfix"></div>');
	$('.checker').append('<input type="checkbox" /><label>I accept</label>');
	$('.sign_up form').append('<button type="submit" class="subm">Create my Account</button>');
	
	//Modal hide
	$("#modal_out").click(function(){
		$('.sign_up').empty().remove();
		$('.modal').empty().remove();
	});
	$("#close_modal").click(function(){
		$('.sign_up').empty().remove();
		$('.modal').empty().remove();
	});
});

//slider
$(function(){
    $("#slidebox").jCarouselLite({
        vertical: false,
        btnPrev: ".previous",
        btnNext: ".next",
        visible: 1,
        start: 0,
		circular: false,
        speed:500
    });
	$("#slidebox2").jCarouselLite({
        vertical: false,
        btnPrev: ".previous2",
        btnNext: ".next2",
        visible: 1,
        start: 1,
		circular: false,
        speed:500
    });
	$("#slidebox3").jCarouselLite({
        vertical: false,
        btnPrev: ".previous3",
        btnNext: ".next3",
        visible: 1,
        start: 2,
		circular: false,
        speed:500
    });
});

//search
 btn_search.onclick = function(){
	$('.item').empty().remove();
	
	var input_search = $("#search_inn").val();
	var URL = "https://pixabay.com/api/?key=3215553-dad85728d2c4b345f2ce56378&per_page=7&q="+encodeURIComponent(input_search);
		$.getJSON(URL, function(data){
			var seriaData = JSON.stringify(data);
			var returnObj = JSON.parse(seriaData);
			$.each(returnObj, function(key, hit){
				$.each(hit, function(key2, value){
					
					$('#container').append('<div class="item"><p>'+value.tags+'</p><img src="'+value.webformatURL+'" alt="no-foto">');
					
				});
			});
		});
}

//search random
var URL = "https://pixabay.com/api/?key=3215553-dad85728d2c4b345f2ce56378&per_page=7";
		$.getJSON(URL, function(data){
			var seriaData = JSON.stringify(data);
			var returnObj = JSON.parse(seriaData);
			
			for(var i = 0; i < returnObj.hits.length; i++) {
				$('#container').append('<div class="item"><p><a href="">'+returnObj.hits[i].tags+'</a></p><img src="'+returnObj.hits[i].webformatURL+'" alt="no-foto">');
			}
		});

//init mozaic
$('#container').masonry({
	itemSelector: '.item',
	columnWidth: 320
});

});