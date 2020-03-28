var img = new Image;
img.src = "bg.png";
setTimeout(function(){
	$("body").css("min-height", img.height+"px");
	$("body").append("<div id='mpp' style='position: absolute; left: 0; width: 100%; top: 0; background: url(bg.png) no-repeat; height:"+img.height+"px; z-index: 1000; display: none; opacity: 0.5; background-position-x: "+($(document).width()-img.width)/2+"px; background-position-y: 0px; '></div>");
},200)

$(document).keydown(function(e) {
	if(e.ctrlKey) {
		if ( $("#mpp").css("display")=="block" ){
			$("#mpp").css("display", "none");
		}else{
			$("#mpp").css("display", "block");
		}
	};
	if ( e.which == 107 ){
		if ( parseFloat($("#mpp").css("opacity"))<1 ){ $("#mpp").css("opacity", parseFloat($("#mpp").css("opacity"))+0.05 ); }
	}
	if ( e.which == 109 ){
		if ( parseFloat($("#mpp").css("opacity"))>0 ){ $("#mpp").css("opacity", parseFloat($("#mpp").css("opacity"))-0.05 ); }
	}
	if ( e.shiftKey == false ){
		if ( e.which == 37 ){
			$("#mpp").css("background-position-x", parseFloat($("#mpp").css("background-position-x"))-1 );
		}
		if ( e.which == 38 ){
			$("#mpp").css("background-position-y", parseFloat($("#mpp").css("background-position-y"))-1 );
		}
		if ( e.which == 39 ){
			$("#mpp").css("background-position-x", parseFloat($("#mpp").css("background-position-x"))+1 );
		}
		if ( e.which == 40 ){
			$("#mpp").css("background-position-y", parseFloat($("#mpp").css("background-position-y"))+1 );
		}
	}else{
		if ( e.which == 37 ){
			$("#mpp").css("background-position-x", parseFloat($("#mpp").css("background-position-x"))-10 );
		}
		if ( e.which == 38 ){
			$("#mpp").css("background-position-y", parseFloat($("#mpp").css("background-position-y"))-10 );
		}
		if ( e.which == 39 ){
			$("#mpp").css("background-position-x", parseFloat($("#mpp").css("background-position-x"))+10 );
		}
		if ( e.which == 40 ){
			$("#mpp").css("background-position-y", parseFloat($("#mpp").css("background-position-y"))+10 );
		}
	}
});