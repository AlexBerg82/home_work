//объект
var obj = {
	//метод построения DOM
	bildDom: function(){
		//создание обертки
		var wrapper = document.createElement('div');
		wrapper.classList.add('box');
		document.body.appendChild(wrapper);

		//создание заголовка
		var titl = document.createElement('p');
		titl.classList.add('titl');
		titl.innerHTML = 'Тест по программированию';
		//вставка заголовка в обертку
		var box = document.querySelector('.box');	
		box.appendChild(titl);

		//создание пунктов
		for(i=0; i<3; i++){
			var elems = document.createElement('p');
			box.appendChild(elems);
			elems.innerHTML = (i+1)+'. Вопрос №'+(i+1);

		//создание обертки для каждой группы чекбоксов
		var chkwrap = document.createElement('div');
		chkwrap.classList.add('boxcheck','clearfix');
		box.appendChild(chkwrap);

		//создание группы чекбоксов
				for(j=0; j<3; j++){
					//создание чекбокса
					var chkbox = document.createElement('input');
					chkbox.type = "checkbox";
					//создание id для чекбоксов
					var aaa = i.toString();
					var bbb = j.toString();
					var chk = 'chk'+aaa+bbb;
					chkbox.setAttribute('id',chk);
					chkwrap.appendChild(chkbox);
					
					//создание подписи к чекбоксу
					var lab = document.createElement('label');
					chkwrap.appendChild(lab);
					lab.setAttribute('for',chk);
					lab.innerHTML = 'Вариант ответа № '+(j+1);
				}
		}

		//создание кнопки и вставка в обертку
		var butt = document.createElement('button');
		butt.classList.add('butt');
		butt.innerHTML = 'Проверить мои результаты';
		box.appendChild(butt);
	}
};

//вызов метода объекта
obj.bildDom();