function decrypt(word) {
    
    if (word.length === 0) {
      return ""
    }
    
    let asciiVals = []
    
    for (let i = 0; i < word.length; i++) {
      let asciiVal = word.charCodeAt(i)
      asciiVals.push(asciiVal)
    }
    
    let firstLetterAscii = asciiVals[0] - 1
    let firstLetter = String.fromCharCode(firstLetterAscii)
    let decodedMessage = firstLetter
    
    for (let i = 1; i < asciiVals.length; i++) {
      let temp = asciiVals[i] - asciiVals[i - 1]
      
      while (temp < 97) {
        temp = temp + 26
      }
      let letter = String.fromCharCode(temp) 
      decodedMessage += letter
      
    }
    
    return decodedMessage
    
}
  