'use strict';

var pierwszyDiv = document.getElementById('parFirst');
//lub document.querySelector('#parFirst');

//var rodzicDiva = pierwszyDiv.parentElement;
//console.log(rodzicDiva);


var dzieciDiva = pierwszyDiv.childNodes[0]; /*jak dodamy [0] to zwroci nam tylko text, jak jest samo childNodes to zwroci wszystko*/
//console.log(dzieciDiva);

var dzieciDiva = pierwszyDiv.children;
//console.log(dzieciDiva);

var dzieciDiva = pierwszyDiv.firstChild;
//console.log(dzieciDiva);
//zwroci pierwszy element zagniezdzony w tym (pierwsze dziecko danego rodzica)

var dzieciDiva = pierwszyDiv.lastChild;
//console.log(dzieciDiva);
//zwroci ostatnie dziecko danego rodzica

var rodzenstwoNastepne = pierwszyDiv.nextSibling;
//console.log(rodzenstwoNastepne);


var rodzenstwoNastepne = pierwszyDiv.nextElementSibling;
//console.log(rodzenstwoNastepne);
//zwroci nam parSecond


var rodzenstwoPoprzednie = pierwszyDiv.previousSibling;
//console.log(rodzenstwoPoprzednie);

var rodzenstwoPoprzednie = pierwszyDiv.previousElementSibling;
//console.log(rodzenstwoPoprzednie);
//zwroci nam header


//przechodzenie o wszystkich dzieciach elementu
var dzieciElementu = pierwszyDiv.childNodes;

//dzieciElementu.forEach( function( element ) {
//    console.log( element );
//});


//dostajemy sie do dzieci tego elementu
var dzieciElementu2 = pierwszyDiv.children;

//for(var i=0; i<dzieciElementu2.length; i++) {
//    console.log(dzieciElementu2[i]);
//}


var dzieciElementu = pierwszyDiv.childNodes;

dzieciElementu.forEach( function( element ) {
    console.log( 'nodeType = ' + element.nodeType );
} );
//wyskoczy nam na zmiane tekst, html, text, html...


