
/**
 * @param {number} price 
 * @param {number} money 
 * @param {number} count 
 * 
 * @returns {number}
 */
const solution = (price, money, count) => {
    const result = price * (count * (count + 1))/2 - money
    return result < 0 ? 0 : result
}

module.exports = solution