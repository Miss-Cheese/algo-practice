// Swap Case
// Have the function SwapCase(str) take the str parameter and swap the case of each character. 
// For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are

function SwapCase(str) { 

    let result = ''
  
      for (let char of str) {
        if (char >= 'a' && char <= 'z') {
          result += char.toUpperCase()
        } else if (char >= 'A' && char <= 'Z') {
          result += char.toLowerCase()
        } else {
          result += char
        }
      }
    return result
  }