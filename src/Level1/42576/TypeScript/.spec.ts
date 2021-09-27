import { expect } from "chai";
import { solution } from "./solution";

describe("완주하지 못한 선수", () => {
  it("Case 1", () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).to.be.equals(
      "leo"
    );
  });
  it("Case 2 ", () => {
    expect(
      solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
      )
    ).to.be.equals("vinko");
  });
  it("Case 3", () => {
    expect(
      solution(
        ["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"]
      ),
      "mislav"
    );
  });
});
