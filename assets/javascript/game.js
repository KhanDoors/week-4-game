
var randon_results;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 69) + 30;
    $("#result").html('Random Result: ' + random_result);
    for(var i = 0; i < 4; i++){
         var random = Math.floor(Math.random() * 11) + 1;
       
        var crystal = $("<div>");
            crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
                 
     $(".crystals").append(crystal);
     }
     $("#previous").html("Total Score:" + previous);
}

resetAndStart();

$(document).on('click', ".crystal", function () {
var num = parseInt($(this).attr('data-random'));
previous += num;

$("#previous").html("Total Score:" + previous);

console.log(previous);
if(previous > random_result){
    lost++;
    $("#lost").html("Sorry you Lost!" + lost);
    previous = 0;

       resetAndStart();
}
else if(previous === random_result){
    win++;
    $("#win").html("You Won!" + win);

    previous = 0;
    resetAndStart();
}
});

