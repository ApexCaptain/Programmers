export const solution = (n: number): number => {
  n--;
  let answer = 2;
  while (true) {
    if (n % answer == 0) break;
    answer++;
  }
  return answer;
};
