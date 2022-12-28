//go to console for code
//sqrt, abs(-5), sin(2), pow(2, 4), floor(down int), ceil(up int), round(3.4), max, min, random



//guessing game
//guess a number from 1 to 5
//generate a random number between 1 to 5
//if the guess number matches random number, then it displays on console win or los
//run the game for 5 times
//show the number of wons and losts

var numOfWon = 0;
var numOfLost = 0;

for (var i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt('Enter a number between 1 to 5'));
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber == randomNumber) {
        console.log('You have won');
        numOfWon++;
    } else {
        console.log('You have lost. your random number was ' + randomNumber);
        numOfLost++;
    }
}

document.write('You have won ' + numOfWon + ' times <br>');
document.write('You have lost ' + numOfLost + ' times');
