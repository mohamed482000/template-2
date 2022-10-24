// button back to Top
$(document).ready(function(){
    $(window).scroll(function(){
        var windowscroll = $(window).scrollTop() 
        if(windowscroll >= 400){   
        $(".scrolltop").show()
        
        } else{
            $(".scrolltop").hide()
        }
    })
    $(".scrolltop").click(function(){
        $("html , body").animate({
            scrollTop: 0 //بيطرح الهاي بتاع الهيدر عشان هو بيطلع لوحده المسافه اللي بين السكشن و التوب
        } , "slow"  ) //slow or 5000
    })
})
// Carousel 
$(document).ready(function(){
    
}) //end JQuery(dont write out side)