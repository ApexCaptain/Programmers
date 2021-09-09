class Boxer {
  constructor(index, weight) {
    this.index = index;
    this.weight = weight;
    this.matchCount = 0;
    this.winCount = 0;
    this.loseCount = 0;
    this.winOverWeightCount = 0;
    this.winRate = 0;
  }
  calcMatch(opponent, result) {
    if (result == "N") return;
    this.matchCount++;
    opponent.matchCount++;
    switch (result) {
      case "W":
        this.winCount++;
        opponent.loseCount++;
        if (this.weight < opponent.weight) this.winOverWeightCount++;
        break;
      case "L":
        this.loseCount++;
        opponent.winCount++;
        if (this.weight > opponent.weight) opponent.winOverWeightCount++;
        break;
    }
  }
  caclWinRate() {
    this.winRate = this.matchCount ? this.winCount / this.matchCount : 0;
    return this;
  }
}

const solution = (weights, head2head) =>
  head2head
    .reduce(
      (resultObj, eachHead2Head, boxerNumber) => {
        const eachBoxer = resultObj.boxers[boxerNumber];
        for (
          let opponentNumber = ++resultObj.matchedIndex;
          opponentNumber < resultObj.boxers.length;
          opponentNumber++
        )
          eachBoxer.calcMatch(
            resultObj.boxers[opponentNumber],
            eachHead2Head[opponentNumber]
          );
        return resultObj;
      },
      {
        boxers: weights.map((weight, index) => new Boxer(index, weight)),
        matchedIndex: 0,
      }
    )
    .boxers.map((eachBoxer) => eachBoxer.caclWinRate())
    .sort((frontBoxer, rearBoxer) => {
      const winRateDiff = rearBoxer.winRate - frontBoxer.winRate;
      if (winRateDiff) return winRateDiff;
      const winOverWeightDiff =
        rearBoxer.winOverWeightCount - frontBoxer.winOverWeightCount;
      if (winOverWeightDiff) return winOverWeightDiff;
      return rearBoxer.weight - frontBoxer.weight;
    })
    .map((eachBoxer) => eachBoxer.index + 1);

module.exports = solution;
