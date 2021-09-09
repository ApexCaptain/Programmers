const solution = require('./solution')


const case1Result = solution(
    [50,82,75,120],
    ["NLWL","WNLL","LWNW","WWLN"]
)
console.log("Case 1", case1Result)

const case2Result = solution(
    [145,92,86],
    ["NLW","WNL","LWN"]
)
console.log("Case 2", case2Result)

const case3Result = solution(
    [60,70,60],
    ["NNN","NNN","NNN"]
)
console.log("Case 3", case3Result)

