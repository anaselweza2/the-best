$(document).ready(function(){
    
      // smooth scroll to div
    $('.scorll li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top 
        },1500);
    });
}); 
    
