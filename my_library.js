$(document).ready(function(){

	console.log("working");

	$('h1').click(function(){
		$(this).css("color","blue").animate({
			fontSize: "80px",
			opacity: .76
		}, 3000);
	})

	$("h2").animate( {  opacity: 0.25} , 2000 );

	//$('p').animate({color:"red"}); //(3000); //.css("color","red")
	//$('p').fadeIn(3000);
	function blinker(){
		$("p").fadeOut(500);
		$("p").css("color","red").fadeIn(500);
	}
	setInterval(blinker,1000);


	$("li").hover(function(){
		$(this).css("background","red"); 
	},function(){
    	$(this).css("background","lightblue");
	});




}) // end document ready