'use strict';

var slideShow = $("slide-show");
//console.log(slideShow);

var slideCount = $(".single-slide").length;
console.log(slideCount);

var slideWidth = $(100 / slideCount);
console.log(slideWidth);

var slideIndex = 0;
console.log(slideIndex);

$(slideShow)
.css({"width": "500%"});
//console.log(slideShow);

$(slideShow).find(".single-slide").css("width", slideWidth * 4, "marginLeft": "slideWidth", "%");
console.log(slideShow);