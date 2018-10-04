$(document).ready(function(){
    // scrollToAnchor('id3');

    $('.navbar-item').click(function(e){
        e.preventDefault();
        scrollToAnchor('#' + $(this).attr('data-scroll'));
      
       
        console.log($(this).attr('data-scroll'));
        
    });

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

});

function scrollToAnchor(target_id){
    console.log(target_id);
   
    if(target_id == '#home'){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }else{
        $('html, body').animate({
            scrollTop: $(target_id).offset().top - $('.navbar').outerHeight()
        }, 500);

        if($(window).width() < 1088){
            $(".navbar-menu").toggleClass("is-active");
            $(".navbar-burger").toggleClass("is-active");
        }
    }

}

