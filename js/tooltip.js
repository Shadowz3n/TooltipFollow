$.fn.tooltipFollow = function(tooltip, classe)
{
	var div = $(this);
		$(div).hover(function(e){
		 $("body").append("<div class='"+classe+"'>"+tooltip+"</div>");
		 $("."+classe).css({
			 top : e.pageY - 25,
			 left : e.pageX + 30
		 }).fadeIn(250);
 
	}, function(){
		$("."+classe).remove();
	}).mousemove(function(e){
	$("."+classe).css({
			 top : e.pageY - 25,
			 left : e.pageX + 30
		 })
   })
}

/* Modo de usar */
$("a").tooltipFollow("Texto do tooltip", "tooltipClass");