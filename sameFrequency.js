function sameFrequency(num1, num2){
  
    let numObj1 = createObjectMap(num1)
    let numObj2 = createObjectMap(num2)
  
    console.log(numObj1, numObj2)
    
    if (Object.keys(numObj1).length !== Object.keys(numObj2).length) {
        return false
    }
    
    for (let key in numObj1) {
        
        if (!key in numObj2) {
            return false 
        }
        
        if (numObj1[key] !== numObj2[key]) {
            return false 
        } 
    }
    return true
  }
  
  function createObjectMap(number) {
      let numberArray = number.toString().split('') // no need to strip the string of special characters - input guaranteed to be numbers only
      let numberObject = {}
      
      for (let number of numberArray) {
          numberObject[number] ? numberObject[number]++ : numberObject[number] = 1
      }
      
      return numberObject
  }
  
  sameFrequency(182, 281)