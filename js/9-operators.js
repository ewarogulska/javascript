'use strict';

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

//to jest to samo co liczba1 = liczba1 + liczba2; co to:
liczba1 += liczba2;

console.log(liczba1);

if ("2" === 2) {
    console.log("prawda");
} else {
    console.log("Nieprawda");
}
//wyrzuci nam nieprawdę bo poza tym, że są te same cyfry to jedna jest w string - ma cudzyslow, a === to wykryje w przeciwienstwie do ==

if ( !( ("2" === 2) && (8 < 4) ) ) {
    document.write("<br> prawda");
}
//to sie wyswietli w oknie przegladarki-dla uzytkownika


//operator warunkowy
!( 8 > 4) ? console.log('Prawda') : console.error('fałsz');

console.log(console);