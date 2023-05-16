// Write your tests here!
// Write your tests here!
const { expect } = require('chai');
const {polybius} = require('../src/polybius');

describe('polybius', () => {
  it('should encode the input string', () => {
    expect(polybius('thinkful')).to.equal('4432423352125413');
  });

  it('should decode the input string', () => {
    expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
  });

  it('should maintain spaces', () => {
    expect(polybius('Hello world')).to.equal('3251131343 2543241341');
  });

  it('should handle I/J characters correctly', () => {
    expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful');
  });

  it('should return false if input string has odd length during decoding', () => {
    expect(polybius('44324233521254134', false)).to.be.false;
  });
});
