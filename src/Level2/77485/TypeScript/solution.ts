export const solution = (
  rows: number,
  columns: number,
  queries: Array<Array<number>>
): Array<number> => {
  let lastMatrixNum = 1;
  const matrix = [...Array(rows).keys()].map(() => {
    const eachRow = new Array<number>();
    for (let count = 0; count < columns; count++) {
      eachRow.push(lastMatrixNum++);
    }
    return eachRow;
  });
  const minNumbers = new Array<number>();

  queries.forEach((eachQuery) => {
    const [row1, col1, row2, col2] = eachQuery.map((e) => e - 1);
    const tmp = matrix[row1][col1];
    const changedNumbers = new Array<number>();
    for (let leftSideRowNum = row1; leftSideRowNum < row2; leftSideRowNum++) {
      const changedValue = matrix[leftSideRowNum + 1][col1];
      matrix[leftSideRowNum][col1] = changedValue;
      changedNumbers.push(changedValue);
    }
    for (
      let bottomSideColNum = col1;
      bottomSideColNum < col2;
      bottomSideColNum++
    ) {
      const changedValue = matrix[row2][bottomSideColNum + 1];
      matrix[row2][bottomSideColNum] = changedValue;
      changedNumbers.push(changedValue);
    }
    for (
      let rightSideRowNum = row2;
      rightSideRowNum > row1;
      rightSideRowNum--
    ) {
      const changedValue = matrix[rightSideRowNum - 1][col2];
      matrix[rightSideRowNum][col2] = changedValue;
      changedNumbers.push(changedValue);
    }
    for (let topSideColNum = col2; topSideColNum > col1; topSideColNum--) {
      const changedValue =
        topSideColNum == col1 + 1 ? tmp : matrix[row1][topSideColNum - 1];
      matrix[row1][topSideColNum] = changedValue;
      changedNumbers.push(changedValue);
    }
    minNumbers.push(Math.min(...changedNumbers));
  });
  return minNumbers;
};
