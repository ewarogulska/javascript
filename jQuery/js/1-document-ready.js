'use strict';

//console.log($);

//$( document ).ready( function() {
// kod do wykonania - to nam zapewni że kod sie wywola; sprawdza czy DOM sie wczytal
//    alert('hejka, wczytany DOM i jestem jQuery ');
//    wyskoczy nam alert na stronie jak sie wczyta
//} );   

//skrocona wersja powyzszej komendy wyglada:
$(function() { /*zmieniamy kolor paragrafu 1*/
    $("#paragraf").css("color", "red");
/* lub $("paragraf").css(
   {"color: "red", background-color: "#000"}); czyli w postaci obiektu */
})
    
    
    