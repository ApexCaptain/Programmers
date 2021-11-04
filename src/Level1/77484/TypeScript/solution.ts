export const solution = (
  lottos: Array<number>,
  win_nums: Array<number>
): Array<number> => {
  const matchedCount = lottos.filter((eachLottoNum) =>
    win_nums.includes(eachLottoNum)
  ).length;
  const unknownCount = lottos.filter(
    (eachLottoNum) => eachLottoNum == 0
  ).length;
  return [matchedCount + unknownCount, matchedCount]
    .map((eachMatch) => 7 - eachMatch)
    .map((eachGrade) => (eachGrade > 6 ? 6 : eachGrade));
};
