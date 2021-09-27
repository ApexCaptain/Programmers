import { expect } from "chai";
import { solution } from "./solution";

describe("베스트앨범", () => {
  it("Case 1", () => {
    expect(
      solution(
        ["classic", "pop", "classic", "classic", "pop"],
        [500, 600, 150, 800, 2500]
      )
    ).to.be.eqls([4, 1, 3, 0]);
  });
});
