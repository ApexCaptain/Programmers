

class LanguageScore {
    /**
     * @param {string} name 
     * @param {number} score 
     */
    constructor(name, score) {
        this.name = name
        this.score = score
    }
}
class JobGroup {
    /**
     * 
     * @param {string} name 
     * @param {Array<LanguageScore>} languageScores 
     */
    constructor(name, languageScores) {
        this.name = name
        this.languageScores = languageScores
    }
    
    getSum() {
        return this.languageScores
            .reduce(
                (sumValue, eachLanguageScore) => sumValue + eachLanguageScore.score, 0
            )
    }
}

/**
 * @param {Array<string>} table 
 * @param {Array<string>} languages 
 * @param {Array<number>} prefernce 
 */
const solution = (table, languages, prefernce) => table
        .map(eachTableString => eachTableString.split(" "))
        .map(eachTableContent => new JobGroup(eachTableContent[0], eachTableContent
                                                    .slice(1)
                                                    .map((languageName, index) => new LanguageScore(languageName, eachTableContent.length - index - 1))
                                                    .filter(eachLanguageScore => languages.includes(eachLanguageScore.name)))
        )
        .map(eachJobGroup => {
            for(let eachPrefIndex in languages) {
                const foundLanguageScore = eachJobGroup.languageScores.find(eachLanguageScore => eachLanguageScore.name == languages[eachPrefIndex])
                if(foundLanguageScore) foundLanguageScore.score *= prefernce[eachPrefIndex]
            }
            return eachJobGroup
        })
        .sort((frontGroup, rearGroup) => {
            const sumDiff = rearGroup.getSum() - frontGroup.getSum()
            return sumDiff == 0 ? 
                frontGroup.name  < rearGroup.name ? -1
                : 1
                : sumDiff
        })[0].name
    
module.exports = solution
