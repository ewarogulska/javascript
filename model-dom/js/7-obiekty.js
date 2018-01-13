'use strict';

class Ogloszenie {
    constructor(tytul, opis, kategoria, status, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.status = status;
        this.cena = cena;
    }
    pobierzTytul() {
        return this.tytul;
    }
}

var ogloszenie1 = new Ogloszenie('Sprzedam Opla', 'kombi 2009 r. w dobrym stanie', 'motoryzacja', 'aktywne', 15000);

var ogloszenie2 = new Ogloszenie('Sprzedam Passata', 'igła, nie bity, od Niemca', 'motoryzacja', 'nieaktywne', 5000);

var ogloszenie3 = new Ogloszenie('Sprzedam mieszkanie', 'w super lokalizacji', 'nieruchomości', 'aktywne', 500000);

//console.log(ogloszenie1);
//console.log(ogloszenie2);
//console.log(ogloszenie3);

//console.log(ogloszenie2.tytul);
//console.log(ogloszenie2.pobierzTytul());

var arr = [
    {tytul: "w pustyni i w puszczy", stan: true},
    {tytul: "rura", stan: false}
];

for (var i=0; i<arr.length; i++) {
//    console.log(arr[i].tytul); 
    /*dobieramy sie do konretneg elementu tablicy-skladowych obiektow*/
    
    if (arr[i].stan == true) {
        console.log("hurrra");
    } else {
        console.log("nie hurrra");
    }
}