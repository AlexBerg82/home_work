//создание обертки
var wrapper = document.createElement('div');
wrapper.classList.add('box');
document.body.appendChild(wrapper);
var box = wrapper;

//объект
var obj = {
	//функция вставки
	appendElement: function(data) {
		box.appendChild(data);
	},
	//создание заголовка
	bildTitl: function(textTitl){
		var titl = document.createElement('p');
		titl.classList.add('titl');
		titl.innerHTML = textTitl;
		this.appendElement(titl);
	},
	//создание кнопки
	bildButn: function(textButn){
		var butn = document.createElement('button');
		butn.classList.add('butn');
		butn.innerHTML = textButn;
		this.appendElement(butn);
	},
	//создание пунктов
	bildCheck: function(bc, ch, q, vq){
		for(i=0; i<bc; i++){
			var elems = document.createElement('p');
			this.appendElement(elems);
			elems.innerHTML = (i+1)+q+(i+1);

		//создание обертки для каждой группы чекбоксов
		var chkwrap = document.createElement('div');
		chkwrap.classList.add('boxcheck','clearfix');
		this.appendElement(chkwrap);

			//создание группы чекбоксов
			for(j=0; j<ch; j++){
				//создание чекбокса
				var chkbox = document.createElement('input');
				chkbox.type = "checkbox";
				//создание id для чекбоксов
				var aaa = i.toString();
				var bbb = j.toString();
				var chk = 'chk'+aaa+bbb;
				chkbox.setAttribute('id',chk);
				this.appendElement(chkbox);
						
				//создание подписи к чекбоксу
				var lab = document.createElement('label');
				this.appendElement(lab);
				lab.setAttribute('for',chk);
				lab.innerHTML = vq+(j+1);
			}
	}
}

};

//вызов методов объекта
obj.bildTitl('Тест по программированию');				//заголовок
obj.bildCheck(3,3,'. Вопрос №','Вариант ответа № ');	//вопрос и варианты ответов
obj.bildButn('Проверить мои результаты');				//кнопка