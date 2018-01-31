$(function(){
    
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); 





var scroll = new SmoothScroll('a[href*="#about"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 800, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {}, // Function. Custom easing pattern

	// Callback API
	before: function () {}, // Callback to run before scroll
	after: function () {} // Callback to run after scroll
});


});

$('.logo').click(function(){
	$(this).next().slideToggle();

})



