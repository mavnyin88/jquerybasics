$(document).ready(function(){

/* < BASIC FUNCTIONS THAT WILL RETURN WHATS IN THE GIVEN TAGS >
$('body')
$('p')
$('h1') */

/* < BASIC FUNCTION CALLS AND EXAMPLES OF A FUNCTION CALLING ANOTHER FUNCTION > */
function theAnonymous(){
	console.log("I am theAnonymous()");
}
theAnonymous();

var ano_func = function(){
	console.log("and I'm ano_func() nice to meet you!")
}

var someFunction = function(){
	console.log('Hello World my name is someFunction()');
}

function someRunner(someFunction){
	console.log("3 * 56 = "+(3*56)); 
	anyFunction();
	someFunction();
}

function anyFunction(){
	console.log("Hi I'm anyFunction()");
	ano_func();
}

someRunner(someFunction); // calls someRunner passes someFunction as argument

/* HIDE A SHOW ELEMENTS ON THE HTML PAGE */
$('h3').hide(6000);

function hideIt(){
	$('h2').hide();
	showIt();
}

function showIt(){
	$('h2').show(6000);
}

hideIt();

/* FADE IN AND FADE OUT */
//$('#pic').fadeOut(6000); didnt work?
//$('#pic2').slideDown(8000); didnt work?
$('#pic').slideUp(3000);
$('#pic2').slideUp(3000);

$('.liAnimate').animate({
	opacity: 0.25,
	width: "70%"
}, 5000);

$('ul').click(
	function(){
	alert('STOP CLICKING ME IM TRYING TO BLEND IN');
	}
);

$('#menu').show(
	function(){
		$('#menu').animate(
			{
			opacity:0.5,
			}
		)
	})




}) // end document ready