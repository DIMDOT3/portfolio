var typeItObjArr = [
	{
		elementId: ".type-it",
		startDelay: 1000
	},
	{
		elementId: ".type-it-2",
		startDelay: 3000
	},
	{
		elementId: ".type-it-3",
		startDelay: 5000
	},
	{
		elementId: ".type-it-4",
		startDelay: 6500
	}
];

var navBar = document.querySelector('nav');
var navOpenCloseButtons = document.querySelectorAll('.nav-open-close');
var plusSign = document.querySelectorAll('.plus-sign');
var workCardDescription = document.querySelectorAll('.work-card-description');
var workCards = document.querySelectorAll('.work-card');


workCards.forEach(function(workCard, i){
	workCard.addEventListener('click', function(){
		workCardDescription[i].classList.toggle('description-fade');
	});
});

// looping through elements on landing to time the typing of text elements
(function(elementId, startDelay){
	for(var i = 0; i < typeItObjArr.length; i++){
		$(typeItObjArr[i].elementId).typeIt({
			speed: 65,
			autoStart: false,
			cursor: false,
			startDelay: typeItObjArr[i].startDelay
		});
	}
})();

// typing logic for landing div on page load using type-it.js

$(".type-it-5").typeIt({
	speed: 100,
	autoStart: false,
	cursor: false,
	startDelay: 500
});

// logic for hiding/displaying navbar

navOpenCloseButtons.forEach(function(el){
  el.addEventListener('click', function(){
    navBar.classList.toggle("nav-function");
  });
});

// smooth transition scrolling to all links
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// work slideshow on index.html
$('.carousel').carousel()
