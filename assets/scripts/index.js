"use strict";


window.addEventListener("scroll", animateOnScroll, false);

function animateOnScroll(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      sectionTitles = document.querySelectorAll("section h3.title"),
      sectionHRs = document.querySelectorAll("section hr"),
      sectionParagraphs = document.querySelectorAll("section p"),
      destImages = document.querySelectorAll(".destinations .grid li");



  animateElements(sectionTitles, "slide-in");
  animateElements(sectionHRs, "slide-in");
  animateElements(sectionParagraphs, "fade-in");
  animateElements(destImages, "slide-in")
};

function animateElements(els, animation){
  for(var i = 0; i < els.length; i++) {
    if(isScrolledIntoView(els[i])){
      els[i].classList.add(animation);
    }
  }
}


function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

  return isVisible;
}
