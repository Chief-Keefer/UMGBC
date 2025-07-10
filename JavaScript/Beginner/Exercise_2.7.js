const friend = "BRUTUS"
const shiftValue = 3;

// Step 1
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Step 2
let encodedMessage = "";
for (let i = 0; i < friend.length; i++) {
    let char = friend[i].toLowerCase();
    let charIndex = alphabet.indexOf(char);
    let shiftedIndex = (charIndex + shiftValue) % alphabet.length;
    encodedMessage += alphabet[shiftedIndex].toUpperCase();
}

/* Question 1.
A loop is more efficient than manually encoding each letter because it automates the process, allowing us to handle any length of the string without repeating code.
It also reduces the chance of human error in encoding each letter individually.
*/

/* Question 2. 
% alphabet.length is used to ensure that the shifted index wraps around the alphabet correctly.
This is necessary because if the shifted index exceeds the length of the alphabet, it would lead to an out-of-bounds error or incorrect indexing.
*/