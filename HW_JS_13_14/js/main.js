"use strict";
$(function(){

	var html = $('#test').html();
	var data = {
		whats: ['Чему равно 2+2?',
				'Сколько лет в столетии?:)',
				'Какие из цветов присутствуют на флаге Норвегии?'],
		variants: [['3',
					'4',
					'5'],
					['10',
					'100',
					'1000'],
					['красный',
					'зеленый',
					'синий']]
	};
	
	var seriaData = JSON.stringify(data);
	localStorage.setItem("myKey", seriaData);

	
	
	$('body').append("<div class='modalka'><div class='inner'></div></div>");
	$('.inner').append("<h1>Начать тест?</h1><div class='inner_butn clearfix'><button class='butn_mod' id='butn_in'>Начать</button><div class='spac'>&nbsp;</div><button class='butn_mod' id='butn_out'>Отмена</button></div>");
	
	butn_in.onclick = function(){
		$('.modalka').empty().remove();
		$(".box").show();
		$('.titlo').append("<p class='titl'>Тест по программированию</p>");
		
		var returnObj = JSON.parse(localStorage.getItem("myKey"));
		var content = tmpl(html, returnObj);
		$('.vars').append(content);
		
		$('.foot').append("<button class='butn' id='butn'>Проверить мои результаты</button>");

		
		butn.onclick = function(){
			var s1 = document.getElementById("chk00");
			var s2 = document.getElementById("chk01");
			var s3 = document.getElementById("chk02");
			var s4 = document.getElementById("chk10");
			var s5 = document.getElementById("chk11");
			var s6 = document.getElementById("chk12");
			var s7 = document.getElementById("chk20");
			var s8 = document.getElementById("chk21");
			var s9 = document.getElementById("chk22");
			
			if(s2.checked && s5.checked && s7.checked && s9.checked) {
				$('body').append("<div class='modalka2'><div class='inner'></div></div>");
				$('.inner').append("<h2>Тест пройден успешно!</h2><div class='inner_butn clearfix'><button class='butn_mod' id='ok_test'>Вперед!</button>");
				$('.modalka2').fadeIn(500);
				$('h2').addClass('good');
					ok_test.onclick = function(){
						$('h2').removeClass('good');
						$('.modalka2').empty().remove();
						location.assign("http://www.google.com.ua");
					}
			}
			
			if(!s1.checked && !s2.checked && !s3.checked && !s4.checked && !s5.checked && !s6.checked && !s7.checked && !s8.checked && !s9.checked) {
				$('body').append("<div class='modalka3' id='modalka3'><div class='inner'></div></div>");
				$('.inner').append("<h2>Вы не отметили варианты!</h2><div class='inner_butn clearfix'><button class='butn_mod' id='no_variants'>Вернуться!</button>");
				$('.modalka3').fadeIn(500);
					no_variants.onclick = function(){
						$('.modalka3').empty().remove();
					}
					modalka3.onclick = function(){
						$('.modalka3').empty().remove();
					}
			} else if(!s7.checked || !s9.checked || !s5.checked || !s2.checked) {
				$('body').append("<div class='modalka2'><div class='inner'></div></div>");
				$('.inner').append("<h1>Тест не пройден!</h1><div class='inner_butn clearfix'><button class='butn_mod' id='no_test'>Повторите попытку!</button>");
				$('.modalka2').fadeIn(500);
				$('h1').addClass('bed');
					no_test.onclick = function(){
						$('h1').removeClass('bed');
						$('.modalka2').empty().remove();
						location.reload();
					}
			}
		}
		
	}

	
	butn_out.onclick = function(){
		$('.modalka').empty().remove();
	}

});