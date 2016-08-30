$(document).ready(function() {
//назначаем события на элементы управления
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
  //позиция элементов
    var pixelsOffset = 125;
    var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 //функции прокручивания содержимого
    leftUIEl.click(function() {
        if(currentLeftValue != maximumOffset){
            currentLeftValue += 125;
            elementsList.animate({ left: currentLeftValue + "px"}, 500);
        }
    });
    rightUIEl.click(function() {
        if(currentLeftValue != minimumOffset){
            currentLeftValue -= 125;
            elementsList.animate({ left: currentLeftValue + "px"}, 500);
        }
    });
 
});