const solution = require('./solution')


const case1Result = solution(
    [
        "SI JAVA JAVASCRIPT SQL PYTHON C#", 
        "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", 
        "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
        "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
        "GAME C++ C# JAVASCRIPT C JAVA"
    ],
    ["PYTHON", "C++", "SQL"],
    [7, 5, 5]
)
console.log("Case 1", case1Result)

const case2Result = solution(
    [
        "SI JAVA JAVASCRIPT SQL PYTHON C#", 
        "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", 
        "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", 
        "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
         "GAME C++ C# JAVASCRIPT C JAVA"
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
)
console.log("Case 2", case2Result)

