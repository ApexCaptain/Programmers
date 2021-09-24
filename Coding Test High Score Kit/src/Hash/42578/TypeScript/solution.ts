export const solution = (clothes: Array<[string, string]>): number =>
  Array.from(
    clothes
      .reduce(
        (
          clothesKindMap: Map<string, number>,
          eachClothPair: [string, string]
        ) =>
          clothesKindMap.set(
            eachClothPair[1],
            (clothesKindMap.get(eachClothPair[1]) || 1) + 1
          ),
        new Map<string, number>()
      )
      .values()
  ).reduce((acc, eachNum) => acc * eachNum, 1) - 1;
