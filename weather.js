const kelvin = 287;
     // forecast today is 287 kelvin. 287 is kelvin temperature.

const celsius = kelvin - 273;
     // minusing 273 from kelvin temperature to convert it into celsius.

let fahrenheit = celsius * (9 / 5) + 32;
   // turning celsius into fahrenheit.

fahrenheit = Math.floor(fahrenheit);
   /*when we convert celsius to fahrenheit it comes in a decimal number for that 
   we are turning it into an integer.*/
   
let newton = celsius * (33/100);
   /* converting celsius into newton degree by 
   multiplying (33/100) with celsius.*/
newton = Math.floor(newton);
   // turning newton degree into a integer number.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton`);

console.log(`The temperature is ${celsius} degrees Celsius`);
