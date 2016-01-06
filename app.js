var user = prompt('Hello there! What is your name?');
console.log('The user\'s name is ' + user);
var counter = 0;

alert('Hi ' + user + "! Let\'s play a guessing game. I\'m going to ask you questions about me.");

var answer1 = prompt('Alrighty ' + user + '. Answer the proceeding yes or no questions with Y or N. Is my hair naturally blue?');
console.log('The user answered Question 1: ' + answer1);

if(answer1.toUpperCase() === 'N'|| answer1.toUpperCase() === 'NO' ) {
  alert('By golly ' + user + ', you are right!');
  counter += 1;
} else if (answer1.toUpperCase() === 'Y' || answer1.toUpperCase() === 'YES'){
  alert('Blue isn\'t my natural hair color, ' + user + '. Don\'t be silly! My natural hair color is black.');
} else {
  alert('Wrong! That answer is out of scope.');
}

var answer2 = prompt('Next question! Is baseball my favorite sport?');
console.log('The user answered Question 2: ' + answer2);

if(answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
  alert('Way to be wrong ' + user + '! My favorite sport is rugby.');
} else if(answer2.toUpperCase() === 'N' || answer2.toUpperCase() === 'NO'){
  alert('Great job, ' + user + '! My favorite sport is rugby.');
  counter += 1;
} else {
  alert('Wrong! That answer is out of scope.');
}

var answer3 = prompt('Last yes or no question for ya ' + user + '! Does I like candy?');
console.log('The user answered Question 3: ' + answer3);

if(answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES' ) {
  alert('You\'re right ' + user + '. I love candy! Great job.');
  counter += 1;
} else if(answer3.toUpperCase() === 'N' || answer3.toUpperCase() === 'NO') {
  alert('Wrong answer ' + user + '. Of course I love candy! Who doesn\'t?');
} else {
  alert('Wrong! That answer is out of scope.');
}

var answer4 = prompt('One last question for ya ' + user + '! Guess what number I\'m thinking about! It\'s a number between 1 and 25. What number am I thinking of?');
console.log('The user answered Question 4: ' + answer4);

answer4 = parseInt(answer4);
if (answer4 == 16) {
  alert('Correct! Great guess ' + user + '!');
  counter += 1;
} else if (answer4 > 16) {
  alert('Nope. Too high! The answer is 16.');
} else if(answer4 < 16) {
  alert('Nope. Too low! The answer is 16.');
}
else{}

alert('Alrighty ' + user + ', your final score is ' + counter + '. Hit OK for the bonus round!');

var responseTo5 = false;
while(responseTo5 === false) {
  var answer5 = prompt('Bonus round! Guess what number I\'m thinking about this time! It\'s still a number between 1 and 25. what number am I thinking of? I will ask till you get it right!');
  answer5 = parseInt(answer5);
  if(answer5 == 8) {
    alert('You got it ' + user + '! Thanks for playing!');
    var responseTo5 = true;
  } else if(answer5 > 8) {
    alert('Too high! Try again.');
  } else if(answer5 < 8){
    alert('Too low! Try again.');
  } else {}
}
console.log('The user answered Question 5: ' + answer5);
