"use strict";
var inputNumber;

inputNumber=prompt('Введите число', '');

if (inputNumber>0) {
	alert('1');
} else if (inputNumber<0) {
	alert('-1');
} else if (inputNumber==0) {
	alert('0');
} else {
	alert('Are you retarded?')
}