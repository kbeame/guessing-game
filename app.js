
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
]


function questions() {
var answer1 = prompt(aboutIris[0][0]);

if(answer1.toUpperCase() === aboutIris[0][1]|| answer1.toUpperCase() === aboutIris[0][2] ) {
  aboutIris[0][8].textContent = aboutIris[0][3];
  //alert('By golly ' + user + ', you are right!');
  counter += 1;
} else if (answer1.toUpperCase() === aboutIris[0][4] || answer1.toUpperCase() === aboutIris[0][5]){
  aboutIris[0][8].textContent = aboutIris[0][6];
  //alert('Blue isn\'t my natural hair color, ' + user + '. Don\'t be silly! My natural hair color is black.');
} else {
  aboutIris[0][8].textContent = aboutIris[0][7];
  //alert('Wrong! That answer is out of scope.');
}
}
for (var i = 0; i < (aboutIris.length); i++) {

  questions();
}

// function questionTwo() {
// var answer2 = prompt('Next question! Is baseball my favorite sport?');
// console.log('The user answered Question 2: ' + answer2);
//
// if(answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
//   res2.textContent = 'Way to be wrong ' + user + '! My favorite sport is rugby.';
//   //alert('Way to be wrong ' + user + '! My favorite sport is rugby.');
// } else if(answer2.toUpperCase() === 'N' || answer2.toUpperCase() === 'NO'){
//   res2.textContent = 'Great job, ' + user + '! My favorite sport is rugby';
//   //alert('Great job, ' + user + '! My favorite sport is rugby.');
//   counter += 1;
// } else {
//   res2.textContent = 'Wrong! That answer is out of scope.';
//   //alert('Wrong! That answer is out of scope.');
// }
// }
//
// function questionThree() {
// var answer3 = prompt('Last yes or no question for ya ' + user + '! Do I like candy?');
// console.log('The user answered Question 3: ' + answer3);
//
// if(answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES' ) {
//   res3.textContent = 'You\'re right ' + user + '. I love candy! Great job.';
//   //alert('You\'re right ' + user + '. I love candy! Great job.');
//   counter += 1;
// } else if(answer3.toUpperCase() === 'N' || answer3.toUpperCase() === 'NO') {
//   res3.textContent = 'Wrong answer ' + user + '. Of course I love candy! Who doesn\'t?';
//   //alert('Wrong answer ' + user + '. Of course I love candy! Who doesn\'t?');
// } else {
//   res3.textContent = 'Wrong! That answer is out of scope.';
//   //alert('Wrong! That answer is out of scope.');
// }
// }
//
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
