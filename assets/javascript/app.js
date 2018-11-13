// Global variables

// The player's total score
var totalScore = 0;

// Make a variable for each question
var answer1 = $("input:checked","#question1");
var answer2 = $("input:checked","#question2");
var answer3 = $("input:checked","#question3");
var answer4 = $("input:checked","#question4");
var answer5 = $("input:checked","#question5");
var answer6 = $("input:checked","#question6");
var answer7 = $("input:checked","#question7");
var answer8 = $("input:checked","#question8");
var answer9 = $("input:checked","#question9");
var answer10 = $("input:checked","#question10");

$(document).ready(function() {
    // When the opening screen is clicked on, it disappears
    $("#openingScreen").on("click", function() {
        $(this).addClass("hide");
        $('body').css("overflow-y","auto");
    });

    $("submitBtn").on("click", function() {
        totalScore = $(answer1).attr("value")
    });
});