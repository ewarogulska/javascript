"use strict";

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

imiona.push('Geralt');

//console.log(imiona);

//console.log(imiona[2] + " i " + imiona[0]);

//metoda pop działa dwrotnie do push

imiona.pop();
imiona.pop();

//console.log(imiona);


//metoda unshift dodaje nową wartośc na początku serii imion

//console.log( imiona.unshift('Robert') );

//console.log(imiona);

//console.log(imiona.shift());
//
//console.log(imiona);

//console.log(imiona.length);

//imiona.push('Kaja');


//metoda join - służy do łączenia elementow w jeden tekst, metoda ta zamienia wszystkie elementytablicy - laczy je jako string

//var stringZTablicy = imiona.join(" - ");
//
//console.log(stringZTablicy);


//odwraca kolejność - np. że imiona są od końca
console.log( imiona.reverse() );


//metoda sort-domyslne sortowanie elementow - lepiej uzyc tego to imion a nie liczb
var tablicaLiczb = [3,67,1,34,99,80];

var posortowanaTablica = tablicaLiczb.sort();

console.log(posortowanaTablica);

