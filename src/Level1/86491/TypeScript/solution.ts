export const solution = (sizes: Array<Array<number>>): number =>
  Object.values(
    sizes.reduce(
      (minCard, eachSize) => {
        const isWidthSmaller = minCard.width < eachSize[0];
        const isHeightSmaller = minCard.height < eachSize[1];
        if (isWidthSmaller && isHeightSmaller) {
          minCard.width = eachSize[0];
          minCard.height = eachSize[1];
        } else if (!isWidthSmaller && !isHeightSmaller) return minCard;
        const normalEnlargedCard = [
          minCard.width > eachSize[0] ? minCard.width : eachSize[0],
          minCard.height > eachSize[1] ? minCard.height : eachSize[1],
        ];

        const rotatedEnlargedCard = [
          minCard.width > eachSize[1] ? minCard.width : eachSize[1],
          minCard.height > eachSize[0] ? minCard.height : eachSize[0],
        ];
        if (
          normalEnlargedCard[0] * normalEnlargedCard[1] >
          rotatedEnlargedCard[0] * rotatedEnlargedCard[1]
        ) {
          minCard.width = rotatedEnlargedCard[0];
          minCard.height = rotatedEnlargedCard[1];
        } else {
          minCard.width = normalEnlargedCard[0];
          minCard.height = normalEnlargedCard[1];
        }
        return minCard;
      },
      {
        width: 0,
        height: 0,
      }
    )
  ).reduce((acc, eachLength) => acc * eachLength, 1);
