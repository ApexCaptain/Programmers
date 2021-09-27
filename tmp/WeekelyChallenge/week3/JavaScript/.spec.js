const solution = require('./solution')

const case1Result = solution(
    [
        [1,1,0,0,1,0],
        [0,0,1,0,1,0],
        [0,1,1,0,0,1],
        [1,1,0,1,1,1],
        [1,0,0,0,1,0],
        [0,1,1,1,0,0]
    ],
    [
        [1,0,0,1,1,0],
        [1,0,1,0,1,0],
        [0,1,1,0,1,1],
        [0,0,1,0,0,0],
        [1,1,0,1,1,0],
        [0,1,0,0,0,0]
    ]
)
console.log("Case 1", case1Result)

const case2Result = solution(
    [
        [0,0,0],
        [1,1,0],
        [1,1,1]
    ],
	[
        [1,1,1],
        [1,0,0],
        [0,0,0]
    ]
)
console.log("Case 2", case2Result)