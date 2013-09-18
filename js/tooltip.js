window.jQuery || document.write(unescape('%3Cscript src="http://jquery.com/jquery-wp-content/themes/jquery/js/jquery-1.9.1.min.js"%3E%3C/script%3E'))
$.fn.tooltipFollow = function(options)
{
	$.extend({
		texto: "Texto padrão";
		tema: "background:gray;border:1px solid #f4f4f4;";
	}, options);
	
	var div = $(this);
		 $(div).hover(function(event){
		 var tooltip_id = "tooltip_"+Date().getTime();
		 $("body").append("<div id='"tooltip_id"' style="+theme+">"+texto_tooltip+"</div>");
		 $("#"+tooltip_id).css({
			 top:		event.pageY - 25,
			 left:		event.pageX + 30,
			 position:	"absolute",
			 display:	"block"
		 }).fadeIn(250);
	}, function(){
		$("#"+tooltip_id).remove();
	}).mousemove(function(event){
	$("#"+tooltip_id).css({
		top			event.pageY - 25,
		left			event.pageX + 30
	});
   })
}

/* Modo de usar */
$("a").tooltipFollow({
	texto: "Teste"
});
