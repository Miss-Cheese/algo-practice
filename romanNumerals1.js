function BasicRomanNumerals(str) { 

    let total = 0
    let numberArr = []


    for (let numeral of str) {
      if (numeral === "I") {
        numberArr.push(1)
      } else if (numeral === "V") {
        numberArr.push(5)
      } else if (numeral === "X") {
        numberArr.push(10)
      } else if (numeral === "L") {
        numberArr.push(50)
      } else if (numeral === "C") {
        numberArr.push(100)
      } else if (numeral === "D") {
        numberArr.push(500)
      } else if (numeral === "M") {
        numberArr.push(1000)
      }
    }

    console.log(numberArr)

    while (numberArr.length > 0) {
      let firstNumber = numberArr.splice(0, 1)

      if (numberArr.length === 0 || firstNumber >= numberArr[0]) {
        total += parseInt(firstNumber)
      } else {
        total = total - parseInt(firstNumber)
      }
    }

    return parseInt(total)

}