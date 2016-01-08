
var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var res5 = document.getElementById('resultFive');


var user = prompt('Hello there! What is your name?');
console.log('The user\'s name is ' + user);
var counter = 0;

alert('Hi ' + user + "! Let\'s play a guessing game. I\'m going to ask you questions about me.");



var aboutIris = [
  ['Alrighty ' + user + '. Answer the proceeding yes or no questions with Y or N. Is my hair naturally blue?',
  'N',
  'NO',
  'By golly ' + user + ', you are right!',
  'Y',
  'YES',
  'Blue isn\'t my natural hair color, ' + user + '. Don\'t be silly! My natural hair color is black.',
  'Wrong! That answer is out of scope.',
  res1
  ]
  ,
  [
  'Next question! Is baseball my favorite sport?',
  'Y',
  'YES',
  'Way to be wrong ' + user + '! My favorite sport is rugby.',
  'N',
  'NO',
  'Great job, ' + user + '! My favorite sport is rugby',
  'Wrong! That answer is out of scope.',
  res2
  ]
  ,
  [
  'Last yes or no question for ya ' + user + '! Do I like candy?',
  'Y' ,
  'YES',
  'You\'re right ' + user + '. I love candy! Great job.',
  'N',
  'NO',
  'Wrong answer ' + user + '. Of course I love candy! Who doesn\'t?',
  'Wrong! That answer is out of scope.',
  res3
  ]
]


function questions() {
var answer1 = prompt(aboutIris[i][0]);

if(answer1.toUpperCase() === aboutIris[i][1]|| answer1.toUpperCase() === aboutIris[i][2] ) {
  aboutIris[i][8].textContent = aboutIris[i][3];
  //alert('By golly ' + user + ', you are right!');
  counter += 1;
} else if (answer1.toUpperCase() === aboutIris[i][4] || answer1.toUpperCase() === aboutIris[i][5]){
  aboutIris[i][8].textContent = aboutIris[i][6];
  //alert('Blue isn\'t my natural hair color, ' + user + '. Don\'t be silly! My natural hair color is black.');
} else {
  aboutIris[i][8].textContent = aboutIris[i][7];
  //alert('Wrong! That answer is out of scope.');
}
}
for (var i = 0; i < (aboutIris.length); i++) {

  questions();
}

// function questionFour() {
// var answer4 = prompt('One last question for ya ' + user + '! Guess what number I\'m thinking about! It\'s a number between 1 and 25. What number am I thinking of?');
// console.log('The user answered Question 4: ' + answer4);
//
// answer4 = parseInt(answer4);
// if (answer4 == 16) {
//   res4.textContent = 'Correct! Great guess ' + user + '!';
//   //alert('Correct! Great guess ' + user + '!');
//   counter += 1;
// } else if (answer4 > 16) {
//   res4.textContent = 'Nope. Too high! The answer is 16.';
//   //alert('Nope. Too high! The answer is 16.');
// } else if(answer4 < 16) {
//   res4.textContent = 'Nope. Too low! The answer is 16.';
//   //alert('Nope. Too low! The answer is 16.');
// }
// else{}
//   alert('Alrighty ' + user + ', your final score is ' + counter + '. Hit OK for the bonus round!');
// }
//
//
// function questionFive() {
// var responseTo5 = false;
// while(responseTo5 === false) {
//   var answer5 = prompt('Bonus round! Guess what number I\'m thinking about this time! It\'s still a number between 1 and 25. what number am I thinking of? I will ask till you get it right!');
//   answer5 = parseInt(answer5);
//   if(answer5 == 8) {
//     res5.textContent = 'You got it ' + user + '! Thanks for playing!';
//     //alert('You got it ' + user + '! Thanks for playing!');
//     var responseTo5 = true;
//   } else if(answer5 > 8) {
//     res5.textContent = 'Too high! Try again.';
//     //alert('Too high! Try again.');
//   } else if(answer5 < 8){
//     res5.textContent = 'Too low! Try again.';
//     //alert('Too low! Try again.');
//   } else {}
// }
// console.log('The user answered Question 5: ' + answer5);
//
// }
//
// questionOne();
// questionTwo();
// questionThree();
// questionFour();
// questionFive();
