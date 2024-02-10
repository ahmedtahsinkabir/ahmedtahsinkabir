const age = 18;
     // here age will be entered.

let earlyYears = 2;
   /* 1st 2 years of human life is 10.5 year in dog's year 
   so the value of this variable represent the 1st 2 years of age.*/
earlyYears *= 10.5;
   // here we are multiplying the 1st 2 years of age.
let laterYears = age - 2;
   // since we multiplyed the 1st 2 years of my age so now we have to minus 2 years from age.

laterYears *= 4;
   /* 1st 2 years of human years is 10.5 dog year and after that every year is 4 dog year
   so we have to multiply the rest of the with 4.*/
   
let myAgeInDogYears = earlyYears + laterYears;
   // this variable will add earlyyears and lateryears so that the answer will be in dog years.

let userName = 'tahsin kabir'.toUpperCase(); // this method will convert every letter into uppercase in name.

console.log(`My name is ${userName}.
I am ${age} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
