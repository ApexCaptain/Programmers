import { expect } from "chai";
import { solution } from "./solution";

describe("튜플", () => {
  /*
    it("Case 1", () => {
    expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).to.be.eqls([2, 1, 3, 4]);
  });
  */
  it("Case 2", () => {
    expect(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")).to.be.eqls([2, 1, 3, 4]);
  });
});
