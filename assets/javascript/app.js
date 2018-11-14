// Global variables

// The player's total score
var totalScore = 0;

// The value for the countdown timer
var startTime = 60;

// The variable for the countdown interval
var timeInterval;

// Function to stop the clock
function stopClock() {
    clearInterval(timeInterval);
};

$(document).ready(function() {
    // Code to keep the game from breaking on refresh
    $(this).scrollTop(0);

    // When the opening screen is clicked on, it disappears
    $("#openingScreen").on("click", function() {
        $(this).css("display","none");
        $('body').css("overflow-y","auto");
        $("#timeBox").css("display","block");

        // Defined functions for timer
        function quizTimer() {
            $("#quizTime").html(startTime);
            timeInterval = setInterval(decrement, 1000);
        };

        function decrement() {
            startTime--;
            $("#quizTime").html(startTime);
            
            // The function that runs, when the time runs out
            if (startTime === 0) {
                // Stop the clock and hide the timer
                stopClock();
                $("#timeBox").css("display","none");
                alert("You've run out of time! Let's tally your score.");

                // Define variables for all the selected answers. If there's no answer, it defaults to '0'.
                var answer1 = parseInt($("#question1").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer2 = parseInt($("#question2").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer3 = parseInt($("#question3").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer4 = parseInt($("#question4").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer5 = parseInt($("#question5").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer6 = parseInt($("#question6").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer7 = parseInt($("#question7").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer8 = parseInt($("#question8").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer9 = parseInt($("#question9").find("input:radio[name='answer']:checked").attr("value")) || 0;
                var answer10 = parseInt($("#question10").find("input:radio[name='answer']:checked").attr("value")) || 0;
    
                // Total all the answer values
                totalScore = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9 + answer10;
            
                // The final score page is shown
                $("#quizArea").css("display","none");
                $("#scorePage").css("display","block");
                $("#answerCredit").html(totalScore + " out of 10 correct!");
            };
        };

        // When screen clears, the clock starts to run
        quizTimer();
    });

    // When the submit button is clicked on, we begin to tally the scores
    $("#submitBtn").on("click", function() {
        // Stop the clock and hide the timer
        stopClock();
        $("#timeBox").css("display","none");

        // Define variables for all the selected answers. If there's no answer, it defaults to '0'.
        var answer1 = parseInt($("#question1").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer2 = parseInt($("#question2").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer3 = parseInt($("#question3").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer4 = parseInt($("#question4").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer5 = parseInt($("#question5").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer6 = parseInt($("#question6").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer7 = parseInt($("#question7").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer8 = parseInt($("#question8").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer9 = parseInt($("#question9").find("input:radio[name='answer']:checked").attr("value")) || 0;
        var answer10 = parseInt($("#question10").find("input:radio[name='answer']:checked").attr("value")) || 0;

        // Total all the answer values
        totalScore = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9 + answer10;
        
        // The final score page is shown
        $("#quizArea").css("display","none");
        $("#scorePage").css("display","block");
        $("#answerCredit").html(totalScore + " out of 10 correct!");
    });
});