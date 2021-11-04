import { expect } from "chai";
import { solution } from "./solution";

describe("멀쩡한 사각형", () => {
  it("Case 1", () => {
    expect(solution(8, 12)).to.be.eqls(80);
  });
  it("Case 2", () => {
    expect(solution(5, 20)).to.be.eqls(80);
  });
  it("Case 3", () => {
    expect(solution(7, 8)).to.be.eqls(42);
  });
});
