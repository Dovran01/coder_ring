const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    const uniqueChars = new Set(alphabet);

    if (uniqueChars.size !== 26) {
      return false;
    }

    for (const char of input) {
      // Check if the character is uppercase or lowercase
      const isUpper = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();
      if (lowerChar === ' ') {
        result += char;
        continue;
      }

      const index = encode ? standardAlphabet.indexOf(lowerChar) : alphabet.indexOf(lowerChar);
      if (index !== -1) {
       
        let substitutedChar = encode ? alphabet[index] : standardAlphabet[index];
        
        substitutedChar = encode && isUpper ? substitutedChar.toUpperCase() : substitutedChar;
        result += substitutedChar;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
