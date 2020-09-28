/* Find the sum of all the multiples of 3 or 5 below 1000.

For example, if we sum all multiples of 3 or 5 below 10, we would get 3, 5, 6, and 9 and the sum of these multiples is 23. */


var sum = 0;
var number = 1000;

for(let i = 0; i < number; i++){
  if(i % 3 === 0 || i % 5 ===  0) 
    sum += i;
}

console.log("Sum of all multiples of 3 and 5 below " + number + " is: " + sum ); // sum = 233168
