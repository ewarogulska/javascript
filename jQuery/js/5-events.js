'use strict';

$ (function () {
//    $("p").click(function() {  //to jest ten paragraf na ktorym wykonujemy zdarzenie - gdy dodamy $ this, jak poniżej - po kliknieciu w paragrafy na stronie beda one zmieniac kolor na red
//        $(this).css({"color": "red"});
//    })
    
    $("p").click(function() {  
        $("p").css({"color": "#000"});
        $(this).css({"color": "red"});
    });
//    za pomoca powyzszego jak klikamy na kolejny paragraf to kolor poprzedniego wraca na czarny - w pierwszej kolejnosci nadaje wszystkim paragrafom kolor czary a temu na ktory klikam nadaje kolor czerwony
    
    
    
// za pomoca ponizszego zrobilismy zdarzenie ze przy kliknieciu na h1 zmienia kolor na pomaranczowy a po zjechaniu myszka z h1 zmienia kolor na czarny   
    $("h1").on ( {
        'click': function() {
            $(this).css({"color": "orange"});
        },
        'mouseleave': function() {
            $(this).css({"color": "black"});
        }
    })
});


