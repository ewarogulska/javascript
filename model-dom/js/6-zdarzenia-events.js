'use strict';

var secondLink = document.getElementsByTagName('a')[1];  /*w ten sposob pobralismy drugi link*/

function alarm(e) {
    e.preventDefault(); 
    console.log('kliknieto link - add event listener');
    console.log('typ eventu: ' + e.type);
}

//secondLink.onclick = alarm;
//wyswietli nam w konsoli gdy klikniemy w akapit link 2

//secondLink.addEventListener('click,', alarm); 
//podpielismy zdarzenie

//secondLink.removeEventListener('click', alarm);
//odpielismy, teraz juz nie blokuje i przeniesie nas na docelowa strone

var mainHeader = document.getElementById('main-header');

function zmianaRozmiaru(e) {
    if (e.type == 'mouseover') {
        mainHeader.style.fontSize = '70px';
    } else {
        mainHeader.style.fontSize = 'inherit';
    }
}

mainHeader.addEventListener('mouseover', zmianaRozmiaru);
mainHeader.addEventListener('mouseout', zmianaRozmiaru);
//po najechaniu mysza zmienia rozmiar Header


//podpiecie funkcji anonimowych
document.getElementById('exampleDiv').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("kliknieto div");
});

document.getElementById('exampleLink').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation(); /*to zatrzyma, ze wyswietli sie nam tylko kliknieto link a nie kliknieto link i kliknieto div - jak zakomentujemy stop pogation to wyswietla sie nam oba zdarzenia*/
    console.log('kliknieto link');
});

