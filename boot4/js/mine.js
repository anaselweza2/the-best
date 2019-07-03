$(document).ready(function(e) {
   
   var winH = $(window).height(),
       upperH = $(".uper-nav").innerHeight(),
	   navH = $(".my-navbar").innerHeight();
	$(".my-slider , .carousel-item").height(winH-(upperH+navH));
	
//futerad-work
$(".featured-work ul li ").on("click" ,function(){
	  $(this).addClass("anas").siblings().removeClass("anas");
	  
	if($(this).data("class")==="all"){
		$(".shuffle-imgs .col-md").css("opacity",1)}
		else{
			$(".shuffle-imgs .col-md").css("opacity" ,.1);
		  $($(this).data("class")).parent().css("opacity",1);
		}
	
	});	
	
});