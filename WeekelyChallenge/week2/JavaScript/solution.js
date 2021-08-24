/**
 * @param {Array<Array<number>>} scores 
 * 
 * @returns {string}
 */
const solution = (scores) => {
    const students = new Array(scores.length)
    scores.forEach((values, grader) => {
        values.forEach((score, student) => {
            if(!students[student]) students[student] = new Array()
            students[student].push(score)
        })
    })
    return students.map((scores, index) => {
        let maxValue = -1
        let isMaxDuplicated = false

        let minValue = 101
        let isMinDuplicated = false

        let sum = 0
        let count = scores.length

        scores.forEach(eachScore => {
            sum += eachScore

            if(eachScore == minValue) isMinDuplicated = true
            else if(eachScore < minValue) {
                isMinDuplicated = false
                minValue = eachScore
            }
            if(eachScore == maxValue) isMaxDuplicated = true
            else if(eachScore > maxValue) {
                isMaxDuplicated = false
                maxValue = eachScore
            }
        })
        if(!isMaxDuplicated && scores[index] == maxValue) {
            sum -= maxValue
            count--
        }
        if(!isMinDuplicated && scores[index] == minValue) {
            sum -= minValue
            count--
        }
        let average = sum / count
        if(average >= 90) return 'A'
        else if(average >= 80) return 'B'
        else if(average >= 70) return 'C'
        else if(average >= 50) return 'D'
        else return 'F'
    }).join("")
}

module.exports = solution