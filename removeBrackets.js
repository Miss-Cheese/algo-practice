// Remove Brackets
// Have the function RemoveBrackets(str) take the str string parameter being passed, 
// which will contain only the characters "(" and ")", and determine the minimum number of brackets 
// that need to be removed to create a string of correctly matched brackets. 
// For example: if str is "(()))" then your program should return the number 1. 
// The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.

function RemoveBrackets(str) { 

    let openingBrackets = []
    let closingBrackers = []

    for (let bracket of str.split('')) {
      if (bracket === '(') {
        openingBrackets.push(bracket)
      } else {
        if (openingBrackets.length >= 1) {
          openingBrackets.pop()
        } else {
          closingBrackers.push(bracket)
        }
      }
    }

    if (openingBrackets.length === 0 & closingBrackers.length === 0) {
      return 0
    } else {
      return openingBrackets.length + closingBrackers.length
    }

}