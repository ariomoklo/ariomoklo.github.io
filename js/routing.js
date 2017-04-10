var currentRoute = "home";

$("button[page]").click(function(){
    var route = $(this).attr("page");
    $(".page").hide();
    
    $('.btn-active').addClass('btn-unactive').removeClass('btn-active');
    $(this).addClass('btn-active');
    
    currentRoute = route;
    $(".page-"+route).fadeIn();
});

window.onload = function(){
    $(".page").hide();
    console.log('masuk0');
    $(".page-home").fadeIn(1500, function(){
       $(".loader-page").fadeOut();
        console.log('masuk');
    });
};