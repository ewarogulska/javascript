'use strict';

//typy danych

//mamy typy proste i złożone

//proste
//typ liczbowy

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


//typ = łańcuch znaków - string
var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);



//typ logiczny - wartosci true lub false

var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGu");
}


//typy specjalne - undefined/null  - gdy odwolujemy sie do jakiejs zmiennej ktora nie jest zdefiniowana w pamieci 

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);

var imieStudenta = "Michal";

//...