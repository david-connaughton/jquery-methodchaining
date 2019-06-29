
$(document).ready(function() {
//removes class makeRed, adds class makeBorder on mouseenter
	$("button").mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("button").mouseleave(function(){
		$("button").removeClass("makeBorder").addClass("makeRed");
	});
    
    	$("button").click(function(){
    	$(".card_para").slideUp('1000');
    });
    
    /*$("button").click(function() {
		$("p").slideToggle(2000);
	});*/
  
	// hides/shows paragraphs when either button is clicked
	$("button").click(function() {
		$("p").hide(2000).show(2000);
	});
	
	$("#button2").click(function() {
		$("#para2").hide(2000).show(2000);
	});
}); 