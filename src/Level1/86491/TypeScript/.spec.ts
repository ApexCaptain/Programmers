import { expect } from "chai";
import { solution } from "./solution";

describe("최소직사각형", () => {
  it("Case 1", () => {
    expect(
      solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
      ])
    ).to.be.eqls(4000);
  });

  it("Case 2", () => {
    expect(
      solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15],
      ])
    ).to.be.eqls(120);
  });

  it("Case 3", () => {
    expect(
      solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11],
      ])
    ).to.be.eqls(133);
  });
});
