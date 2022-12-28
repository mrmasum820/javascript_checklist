//one dimensional array
var names = ['ashraful', 'sakib', 'mushfiq', 'mahmudullah', 'mashrafi'];

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

//task
//create a function called highestScore that will receive a 1d array called scores and return the highest score
function highestScore(scores) {
    var max = scores[0];
    for (var i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;
}
var scores = [20, 50, 71, 101, 34, 90, 7, 53];
var maxScore = highestScore(scores);
// console.log(maxScore);


//two dimensional array
var playersInfo = [
    ['ashraful', 95],
    ['sakib', 19],
    ['mushfiq', 31],
    ['mahmudullah', 145],
    ['mashrafe', 13]
]

// console.log(playersInfo);
// console.log(playersInfo[0][0]);
// console.log(playersInfo[0][1]);

//task
//create a function called highestScorer that will receive a 2d array called playersInfo and based on highest score return the name of the player

function highestScorer(playersInfo) {
    var highestRunScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for (var x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]) {
            highestRunScorer = playersInfo[x][0];
            highestScore = playersInfo[x][0];
        }
    }
    return highestRunScorer;
}

var run = highestScorer(playersInfo);
console.log(run);