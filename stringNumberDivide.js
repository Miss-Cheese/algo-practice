function stringNumberDivide(str) {
    let sum = 0
    let string = ''
    
        for (let char of str) {
          if (char >= '0' && char <= '9') {
            sum += parseInt(char)
          } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            string += char
          }
        }
    let finalNumber = sum / string.length

    return Math.round(finalNumber)
}