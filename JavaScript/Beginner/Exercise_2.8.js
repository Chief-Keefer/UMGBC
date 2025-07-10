const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1
function encryptLetter(letter, shiftValue) {
  return alphabet[
    (alphabet.indexOf(letter.toLowerCase()) + shiftValue) % alphabet.length
  ].toUpperCase();
}

// Step 2
function encryptWord(word, shiftValue) {
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    encryptedMessage += encryptLetter(word[i], shiftValue);
  }
  return encryptedMessage;
}

// Step 3
function decryptLetter(letter, shiftValue) {
  return alphabet[
    (alphabet.indexOf(letter.toLowerCase()) - shiftValue + alphabet.length) %
      alphabet.length
  ].toUpperCase();
}

// Step 4
function decryptWord(word, shiftValue) {
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++) {
    decryptedMessage += decryptLetter(word[i], shiftValue);
  }
  return decryptedMessage;
}

/* Question.
    Ceasar will get "BRUTUS" back using the decryptWord function because it's purpose is to reverse the effects of
    the encryptWord function, getting the original message that was used to be encrypted.
*/
