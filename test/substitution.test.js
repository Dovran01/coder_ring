const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should encode the input string", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should decode the input string", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and non-alphabetic characters", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "Elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const actual = substitution(
      "ThInKfUl",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "JrUfScPw";
    expect(actual).to.equal(expected);
  });
  it("should return false if the alphabet length is not 26", () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.be.false;
  });
  it("should return false if the alphabet contains duplicate characters", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.be.false;
  });
});