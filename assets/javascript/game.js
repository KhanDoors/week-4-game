
var randon_results;
var lost = 0;
var win = 0;
var previous = 0;






var resetAndStart = function () {
   
    $(".crystals").empty();

    
	var images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8QhvcjQYEmiHd0V2cPw7yBaYCg6XMxY_eIvT6dCOicagObysIA', 
        'https://typeset-beta.imgix.net/uploads/image/2017/11/20/6721615d-edbc-4e92-83d9-d55d74a9b665-crystals-kim-kardashian.jpg?w=748&h=448&fit=crop&crop=faces&auto=format&q=70', 
        'https://www.crystallight.co.nz/images/library/tuxpi.com.1474844554.jpg', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyrerZWU6hRuf8RdDbPr5dz8397kaA3F_fyHp_6yuUJNiMPkN'];
    

    random_result = Math.floor(Math.random() * 69 ) + 30;


    $("#result").html('Random Result: ' + random_result);
  
    for(var i = 0; i < 4; i++){

         var random = Math.floor(Math.random() * 11) + 1;
       
        var crystal = $("<div>");
            crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
          
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

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

    $("#win").html("You Won: " + win);

    previous = 0;

    resetAndStart();

}

});

