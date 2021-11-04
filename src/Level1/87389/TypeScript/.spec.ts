import { expect } from "chai";
import { solution } from "./solution";

describe("로또의 최고 순위와 최저 순위", () => {
  it("Case 1", () => {
    expect(solution(10)).to.be.eqls(3);
  });
  it("Case 2", () => {
    expect(solution(12)).to.be.eqls(11);
  });
});
