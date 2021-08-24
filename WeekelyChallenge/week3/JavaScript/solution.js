/**
 * @param {Array<Array<number>>} table 
 * @param {number} bitToSlice 
 * 
 * @returns {Array<Array<number>>}
 */
const sliceBlock = (table, bitToSlice) => {
    const blockAddrs = table
        .map((eachRow, rowIndex) => eachRow.map((eachBlock, columnIndex) => {
            if(eachBlock == bitToSlice) return [rowIndex, columnIndex]
        })
        .filter(blockAddrPair => blockAddrPair != undefined))
        .flat()
    let blockAddrSet = new Array()
    while(blockAddrs.length) {
        const block = [blockAddrs.shift()]
        for(const eachBlockPair of block) {
            const bolcksToRemove = []
            blockAddrs.forEach(eachIndexPair => {
                if(areTwoBlocksAdjacent(eachBlockPair, eachIndexPair)) {
                    block.push(eachIndexPair)
                    bolcksToRemove.push(eachIndexPair)
                }
            })
            bolcksToRemove.forEach(eachBlock => {
                for(const index in blockAddrs) {
                    if(blockAddrs[index][0] == eachBlock[0] && blockAddrs[index][1] == eachBlock[1]) {
                        blockAddrs.splice(index, 1)
                        break
                    }
                }
            })
        }
        blockAddrSet.push(block)
    }
    return blockAddrSet
}

/**
 * @param {Array<Array<number>>} frontBlockPair 
 * @param {Array<Array<number>>} rearBlockPair 
 * 
 * @returns {boolean}
 */
const areTwoBlocksAdjacent = (frontBlockPair, rearBlockPair) => {
    return (frontBlockPair[0] + 1 == rearBlockPair[0] && frontBlockPair[1] == rearBlockPair[1])
    || (frontBlockPair[0] - 1 == rearBlockPair[0] && frontBlockPair[1] == rearBlockPair[1])
    || (frontBlockPair[0] == rearBlockPair[0] && frontBlockPair[1] + 1 == rearBlockPair[1])
    || (frontBlockPair[0] == rearBlockPair[0] && frontBlockPair[1] - 1 == rearBlockPair[1])
}

/**
 * @param {Array<Array<number>>} blockAddrSet 
 * @param {number} tableLength 
 * 
 * @returns {Array<Array<number>>}
 */
const minimize = (blockAddrSet, tableLength) => {
    let minRowValue = tableLength
    let minColumnValue = tableLength
    blockAddrSet.forEach(eachBlockPair => {
        if(minRowValue > eachBlockPair[0]) minRowValue = eachBlockPair[0]
        if(minColumnValue > eachBlockPair[1]) minColumnValue = eachBlockPair[1]
    })
    return blockAddrSet.map(eachBlockPair => [eachBlockPair[0] - minRowValue, eachBlockPair[1] - minColumnValue])
}

/**
 * @param {Array<Array<number>>} blockAddrSet 
 * @param {number} tableLength
 * 
 * @returns {Array<Array<number>>}
 */
const rotate = (blockAddrSet, tableLength) => {
    return blockAddrSet
        .sort((frontAddrPairs, rearAddrPairs) => frontAddrPairs.length - rearAddrPairs.length)
        .map(blockAddrPairs => {
            const rotatedBlockAddrPairSet = [blockAddrPairs]
            while(rotatedBlockAddrPairSet.length < 4) {
                rotatedBlockAddrPairSet.push(rotatedBlockAddrPairSet[rotatedBlockAddrPairSet.length -1]
                                            .map(eachBlockPair => {
                                                return [eachBlockPair[1], tableLength - eachBlockPair[0]]
                                            }))
            }
            return rotatedBlockAddrPairSet
                                        .map(eachBlockAddrPairs => eachBlockAddrPairs.sort((frontBlockPair, rearBlockPair) => 
                                            (frontBlockPair[0] * 10 + frontBlockPair[1]) - (rearBlockPair[0] * 10 + rearBlockPair[1])
                                        ))
        })
}

/**
 * @param {Array<Array<number>>} gameBoard 
 * @param {Array<Array<number>>} tableSet 
 * 
 * @returns {boolean}
 */
const doesSetContainsBoard = (gameBoard, tableSet) => {
    return tableSet.map(eachTable => eachTable.map(eachBlock => `${eachBlock[0]}${eachBlock[1]}`).join(""))
    .includes(gameBoard.map(eachBlock => `${eachBlock[0]}${eachBlock[1]}`).join(""))
}

/**
 * @param {Array<Array<number>>} game_board 
 * @param {Array<Array<number>>} table 
 * 
 * @returns {number}
 */
const solution = (game_board, table) => {
    const slicedGameBoard = sliceBlock(game_board, 0)
                                .sort((frontAddrPairs, rearAddrPairs) => frontAddrPairs.length - rearAddrPairs.length)
                                .map(eachBlockAddrPairs => eachBlockAddrPairs.sort((frontBlockPair, rearBlockPair) => 
                                            (frontBlockPair[0] * 10 + frontBlockPair[1]) - (rearBlockPair[0] * 10 + rearBlockPair[1])
                                ))
                                .map(eachSlicedBlock => minimize(eachSlicedBlock, table.length))
                                
    const slicedTableSet =  rotate(sliceBlock(table, 1), table.length)
                                .map(eachSlicedTable => eachSlicedTable
                                                            .map(eachSlicedBlock => minimize(eachSlicedBlock, table.length)))

    let answer = 0
    for(const eachSlicedGameBoard of slicedGameBoard) {
        let doestMatch = false
        let indexToRemove = -1
        const eachGameBoardBlockLength = eachSlicedGameBoard.length
        for(const eachSlicedTableSetIndex in slicedTableSet) {
            const eachSlicedTableSet = slicedTableSet[eachSlicedTableSetIndex]
            const eachSlicedTableSetLength = eachSlicedTableSet[0].length
            if(eachGameBoardBlockLength != eachSlicedTableSetLength) continue
            if(eachGameBoardBlockLength > eachSlicedTableSetLength) break
            doestMatch = doesSetContainsBoard(eachSlicedGameBoard, eachSlicedTableSet)
            if(doestMatch) {
                answer += eachGameBoardBlockLength
                indexToRemove = eachSlicedTableSetIndex
                break
            }
            
        }
        if(doestMatch) slicedTableSet.splice(indexToRemove, 1)
    }
    return answer
};

module.exports = solution