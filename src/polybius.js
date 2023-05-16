// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

// A function that takes an input string and an optional encode parameter

function polybius(input, encode = true) {
  if (!input || input.length === 0) {
    return false;
  }

  const grid = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', '(i/j)', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z'],
  ];

  let result = '';

  if (encode) {
    input = input.toLowerCase();
    for (const char of input) {
      if (char === ' ') {
        result += ' ';
        continue;
      }
      let found = false;
      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col].includes(char)) {
            result += `${col + 1}${row + 1}`; // Swap row and col values
            found = true;
            break;
          }
        }
        if (found) break;
      }
    }
  } else {
    if (input.replace(/ /g, '').length % 2 !== 0) return false;
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === ' ') {
        result += ' ';
        i--;
        continue;
      }
      const col = parseInt(input[i]) - 1;
      const row = parseInt(input[i + 1]) - 1;
      result += grid[row][col];
    }
  }

  return result;
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
