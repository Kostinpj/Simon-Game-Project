var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];   
var userClickedPattern = [];
var level = 0;
var started = false;



$(document).keypress(function() {
    if (!started) {
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function(){
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
    
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
    }
    }
    else{
        console.log("wrong");
        var audio1 = new Audio("sounds/wrong.mp3");
    audio1.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
$("h1").text("Game Over :( Press any key to restart");
startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    }


function nextSequence(){
    userClickedPattern = [];
    level++
    $("h1").text("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress (currentColor){   
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
    $("#" + currentColor).removeClass("pressed")}
    ,100);
}   

