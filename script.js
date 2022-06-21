'use strict';

// INTRODUCTION OF DOM //

/*
-> DOM (DOCUMENT OBJECT MODEL) :  Structured representation of HTML documents. and allows JS to access HTML Elements and Styles To manipulate them.

-> In simple language DOM is a connection point b/w HTMl documents and JS code. therefore, DOM can change the text,HTML attributes and even css styles from JS

-> special object i.e; the entry point to the DOM. Example  :  document.querySelector()     ---> special object

-> Myth :- DOM methods and properties for DOM manipulation is a part of JS but its not true because JS is just a dialet of the ECMAScript specification and all this DOM related stuff are not in there.

-> If DOM and DOM methods are not a part of JS then, how they actually works? ans :  DOM And DOM methods and Properties are actually part of Web   API's.

-> Web API's (Application Programming Interface) are like libraries that browsers implement and that we can access from our JS code. Web API's are libraries that are also written in JS and are automatically available for us to use.
*/

/*    

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

//  defining  secret no.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// we use let because after using let we don't have to reassign the values we can directly use them.

//  creating a variable to decrease score by 1 when its a wrong match

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value); // we use Number here because before that it is a string data type
  console.log(guessNumber);
  // Outer loop part condition-1
  /*  When there is no input */
  if (!guessNumber) {
    // document.querySelector('.message').textContent = 'No Number!';
    //  refactoring by creating fn.s the above line code
    displayMessage('No Number!');
  } else if (guessNumber === secretNumber) {
    /* When player wins*/
    displayMessage('Congratulations!...Correct Match');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    // manipulating the css from JS --> for writing CSS you have to pass each and every things in a string by using  ' ' and use properties name are in camel case

    document.querySelector('body').style.backgroundColor = '#52860c';

    document.querySelector('.number').style.color = '#3d6509';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').style.fontSize = '3rem';

    // document.querySelector('.number').textContent = 'winner';

    displayNumber('Winner');

    // Highscore logic - to keep high score from disapearring

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //  Refactoring the code - to remove duplicate code (here we are merging condition-2 and 3)
  //  we can also refactor function also
  else if (guessNumber !== secretNumber) {
    if (score > 1) {
      const refactoringCondition = guessNumber > secretNumber;
      /* document.querySelector('.message').textContent = refactoringCondition
         ? 'Too High'
         : 'Too Low';
      */

      // refactoring by using created fn. in ternary operator
      displayMessage(refactoringCondition ? 'Too High' : 'Too Low');

      // CSS - for changing background color and text color while using ternary operator

      document.querySelector('body').style.backgroundColor =
        refactoringCondition ? '#74c0fc' : '#0c8599';

      document.querySelector('.number').style.color = refactoringCondition
        ? '#74c0fc'
        : '#0c8599';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;

      // manipulating the css from JS --> for writing CSS you have to pass each and every things in a string by using  ' ' and use properties name are in camel case

      document.querySelector('body').style.backgroundColor = '#9d2222';
      document.querySelector('.number').style.color = '#701919';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').style.fontSize = '3rem';

      // document.querySelector('.number').textContent = 'Looser';

      displayNumber('Looser');
    }
  }

  // Outer loop part condition-2

  // outer loop
  /* When Guess is too close */
  /*else if (guessNumber > secretNumber) {
    // inner loop part condition-1
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';

      score--;
      document.querySelector('.score').textContent = score;
      // manipulating the css from JS --> for writing CSS you have to pass each and every things in a string by using  ' ' and use properties name are in camel case

      document.querySelector('body').style.backgroundColor = '#74c0fc';
    }
    // inner loop part condition-2
    else {
      document.querySelector('.message').textContent = 'You Lost the Game!';

      document.querySelector('.message').textContent = 0;

      // manipulating the css from JS --> for writing CSS you have to pass each and every things in a string by using  ' ' and use properties name are in camel case

      document.querySelector('body').style.backgroundColor = '#9d2222';
      document.querySelector('.number').style.color = '#701919';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').style.fontSize = '3rem';

      document.querySelector('.number').textContent = 'Looser';
    }
  }
  // Outer loop part condition-3
  //When Guess is too far 
  else if (guessNumber < secretNumber) {
    // inner loop part condition-1

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';

      score--;
      document.querySelector('.score').textContent = score;
      // manipulating the css from JS --> for writing CSS you have to pass each and every things in a string by using  ' ' and use properties name are in camel case

      document.querySelector('body').style.backgroundColor = '#0c8599';
    }
    // inner loop part condition-2
    else {
      document.querySelector('.message').textContent = 'You Lost the Game!';

      document.querySelector('.score').textContent = 0;

      // manipulating the css from JS --> for writing CSS you have to pass each and every things in a string by using  ' ' and use properties name are in camel case

      document.querySelector('body').style.backgroundColor = '#9d2222';
      document.querySelector('.number').style.color = '#701919';

      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.number').style.fontSize = '3rem';

      document.querySelector('.number').textContent = 'Looser';
    }
  }*/
});

//  coding challenge //

// working on again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000033';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.color = '#000033';
});
