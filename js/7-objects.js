"use strict";
//obiekt; this - odwoluje sie do tego konkretnego obiektu

//var kaja = {
//    imie: "Kaja",
//    wzrost: 152,
//    przedstawOsobe: function() {console.log(this.imie)}
//}

//var krystian = {
//    imie: "Krystian",
//    wzrost: 180,
//    przedstawOsobe: function() {console.log(this.imie)}
//}

//wywołanie, nawiasy oznaczaja, że wywłujemy funkcje
//kaja.przedstawOsobe();
//krystian.przedstawOsobe();

//dodawanie właściwości obiektu; mozemy dodać poza nawiasem { jakieś dane, np. waga
//krystian.waga = 80;
//krystian.wyswietlDetale = function() {
//    console.log(this.imie + ", " + this.wzrost + ", " + this.waga)
//}
//
//krystian.wyswietlDetale();


//console.log(kaja.wzrost);
//
//console.log(kaja);



//KLASY - nazywamy je z wielkiej litery, constructor - służy do skonstruowania obiektu; w nawiasie constructora są parametry-imie,naziwsko,plec;

class Osoba {
    
    constructor(imie, nazwisko, plec) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.plec = plec;
    }
    
    wyswietlDetale() {
        console.log("Imie: " + this.imie + ", Nazwisko: " + this.nazwisko + ", Płeć: " + this.plec);
    }
    
}
//wywolujey metode constructor
var ewa = new Osoba("Ewa", "Rogulska", "Kobieta");
ewa.wyswietlDetale();

var damian = new Osoba("Damian", "Pawelec", "Mężczyzna");
damian.wyswietlDetale();

console.log(ewa);

//lub
//var tablica = [ewa, damian];
//console.log(tablica);
