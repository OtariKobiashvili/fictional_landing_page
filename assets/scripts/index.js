"use strict";

window.addEventListener("scroll", animateOnScroll, false);

//Function to run on scroll, adds animation to elements as they become visible
function animateOnScroll(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
  sectionTitles = document.querySelectorAll("section h3.title"),
  sectionHRs = document.querySelectorAll("section hr"),
  sectionParagraphs = document.querySelectorAll("section p"),
  destImages = document.querySelectorAll(".destinations .grid li"),
  packagesInfo = document.querySelectorAll(".packages .grid li");

  animateElements(sectionTitles, "slide-in");
  animateElements(sectionHRs, "slide-in");
  animateElements(sectionParagraphs, "fade-in");
  animateElements(destImages, "slide-in");
  animateElements(packagesInfo, "rotate-and-fade-in");
};

/**
 * Resets ad video when unmuted, for the first time
 *
 * @param {Array} els - Array of elements to animate.
 * @param {String} animation - CSS animation to use.
 */
function animateElements(els, animation){
  for(var i = 0; i < els.length; i++) {
    if(isScrolledIntoView(els[i])){
      els[i].classList.add(animation);
    }
  }
}

/**
 * Resets ad video when unmuted, for the first time
 *
 * @param {Element} el - Element to check visibility of.
 */
function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

  return isVisible;
}
