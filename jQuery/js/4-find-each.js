'use strict';

//var p = $("body").find("p");
//znajdzie nam wszystkie p w body

//var p = $("div").find("p");
//znajdzie nam p ktore sa w divie;


//szukamy elementy z body
var body = $("body");
var par = body.find("p"); //zwraca wszystkie znalezione elementy

//console.log(par);

//podajemy tylko index do pobrania; dzieki eq przechodzimy tak jak po tablicy i wyswietli w konsoli tylko p.paragraf
var par = body.find("p").eq(1); //zwraca jeden element o indeksie 1
//console.log(par);


//ta funkcja moze przyjac parametr np index
//$("p").each(function(index) {
//    console.log(index); //wyswietli nam od 0 do 4, czyli przeszlismy funkcją po każdym paragrafie i wyswietlilismy jego index
//})


//aby wyswietlic biezacy element na ktorym jestesmy uzywamy
$("p").each(function(index) {
    console.log($(this)); //uzywamy tego
    $(this).addClass("paragraf-" + index);
});






