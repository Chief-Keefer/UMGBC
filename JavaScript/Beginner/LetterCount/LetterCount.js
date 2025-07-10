function letterCount(word) {
    if (typeof word !== 'string') {
        console.error('Error: Input must be a string');
        return;
    }

    if (word.length === 0) {
        console.error('Error: Input cannot be an empty string');
        return;
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of word) {
        if (!alphabet.includes(char.toLowerCase())) {
            console.error('Error: Input must contain only letters');
            return;
        }
    }

    const letterCount = {};
    for (let char of word) {
        const lowerCaseChar = char.toLowerCase();
        if (letterCount[lowerCaseChar]) {
            letterCount[lowerCaseChar]++;
        } else {
            letterCount[lowerCaseChar] = 1;
        }
    }
    
    return letterCount;
}