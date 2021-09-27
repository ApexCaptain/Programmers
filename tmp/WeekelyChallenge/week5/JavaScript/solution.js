
const getDigitNumbers = (length = 5) => {
    const digitNumbers = new Array()
    for(let index = 0 ; index < length ; index++) 
        digitNumbers.push(index ? digitNumbers[index - 1] * 5 + 1 : 1)
    return digitNumbers.reverse()
}

const solution = (word) => word
                    .split("")
                    .map(eachCharacter => {
                        switch(eachCharacter) {
                            case 'A' : return 1
                            case 'E' : return 2
                            case 'I' : return 3
                            case 'O' : return 4
                            case 'U' : return 5
                        }
                    })
                    .reduce(function(sum, currentNumber, index) {
                        return sum + (currentNumber - 1) * this[index] + 1
                    }.bind(getDigitNumbers()),0)

module.exports = solution