const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // Check if the shift value is valid
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
  
    // If encode is false, reverse the shift value
    if (!encode) {
      shift = -shift;
    }
  
    // Initialize an empty result string
    let result = "";
  
    // Loop through each character of the input string
    for (const char of input) {
      // Check if the character is uppercase or lowercase
      const isUpperCase = char.toUpperCase() === char;
      const lowerChar = char.toLowerCase();
  
      // Check if the character is an alphabet
      if (lowerChar >= "a" && lowerChar <= "z") {
        // Get the ASCII code of the character
        const charCode = lowerChar.charCodeAt(0);
  
        // Apply the shift value and wrap around the alphabet using modulus operator
        const newCharCode =
          (((charCode - "a".charCodeAt(0) + shift) % 26) + 26) % 26 +
          "a".charCodeAt(0);
  
        // Convert the new ASCII code to a character and add it to the result string
        result += String.fromCharCode(newCharCode);
      } else {
        // If the character is not an alphabet, add it to the result string as it is
        result += char;
      }
    }
  
    // Return the result string in lowercase
    return result.toLowerCase();
  }
  

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
