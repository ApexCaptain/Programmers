export const solution = (originalTupleString: string) =>
  originalTupleString
    .replace(/}/gi, "")
    .split("{")
    .filter((splitedTuplesString) => splitedTuplesString != "")
    .sort((a: string, b: string) => a.length - b.length)
    .map((eachTupleString) =>
      eachTupleString
        .split(",")
        .filter((e) => e != "")
        .map((eachNumber) => parseInt(eachNumber))
    )
    .reduce((acc, eachNumArr) => {
      for (const eachNumber of eachNumArr)
        if (!acc.includes(eachNumber)) {
          acc.push(eachNumber);
          break;
        }
      return acc;
    }, new Array<number>());
