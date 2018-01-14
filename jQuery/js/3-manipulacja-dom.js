'use strict';

$(function() {
    
//    var textParagrafu = $("p#paragraf").text();
//    console.log(textParagrafu);
//    wyrzuci nam tekst paragrafu pierwszego w konsoli
    
//    var textParagrafu = $("p#paragraf").text("Nowy paragraf o id paragraf");
//    console.log($("p#paragraf").text());
//    wyrzuci nam w konsoli nowy tekst, ten ktory napisalismy u gory
    
//    var paragrafKolejny = $("p.paragrafnext"); /*przypisujemy selektor do zmiennej*/
//    paragrafKolejny.html("<b>Hello</b> world!"); /*na zmiennej wykonujemy funkcje - wybolduje nam Hello*/
    
//    paragrafKolejny.html("<b>Hello</b> world!").after("treść za elementem");
//    doda nam treść za elementem Hello world

//    var paragrafKolejny = $("p.paragrafnext");
//    paragrafKolejny.html("<b>Hello</b> world!").after("treść za elementem");
//    $(".paragrafnext").append("dodatkowa treść za tekstem");
//    
//    
//    $("h3").remove();
////    usuwa naglowek caly - nie zobaczymy go w strukturze html gdy wyswietlimy strone
//    
//    $("h2").empty();
////    usuwa zawartosc naglowka (treść) ale nie caly naglowek
//    
//    $("h2").html("<span style='color:red;'>kolorowy span w h2</span>");
////    doda nam treść w h2 i zmieni kolor tekstu w h2 na czerwony
//    
////    $("h1").css("font-size", "90px");
////    zmieni nam wielkosc czcionki w naglowku h1
//    
//    $("h1").css({"font-size":"70px", "color":"red", "background-color":"lime"});
////    robimy obiekt - zmieniamy jednoczesnie wielkosc czcionki, kolor tekstu i background color - mozemy zmienic tu wszystko to co mozemy sobie zmieniac za pomoca css
//    
//    
//    var imie = $("input#imie").val();
//    console.log(imie);
////pobralo wartosc inputa czyli "Adam"
//    
//    $("input#imie").val("Ewa");
////    zamienia nam imie w polu formularza - zmienia z adam na Ewa (zobaczymy wstawione imie Ewa)
//
//    $("h1").attr("title"); //pobiera atrybut
//    $("h1").attr("title", "Nagłówek h1"); //ustawia atrybut dla h1

    
    $("h1").addClass("blue");
//    doda nam klasę blue z css - czyli na stronie zobaczymy naglowek h1 na niebiesko
    
    $(".paragrafnext").removeClass("paragrafnext");
//    usuwa klasę z paragrafu drugiego a zostawia kolejny znajdujacy sie tam czyli paragraf-2
    
    
    
});




