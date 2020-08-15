
$("h1").addClass("big-title margin-50");

// $("h1").removeClass("margin-50")

// $("h1").hasClass("big-title")  // return true

// $("button").text("Change all the text");

$("button").html("<em> Change using html tag </em>");

// $("img").attr("src")  // get attribute value

$("a").attr("href", "https://www.yahoo.com")  // change attribute


// $("button").click(function(){     // add listener event
//   $("h1").css("color", "purple");
// });


$(document).keypress(function(event){  // change text in h1 when key press down
  $("h1").text(event.key);
});


$("h1").on("mouseover", function(){  // another way using on for event listener
  $("h1").css("color", "red");
})

// .before()
// .after()
// .prepend()
// .append()


//  Animation function

// .hide()  disappear
// .show()  appear
// .toggle()  1:disappear  2:appear
// .fadeOut()  .fadeIn()  .fadeToggle()
// .slideUp()  .slideDown()  .slideToggle()

$("button").click(function(){     // add listener event
  // animate function can only add things that have numerical value
  // can add multiple animate together
  $("h1").slideUp().slideDown().animate({opacity: 0.5});   
});
