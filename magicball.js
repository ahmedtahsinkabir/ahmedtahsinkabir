let userName = 'tasbi';
   // here username will be entered.

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
        /* if there is no username entered then the 2nd console will be output and 
        if there is a username then the 1st console wil be output.*/ 

const userQuestion = 'will this match be over by 10?'; 
     // here the question will be asked.
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 6);
   /* there will be a random number between 0-7 in integer, 
   which will decide what will be the answer of your question, 
   there are 8 answer based on the number you will get your ans.*/

switch (randomNumber) {
case 0:
console.log('Yes.');
break;
case 1:
console.log('No.');
break;
case 2:
console.log('Try again.');
break;
case 3:
console.log('Not known.');
break;
case 4:
console.log('50/50');
break;
case 5:
console.log('Yes');
break;
case 6:
console.log('No');
break;
}
