function StringPeriods(str) { 

    if (str.length === 1) {
      return "-1"
    }

    let substring = ''

    for (let char of str) {
      substring += char
      let multiplier = Math.floor(str.length / substring.length)
      
      if (substring.repeat(multiplier) === str) {
        return substring
      } else {
        return "-1"
      }
    }

}
