import { expect } from "chai";
import { solution } from "./solution";

describe("로또의 최고 순위와 최저 순위", () => {
  it("Case 1", () => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).to.be.eqls([
      3, 5,
    ]);
  });
  it("Case 2", () => {
    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).to.be.eqls([
      1, 6,
    ]);
  });
  it("Case 3", () => {
    expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).to.be.eqls([
      1, 1,
    ]);
  });
});
