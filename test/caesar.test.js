// Write your tests here!
const { expect } = require('chai');
const { caesar } = require("../src/caesar");


describe('caesar', () => {
  it('should encode the input string with positive shift value', () => {
    expect(caesar('thinkful', 3)).to.equal('wklqnixo');
  });

  it('should decode the input string with negative shift value', () => {
    expect(caesar('thinkful', -3)).to.equal('qefkhcri');
  });

  it('should decode the input string when encode parameter is false', () => {
    expect(caesar('wklqnixo', 3, false)).to.equal('thinkful');
  });

  it('should maintain spaces and non-alphabetic characters', () => {
    expect(caesar('This is a secret message!', 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });

  it('should ignore capital letters', () => {
    expect(caesar('BPQA qa I amkzmb umaaiom!', 8, false)).to.equal('this is a secret message!');
  });

  it('should return false if shift value is invalid', () => {
    expect(caesar('thinkful')).to.be.false;
    expect(caesar('thinkful', 99)).to.be.false;
    expect(caesar('thinkful', -26)).to.be.false;
  });
});
