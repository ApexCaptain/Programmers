import { expect } from "chai";
import { solution } from "./solution";

describe("위장", () => {
  it("Case 1", () => {
    expect(
      solution([
        ["yellowhat", "headgear"],
        ["bluesunglasses", "eyewear"],
        ["green_turban", "headgear"],
      ])
    ).to.be.equals(5);
  });
  it("Case 2", () => {
    expect(
      solution([
        ["crowmask", "face"],
        ["bluesunglasses", "face"],
        ["smoky_makeup", "face"],
      ])
    ).to.be.equals(3);
  });
});
