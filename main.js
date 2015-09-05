// Click to start game
//Build Timer
//Assign variable to timer to store the changing state of game
//Constantly reassigning variable
//Change the way the variable is calculated based on what stage of difficulty the game is at
//This top part is the functioning timer
var clock = 31;
var interval = 1000;
setInterval(function() {
 clock -= interval / 1000;
 $('#clock').text(clock);
}, interval);
var timeRemaining= clock>0;
//The code that is commented out is an idea of how the question and answer could run 
//inside the body of a while loop that ends when timeRemaining is equal to false
//It's not fully functional and will change a lot once other code is integrated
/*while (timeRemaining){
var number_1 = prompt('A number');
while (timeRemaining && number_1 !== 50) {
  number_1 = prompt('A number');
}
if (timeRemaining === true) {
  alert('You win!');
} else {
  alert('too slow!');
}
}
*/
Add Comment