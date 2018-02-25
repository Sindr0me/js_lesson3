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
pushInPositions = positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');

console.log('Окончательный cписок наименований');

// избавьтесь от переменной number. Это же i+1
for (var i = 0, number = 0; i < pushInPositions; i++, number++) {
  console.log(number +1, positions[i]); // тут сложно. Увеличивайте i на этапе шага (в круглых скобках), а не в теле цикла
}

var getDeLoreanIndex = positions.indexOf('Машина времени DeLorean'),
delNumbers = positions.splice(getDeLoreanIndex, 1);

positions.unshift(...delNumbers);

console.log('Принять в первую очередь');
for (var i = 0, number2 = 0; i < 3; i++, number2++) {
  console.log(number2 +1, positions[i]);
}
