'use strict';

//pętla for

for ( var i=4 ; i>0 ; i--) {
    console.log(i);
}


//pętla forEach; imiona maja kolejno index 0, 1, 2
var tablica = [ "Krystian", "Monika", "Danuta" ];

tablica.forEach( function( element, index) {
    console.log( "Element z Indexem: " + index + " ma wartość " + element );
});


for ( var i=0 ; i < tablica.length ; i++) {
     console.log( "Element z Indexem: " + i + " ma wartość " + tablica[i] );
}


//pętla do while
var it = 0;
while ( it < tablica.length ) {
    console.log( tablica[it] );
    it++;
}



//pętla do while
var iter = 2;
do {
//    console.log(iter);
    iter++;
    console.log(iter);
} while ( iter < 5 );


//przerywanie pętli - break
var a = 0;
while ( a < 10 ) {
    console.log(++a);
    
    if ( a == 5 ) {
        break;
    }
}


//przeskakiwanie do kolejnej iteracji - continue
for ( var b = 0; b < 5 ; ++b) {
    if ( b == 2 ) {
        continue;
    } else {
        console.log(b);
    }
    
}