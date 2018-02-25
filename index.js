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

for (var i = 0; i < pushInPositions; i++) {
  console.log(i +1, positions[i]); 
}

var getDeLoreanIndex = positions.indexOf('Машина времени DeLorean'),
delNumbers = positions.splice(getDeLoreanIndex, 1);

positions.unshift(...delNumbers);

console.log('Принять в первую очередь');
for (var i = 0; i < 3; i++) {
  console.log(i +1, positions[i]);
}
