window.jQuery || document.write(unescape('%3Cscript src="http://jquery.com/jquery-wp-content/themes/jquery/js/jquery-1.9.1.min.js"%3E%3C/script%3E'))
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
