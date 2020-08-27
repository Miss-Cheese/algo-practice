let string = "hellosunshine"

function countLetters(str) {
    let countObj = {}

    for (let i = 0; i < str.length; i++) {
        let letter = str[i]

        if (!countObj[letter]) {
            countObj[letter] = 1
        } else {
            countObj[letter]++
        }
    }

    return countObj
    
}