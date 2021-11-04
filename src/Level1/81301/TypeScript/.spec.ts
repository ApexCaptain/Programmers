import { expect } from "chai";
import { solution } from "./solution";

describe("로또의 최고 순위와 최저 순위", () => {
  it("Case 1", () => {
    expect(solution("one4seveneight")).to.be.eqls(1478);
  });
  it("Case 2", () => {
    expect(solution("23four5six7")).to.be.eqls(234567);
  });
  it("Case 3", () => {
    expect(solution("2three45sixseven")).to.be.eqls(234567);
  });
  it("Case 4", () => {
    expect(solution("123")).to.be.eqls(123);
  });
  it("Case 5", () => {
    expect(solution("oneoneoneone")).to.be.eqls(1111);
  });
});
