
const friend = "BRUTUS";
const shiftValue = 3;

// Step 1
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Step 2
const firstLetter = friend[0].toLowerCase();
const firstLetterIndex = alphabet.indexOf(firstLetter);

/*
Question 1.
The index of b is 1 because strings along with arrays are 0-based, so their indexes start with 0. Since a is the first letter, its index is 0, therefore the index of b is 1.
*/

// Step 3
const shiftedIndex = firstLetterIndex + shiftValue;
let encodedFirstLetter = alphabet[shiftedIndex];

/*
Question 2.
The mod operator % helps us wrap around the alphabet
*/

// Step 4
const alphabetlength = alphabet.length;

// Step 5
const newShiftedIndex = shiftedIndex % alphabetlength;
encodedFirstLetter = alphabet[newShiftedIndex];

// Step 6
const encryptedMessage = "EUXWXV";
let teaser = encryptedMessage.slice(0, 3);




