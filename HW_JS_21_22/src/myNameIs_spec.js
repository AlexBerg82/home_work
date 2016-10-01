var objectIs = function(){
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

	if(typeof data === 'object'){
		return 'object';
	}
}

var stringIs = function(){
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
	var returnObj = JSON.parse(localStorage.getItem("myKey"));
	
	if(typeof seriaData === 'string'){
		return 'string';
	}
}

var localAndParseIs = function(){
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
	var returnObj = JSON.parse(localStorage.getItem("myKey"));
	
	if(typeof returnObj === 'object'){
		return true;
	}
}