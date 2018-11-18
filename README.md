# JavaScript Assignment #2: Trivia Game

For this assignment, we were tasked with developing a trivia game built on JavaScript and jQuery. It was required to have a timer function, and use HTML elements like radio buttons in order to record user input.

For my version of the assignment, I used `setInterval` as a way of setting up the timer with a standard one-second countdown interval. I also made it so that, when the timer runs out, the user's score is calculated -- regardless if they're not finished. Rather than using an array to store the correct answers, I assigned my correct answers a point value via HTML attributes. The JavaScript concludes the game by tallying up all the points, which only the correct responses were worth any at all.