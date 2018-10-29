"use strict";
var profession;
profession=prompt('Какова твоя профессия?', 'Повар');

if (profession=='Повар') {
	alert('Выберите что-то иное');
} else if (profession=='Кодзима') {
	alert('Гений');
} else {
	alert('Ты самый заурядный дебич');
}