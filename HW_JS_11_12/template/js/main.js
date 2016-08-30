$(function(){

var html = $('#test').html();

var data = {
	title: 'Бердник Александр Николаевич',
	picture: 'img/img.jpg',
	student: 'Студент курса FrontEnd GoIT',
	want: 'Хочу учить фронтенд, потому что:',
	var1: 'Нормальной работы нет',
	var2: 'Платят мало',
	var3: 'Старая работа скучная',
	contact: 'Мой контактный телефон',
	phone: '+380952520017',
	profile: 'Мой профиль facebook',
	profile_name: 'facebook.com',
	link_profile: 'https://www.facebook.com/alexander.berdnik.3',
	feedbak: 'Мой фидбэк:',
	text_feed: 'Приложу все усилия, чтобы сменить работу'
};

var content = tmpl(html, data);
$('body').append(content);

});