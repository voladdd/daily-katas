import assert from "assert/strict";
import solution from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(solution("(())"), 0);
  });
  it("test", () => {
    assert.strictEqual(solution("()()"), 0);
  });
  it("test", () => {
    assert.strictEqual(solution("((("), 3);
  });
  it("test", () => {
    assert.strictEqual(solution("(()((("), 3);
  });
  it("test", () => {
    assert.strictEqual(solution("))((((("), 3);
  });
  it("test", () => {
    assert.strictEqual(solution("()))"), -1);
  });
  it("test", () => {
    assert.strictEqual(solution("()))"), -1);
  });
  it("test", () => {
    assert.strictEqual(solution("))("), -1);
  });
  it("test", () => {
    assert.strictEqual(solution(")))"), -3);
  });
  it("test", () => {
    assert.strictEqual(solution(")))())())"), -3);
  });
});
