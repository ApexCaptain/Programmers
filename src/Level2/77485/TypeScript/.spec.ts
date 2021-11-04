import { expect } from "chai";
import { solution } from "./solution";

describe("행렬 테두리 회전하기", () => {
  it("Case 1", () => {
    expect(
      solution(6, 6, [
        [2, 2, 5, 4],
        [3, 3, 6, 6],
        [5, 1, 6, 3],
      ])
    ).to.be.eqls([8, 10, 25]);
  });

  it("Case 2", () => {
    expect(
      solution(3, 3, [
        [1, 1, 2, 2],
        [1, 2, 2, 3],
        [2, 1, 3, 2],
        [2, 2, 3, 3],
      ])
    ).to.be.eqls([1, 1, 5, 3]);
  });

  it("Case 3", () => {
    expect(solution(100, 97, [[1, 1, 100, 97]])).to.be.eqls([1]);
  });
});
