/*
Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible 
to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters. 
For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. 
For this example your program should return the two characters that were removed with no delimiter and in the order 
they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, 
then return the string not possible. If the input string is already a palindrome, your program should return the string palindrome.

The input will only contain lowercase alphabetic characters. 
Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters. 
The 2 characters you remove do not have to be adjacent in the string.
*/

function PalindromeCreator(str) { 
    
    const strArr = str.split('')

    if (isPalindrome(strArr)) {
      return "palindrome"
    }

    for (let i = 0; i < strArr.length; i++) {
      let tempArr = str.split('')
      tempArr.splice(i, 1)

      if (isPalindrome(tempArr)) {
        return strArr[i]
      } 
    } 

    for (let i = 0; i < strArr.length; i++) {

      for (let k = 0; k < strArr.length; k++) {
        if (i !== k) {
          let tempArr = str.split('')
          tempArr.splice(Math.max(i, k), 1)
          tempArr.splice(Math.min(i, k), 1)
          if (isPalindrome(tempArr)) {
            return strArr[i] + strArr[k]
          }

        }
      }
    }
  return "not possible"

}
   



function isPalindrome(array) {
  if (array.length >= 3) {
      const reversed = [...array].reverse()
      return array.join('') === reversed.join('')
  } else {
    return false
  }
  
}