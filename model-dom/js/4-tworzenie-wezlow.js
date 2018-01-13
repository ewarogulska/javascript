'use strict';
//tworzenie dodawanie i usuwanie wezlow

var istniejacyWezel = 
document.getElementById('parFirst').children[2];

//console.log(istniejacyWezel);

//var nowyElement = document.createElement('p');
//var nowyTekst = document.createTextNode('to jest nowy akapit ktory dodalismy na strone');
//to jeszcze sie nie wyswietli na naszej stronie bo jeszcze nie jest dodane


//nowyElement.appendChild(nowyTekst);
//teraz bedziemy dodawac  - na stronie pojawi sie pod akapit link 1 nasz nowy tekst
//istniejacyWezel.appendChild(nowyElement);


//teraz bedziemy usuwac
//istniejacyWezel.removeChild(nowyElement);


//var nowyElement = document.createElement('p');
//wstawianie elementow przed linkiem i za linkiem
//var link = document.querySelectorAll('.link')[2];
//console.log(link);

//wstawiamy przed linkiem
//link.parentElement.insertBefore(nowyElement, link);
//pobralismy rodzica czyli section i na nim wywolalismy metode insertbefore czyli wstaw przed elementem link nasz nowy element


/*ZADANIE dodaj znacznik <br> po każdym linku i usuń z nich arybut klasy*/

//musimy zaczac od porania elementow na ktorych musimy pracowac

var wszystkieLinki = document.querySelectorAll('a');
for (var i=0; i<wszystkieLinki.length; i++) { /*iterujemy-przechodzimy po wszystkich pobranych linkach*/
    var br = document.createElement('br');
    wszystkieLinki[i].parentElement.insertBefore(br, wszystkieLinki[i].nextSibling); /*wstawiamy nasza br przed bratem*/
    wszystkieLinki[i].removeAttribute('class');
}
//powstawialo br i pousuwalo class
