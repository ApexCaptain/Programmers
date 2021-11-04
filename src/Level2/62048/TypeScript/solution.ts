const getGcd = (w: number, h: number): number =>
  w % h === 0 ? h : getGcd(h, w % h);

export const solution = (w: number, h: number): number => {
  const repetionCount = getGcd(w, h);
  const wholeCounts = w * h;
  let cutCount = 0;
  let prevValue = 0;
  const ratio = h / w;
  for (let eachWidth = 1; eachWidth <= w / repetionCount; eachWidth++) {
    const value = eachWidth * ratio;
    const diff = value - prevValue;
    if (!Number.isInteger(diff)) cutCount++;
    cutCount += Math.floor(diff);
    prevValue = Math.floor(value);
  }
  return wholeCounts - repetionCount * cutCount;
};
