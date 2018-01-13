'use strict';

//pobieramy h1
var mainHeader = document.querySelector('h1');
mainHeader.innerHTML = 'nowa tresc naglowka';

var pobierzTresc = mainHeader.innerHTML;
//console.log(pobierzTresc);          /*pobiera nam to co bylo w h1*/

var link = document.querySelectorAll('a')[0];  /*pobiera pierwszy link */
link.href = '#';
link.className = 'nowa-klasa';

//mozemy tez zmeniac wlasciwosci styli - np zmienic kolor dla main header-ale generalna zasada jest taka ze jak cos mozemy zrobic w css to robimy to w css
mainHeader.style.color = "#11aa22";

