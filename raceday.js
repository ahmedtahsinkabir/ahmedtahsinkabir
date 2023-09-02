let raceNumber = Math.floor(Math.random() * 1000); 
   // Taking a random number between 1-1000 in integer.

let early = !true; 
   /* If anyone above 18 register early then the boolean will be true and 
   if anyone above 18 didn't register early then the boolean will be false.*/

let age = 19; 
   // Here the age will be entered.

if (age > 18 && early) {
  raceNumber += 1000
}; 
  /* If the age is above 18 and registered early then 
  this statement will add 1000 to the number.*/

if (age > 18 && early){
  console.log(`Race will begin at 9:30. Your race number is: ${raceNumber}.`);
} else if (!early && age > 18){
  console.log(`Race will begin at 11:00. Your race number is: ${raceNumber}.`);
} else if (age < 18){
  console.log(`Race will begin at 12:30. Your race number is: ${raceNumber}.`);
} else {
  console.log(`Please contact in the office.`);
}
