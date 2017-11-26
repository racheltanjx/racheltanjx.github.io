$(document).ready(function() {



$(".pic3").hover(function(){
// jQuery Function Number 4
    $(".caption1").css("background-color", "grey");
    }, function(){
    $(".caption1").css("background-color", "white");
});

$(".pic4").hover(function(){
    $(".caption2").css("background-color", "grey");
    }, function(){
    $(".caption2").css("background-color", "white");
});

$(".pic5").hover(function(){
    $(".caption3").css("background-color", "grey");
    }, function(){
    $(".caption3").css("background-color", "white");
});


$(".add").hover(function(){
	// jQuery Function Number 5
        $(".bread").slideUp();
    }, function(){
    	$(".bread").slideDown();
    });

$(".add").hover(function(){
	// jQuery Function Number 6
        $(".add").addClass("change");
    }, function(){
    	$(".add").removeClass("change");
});

})