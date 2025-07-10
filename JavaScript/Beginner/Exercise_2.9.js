const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let letter = message[i];
    const isUpperCase = letter === letter.toUpperCase();

    if (alphabet.includes(letter.toLowerCase())) {
      let encryptedLetter = encryptLetter(letter.toLowerCase(), shiftValue);
      encryptedMessage += isUpperCase
        ? encryptedLetter.toUpperCase()
        : encryptedLetter;
    } else {
      // Keep non-alphabet characters unchanged
      encryptedMessage += letter;
    }

    // Add a random letter after every second letter
    if (i % 2 === 1 && i < message.length - 1) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      encryptedMessage += alphabet[randomIndex];
    }
  }

  return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    let letter = encryptedMessage[i];
    const isUpperCase = letter === letter.toUpperCase();

    // Skips random letters added during encryption
    if (i % 3 == 2 && alphabet.includes(letter.toLowerCase())) {
      continue; // Skip every third letter
    }

    if (alphabet.includes(letter.toLowerCase())) {
      let decryptedLetter = decryptLetter(letter.toLowerCase(), shiftValue);
      decryptedMessage += isUpperCase
        ? decryptedLetter.toUpperCase()
        : decryptedLetter;
    } else {
      // Keep non-alphabet characters unchanged
      decryptedMessage += letter;
    }
  }

  return decryptedMessage;
}

function encryptLetter(letter, shiftValue) {
  return alphabet[(alphabet.indexOf(letter) + shiftValue) % alphabet.length];
}

function decryptLetter(letter, shiftValue) {
  let shiftedIndex = alphabet.indexOf(letter) - shiftValue;
  if (shiftedIndex < 0) {
    shiftedIndex += alphabet.length; // Wrap around if negative
  }
  // Ensure the index is within bounds
  shiftedIndex = shiftedIndex % alphabet.length;
  if (shiftedIndex < 0) {
    shiftedIndex += alphabet.length; // Wrap around if negative
  }
  // Return the decrypted letter
  return alphabet[shiftedIndex];
}

const secretMessage =
  "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
console.log("🚀 ~ secretMessage:", secretMessage);
const decodedMessage = decrypt(secretMessage, 42);
console.log("🚀 ~ decodedMessage:", decodedMessage);
