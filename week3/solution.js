const areTwoBlocksAdjacent = (front, rear) => {
    return (front[0] + 1 == rear[0] && front[1] == rear[1])
    || (front[0] - 1 == rear[0] && front[1] == rear[1])
    || (front[0] == rear[0] && front[1] + 1 == rear[1])
    || (front[0] == rear[0] && front[1] - 1 == rear[1])
}

const minimize = (block, maxLength) => {
    let minRowValue = maxLength
    let minColumnValue = maxLength
    block.forEach(eachBlockPair => {
        if(minRowValue > eachBlockPair[0]) minRowValue = eachBlockPair[0]
        if(minColumnValue > eachBlockPair[1]) minColumnValue = eachBlockPair[1]
    })
    return block.map(eachBlockPair => [eachBlockPair[0] - minRowValue, eachBlockPair[1] - minColumnValue])
}

const rotate = (block) => {
    let maxRowValue = 0
    let maxColumnValue = 0
    block.forEach(eachBlockPair => {
        if(maxRowValue < eachBlockPair[0]) maxRowValue = eachBlockPair[0]
        if(maxColumnValue < eachBlockPair[1]) maxColumnValue = eachBlockPair[1]
    })
    maxRowValue++
    maxColumnValue++
    let rotatedBlock = new Array()
    for(let count = 0 ; count < maxRowValue ; count++)
        rotatedBlock.push(new Array(maxColumnValue).fill(0))
    block.forEach(eachBlockPair => {
        rotatedBlock[eachBlockPair[0]][eachBlockPair[1]] = 1
    })
    console.log(rotatedBlock)
    rotatedBlock = rotatedBlock.map((row, i) => {
        row.map((val, j) => rotatedBlock[rotatedBlock.length - 1 -j][i])
    })
    console.log(rotatedBlock)
    /*
    const rotate = matrix => {
        return matrix.map((row, i) =>
          row.map((val, j) => matrix[matrix.length - 1 - j][i])
        );
      };
      */
    /*
    var grid = [
  [0,0], [0,1], [0,2], [0,3], [0,4],
  [1,0], [1,1], [1,2], [1,3], [1,4],
  [2,0], [2,1], [2,2], [2,3], [2,4],
  [3,0], [3,1], [3,2], [3,3], [3,4],
  [4,0], [4,1], [4,2], [4,3], [4,4]
]; 

var side = Math.sqrt(grid.length);

var rotate = function(d,i){
   return [Math.abs(i % side - side+1), Math.floor(i/side)]
}
grid = grid.map(rotate);
    */

}

const solution = (game_board, table) => {
    const blockIndexPairs = table
        .map((eachRow, rowIndex) => eachRow.map((eachBlock, columnIndex) => {
                                                if(eachBlock) return [rowIndex, columnIndex]
                                            })
                                            .filter(blockPair => blockPair != undefined)
        )
        .flat()
    let blocks = new Array()
    while(blockIndexPairs.length) {
        const block = [blockIndexPairs.shift()]
        for(const eachBlockPair of block) {
            const bolcksToRemove = []
            blockIndexPairs.forEach(eachIndexPair => {
                if(areTwoBlocksAdjacent(eachBlockPair, eachIndexPair)) {
                    block.push(eachIndexPair)
                    bolcksToRemove.push(eachIndexPair)
                }
            })
            bolcksToRemove.forEach(eachBlock => {
                for(const index in blockIndexPairs) {
                    if(blockIndexPairs[index][0] == eachBlock[0] && blockIndexPairs[index][1] == eachBlock[1]) {
                        blockIndexPairs.splice(index, 1)
                        break
                    }
                }
            })
        }
        blocks.push(block)
    }
    console.log(blocks)
    blocks.forEach(e => {
        // console.log("be", e)

        rotate(minimize(e, table.length), table.length)
    })
    return 'done'
};

/*
[
    [1,1,1],
    [1,0,0],
    [0,0,0]
]
*/
[
  [1, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0],
];

/*
const t = [1,2,3,4,5]
t.splice(3, 1)
console.log(t)
*/

[
    [0,1],
    [1,0]
]



console.log(
  solution(
    [
      [1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 0],
    ],
    [
        [1,0,0,1,1,0],
        [1,0,1,0,1,0],
        [0,1,1,0,1,1],
        [0,0,1,0,0,0],
        [1,1,0,1,1,0],
        [0,1,0,0,0,0]]
  )
);
