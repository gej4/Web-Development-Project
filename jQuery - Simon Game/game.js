// Global Varible
var level = 0;
var start = false;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];


// Functions

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play()
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 10);
}

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel-1] == gamePattern[currentLevel-1]){
    if (currentLevel == level){
      userClickedPattern = [];
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    return true;
  }
  return false;
}

function gameOver(){
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 20);
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function startOver(){
  level = 0;
  start = false;
  gamePattern = [];
  userClickedPattern = [];
}

// Main

// Start the game
$(document).on("keypress", function(){
  if (start == false){
    start = true;
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

// User click the answer
$(".btn").on("click", function(event) {
  var userChosenColour = event.target.id;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  if (checkAnswer(userClickedPattern.length) == false){
    gameOver();
    startOver();
  }
});
