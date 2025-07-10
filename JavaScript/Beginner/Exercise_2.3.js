// Step 1
const randomDecimal = Math.random();

// Step 2
const range = 33 - 3 + 1;

/* Question 1. 
We add 1 to the range to include 3 and 33 in the possible shift values.
*/

// Step 3
const randomRange = randomDecimal * range;

/* Question 2.
The randomDecimal is multiplied by the range to get a random number from 0 to 31.
*/

// Step 4
const randomInteger = Math.floor(randomRange)

/* Question 3.
Math.floor is used to round down the randomRange to the nearest whole number from 0 to 30, ensuring that we get an integer value.
Using Math.round could potentially give us a number that would exceed the range
*/

// Step 5
const randomShiftValue = randomInteger + 3;

/* Question 4.
We add 3 to the randomInteger to ensure that the shift value is always between 3 and 33, inclusive.
*/