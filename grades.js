// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.
/**********     A score of 50-60 is an F
				A score of 61-70 is a D
				A score of 71-80 is a C
				A score of 81-90 is a B
				A score of 91-100 is an A ***********************/
/***************      Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?    ***************/


var A = 91;
var B = 81;
var C = 71;
var D = 61;
var F = 50;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i = 0; i < scores.length; i++) {
    scores[i]

    if (scores[i] >= A) {
        console.log("grade A: ", scores[i]);
    } else if (scores[i] >= B) {
        console.log("grade B: ", scores[i]);
    } else if (scores[i] >= C) {
        console.log("grade C: ", scores[i]);
    } else if (scores[i] >= D) {
        console.log("grade D: ", scores[i]);
    } else if (scores[i] >= F) {
        console.log("grade F: ", scores[i]);
    };
};
