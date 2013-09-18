window.jQuery || document.write(unescape('%3Cscript src="http://jquery.com/jquery-wp-content/themes/jquery/js/jquery-1.9.1.min.js"%3E%3C/script%3E'))
$.fn.tooltipFollow = function(options)
{
	var opt = $.extend({
		texto: 		"Texto padrão",
		background: 	"gray",
		color:		"white",
		top:  		-25,
		left: 		+30
	}, options);
	
	var div = $(this);
	$(div).hover(function(event){
		 var tooltip_id = "tooltip_"+Date().getTime();
		 $("body").append("<div id='"tooltip_id"' style='background:"+opt.background+";color:"+opt.color+";padding:10px;'>"+opt.texto+"</div>");
		 $("#"+tooltip_id).css({
			 top:		event.pageY - opt.top,
			 left:		event.pageX + opt.left,
			 position:	"absolute",
			 display:	"block"
		 }).fadeIn(250);
	}, function(){
		$("#"+tooltip_id).remove();
	}).mousemove(function(event){
	$("#"+tooltip_id).css({
		top			event.pageY - opt.top,
		left			event.pageX + opt.left
	});
   })
}

/* Modo de usar */
$("a").tooltipFollow({
	texto: "Teste"
});
