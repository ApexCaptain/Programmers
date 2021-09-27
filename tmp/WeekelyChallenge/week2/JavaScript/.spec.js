const solution = require('./solution')

const case1Result = solution(
    [
        [100,90,98,88,65],
        [50,45,99,85,77],
        [47,88,95,80,67],
        [61,57,100,80,65],
        [24,90,94,75,65]
    ]
)
console.log("Case 1", case1Result)

const case2Result = solution(
    [
        [50,90],
        [50,87]
    ]
)
console.log("Case 2", case2Result)

const case3Result = solution(
    [
        [70,49,90],
        [68,50,38],
        [73,31,100]
    ]
)
console.log("Case 3", case3Result)