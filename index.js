'use strict'

var positions = 
[
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)',
    'Машина времени DeLorean',
    'Репликатор домашний STAR-94',
    'Лингвенсор 000-17',
    'Целеуказатель электронный WAY-Y'
],
number = 0,
numberFromOne = 1,
positionsLength = positions.length;

console.log('Окончательный cписок наименований');
while(number < positionsLength && numberFromOne < positionsLength + 1) 
	{
		console.log(numberFromOne++, positions[number++]);
	}

positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');

var positionsLength2 = positions.length;


while(number < positionsLength2 && numberFromOne < positionsLength2 + 1) 
	{
		console.log(numberFromOne++, positions[number++]);
	}

var deLorean = positions.slice(4, 6),
wayY = positions.slice(7, 8),
number1 = 0,
numberFromOne1 = 1;

positions.splice(4, 2);
positions.splice(5, 1);
positions.unshift(...deLorean, ...wayY);

var positionsLength3 = deLorean.length + wayY.length;

console.log('Принять в первую очередь');
while(number1 < positionsLength3 && numberFromOne1 < positionsLength3 + 1) 
	{
		console.log(numberFromOne1++, positions[number1++]);
	}
