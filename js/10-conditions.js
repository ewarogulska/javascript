'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 180;

//warunek if

if ( wzrostOlgi < wzrostMateusz ) {
    console.log("Olga jest niższa");
}


//warunek if else

if ( wzrostOlgi > wzrostMateusz ) {
    console.log("Olga jest wyższa");
} else 
    console.log("Olga jest niższa");

//warunek if else if - mozmy dać dużo warunków
if ( wzrostOlgi > wzrostMateusz ) {
    console.log("Olga jest wyższa");
} else if ( wzrostOlgi == wzrostMateusz ) {
    console.log("Olga tak wysoka jak Mateusz");
    } else {
        console.log("Olga jest niższa");
    }

//warunek switch
var kolor = "zielony";

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor')
}
//jesli nie ma break to pojdzie dalej do kolejnego breaka

