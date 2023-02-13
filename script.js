$(".ham").click(function(){
    $(".burger").toggleClass("opened");
    $(".burger").attr("aria-expanded", $(this).hasClass("opened"));
    $(".burger").attr("aria-label", "Main Menu");
    $(".side-menu").toggleClass("slide");
    $(".shadow").toggleClass("opa");
    $(".side-menu").append('<div class="top-right">');
});


$(".one").click(function(){
    $(".one").toggleClass("activate");
    if($(".one").hasClass("activate")){
        $(".sub-one").addClass("grow");
        $(".sub-one").removeClass("shrink");
    }
    else{
        $(".sub-one").removeClass("grow");
        $(".sub-one").addClass("shrink");
    }
});

$(".two").click(function(){
    $(".two").toggleClass("activate");
    if($(".two").hasClass("activate")){
        $(".sub-two").addClass("grow");
        $(".sub-two").removeClass("shrink");
    }
    else{
        $(".sub-two").removeClass("grow");
        $(".sub-two").addClass("shrink");
    }
});

$(".small").click(function(){
    $(".small").toggleClass("activate");
    if($(".small").hasClass("activate")){
        $(".anime-one").css("display", "block");
        $(".anime-one").addClass("grow");
        $(".anime-one").removeClass("shrink");
        $(".smalls").addClass("drop");
    }
    else{
        $(".anime-one").removeClass("grow");
        $(".anime-one").addClass("shrink");
        setTimeout(function(){
            $(".smalls").removeClass("drop");
        },450);
        setTimeout(function(){
            $(".anime-one").css("display", "none");
        },450);
    }
});

$(".smalls").click(function(){
    $(".smalls").toggleClass("activate");
    if($(".smalls").hasClass("activate")){
        $(".anime-two").css("display", "block");
        $(".anime-two").removeClass("shrink");
        $(".anime-two").addClass("grow");
    }
    else{
        $(".anime-two").removeClass("grow");
        $(".anime-two").addClass("shrink");
        setTimeout(function(){
            $(".anime-two").css("display", "none");
        },450);
    }
});