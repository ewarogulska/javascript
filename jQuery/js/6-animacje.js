'use strict';

$ (function () { //ponizsze chowa nam wszystkie paragrafy jeden po drugim po kliknieciu na nie po 3s czyli 3 tys milisekund
//    $("p").click(function() {
//        $(this).hide(3000);
//    });
    
//    $("p").click(function() {
//        $(this).hide(3000).show(3000);   //to nam chowa i pokazuje
//    });
//    
//    $("h1").fadeOut(3000).fadeIn(3000);   //naglowek H1 po najechaniu zanika
//    
//   
//    $("h2").slideUp(3000).slideDown(3000);  //elemnty płynnie zwijają się w górę i w dół
    
    
    
//    wykonanie niestandardowej animacji, trzeba najpierw stworzyc dlan iej funkcje animacja
    function animacja() {
        console.log("No i dotarliśmy do końca animacji! Tu sie wywoluje callback"); //dla h2 ustawiamy znow parametry sprzed animacji, patrz nizej
        $("h3").animate({"font-size": "1em", "margin-left" : "0px"}, 3000);
    }
    
    $("h3").animate({"font-size": "3em", "margin-left": "100px"}, 4000, animacja);
   
//    w rezultacie naglowek na h3 powiekszy sie i wroci do swojej pierwotnej wersji
});
