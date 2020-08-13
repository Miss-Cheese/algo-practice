function DashInsert(str) { 
    // Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
    // For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

    let result = ''

    for (let i = 0; i < str.length; i++) {
      let currentNumber = str[i]
      let nextNumber = str[i + 1]
      if ((parseInt(currentNumber) % 2 === 1) && parseInt(nextNumber) % 2 === 1) {
        result += currentNumber + "-"
      } else {
        result += currentNumber
      }
    }
    return result
}