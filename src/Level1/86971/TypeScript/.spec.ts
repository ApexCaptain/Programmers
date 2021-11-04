import { expect } from "chai";
import { solution } from "./solution";

describe("전력망을 둘로 나누기", () => {
  it("Case 1", () => {
    expect(
      solution(9, [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [7, 8],
        [7, 9],
      ])
    ).to.be.eqls(3);
  });

  it("Case 2", () => {
    expect(
      solution(4, [
        [1, 2],
        [2, 3],
        [3, 4],
      ])
    ).to.be.eqls(0);
  });

  it("Case 3", () => {
    expect(
      solution(7, [
        [1, 2],
        [2, 7],
        [3, 7],
        [3, 4],
        [4, 5],
        [6, 7],
      ])
    ).to.be.eqls(1);
  });

  it("Case 4", () => {
    expect(solution(2, [[1, 2]])).to.be.eqls(0);
  });

  it("Case 5", () => {
    expect(
      solution(5, [
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 5],
      ])
    ).to.be.eqls(1);
  });
});
