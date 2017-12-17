'use strict';

//function wyswietlWKonsoliImie(imieWyswietl) {
//    console.log(imieWyswietl);   
//}
//
//wyswietlWKonsoliImie("Monia");
//wyswietlWKonsoliImie("Ola");
//wyswietlWKonsoliImie("Kuba");
//wyswietlWKonsoliImie("Stan");


function obliczOdsetki(kapital, procent) {
    
    var kapitalZOdsetkami = kapital + kapital * procent;
    
    return kapitalZOdsetkami;
}

//console.log(obliczOdsetki(1000000, 0.015));
//w console.log wywolalismy funkcje

var inwestyjaAnety = obliczOdsetki(1000000, 0.015);

var inwestycjaKuby = obliczOdsetki(1000, 0.05);

console.log(inwestyjaAnety);
//uruchamiamy console.log zeby pokazal co kryje sie w zmiennej inwestycjaAnety
console.log(inwestycjaKuby);



