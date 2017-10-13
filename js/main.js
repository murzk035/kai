
var snowTimer = 0; //declare our timer for setTimeout


for (var i = 0; i < 200; i++) { //standard for loop to iterate for 200 console lines
    setTimeout(function() { // introduce the setTimout function
        var snow = ""; //empty string that will be filled below!

        for (var s = 0; s < 20; s++) { //for loop stating 40 characters per line

            var snowOrRain = Math.random()*100; 
            // use snowOrRain to determine what combination of ❄, 💧, and " " each line has
            if (snowOrRain < 33) {
                snow += "▙"; //add snow to string
            }else if (snowOrRain > 33 && snowOrRain < 98){
                snow += "▜"; //add rain to string
            }else {snowOrRain > 98
                snow += "▚"; //add space to string
            }



        }
        console.log(snow); //output of snow string
    }, snowTimer); // snowTimer determines when the sleet string is released
    snowTimer += 100; // in order to "animate", each sleet string is released +70 milliseconds after the previous one.
} 

$(document).ready(function() {

	$(".one").mouseenter(function(){
		$("body").css({
			backgroundColor: "lime"
		});
	}).mouseleave(function(){
		$("body").css({
			backgroundColor: "white"
		});
	});

	$(".two").mouseenter(function(){
		$("body").css({
			backgroundColor: "red"
		});
	}).mouseleave(function(){
		$("body").css({
			backgroundColor: "white"
		});
	});
	$(".three").mouseenter(function(){
		$("body").css({
			backgroundColor: "blue"
		});
	}).mouseleave(function(){
		$("body").css({
			backgroundColor: "white"
		});
	});
	$(".four").mouseenter(function(){
		$("body").css({
			backgroundColor: "yellow"
		});
	}).mouseleave(function(){
		$("body").css({
			backgroundColor: "white"
		});
	});
});