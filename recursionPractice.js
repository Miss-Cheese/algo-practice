function power(base, exp){
    if (exp === 0) return 1
    return base * power(base, exp - 1)
}


function factorial(num){
    if (num === 0) return 1
    return num * factorial(num - 1)
}


function productOfArray(arr) {
    if (arr.length === 1) return arr[0]
    return arr[0] * productOfArray(arr.slice(1))
}


function recursiveRange(num){
   if (num === 1) return 1
   return num + recursiveRange(num - 1)
}


function fib(num){
    if (num === 1 || num === 2) return 1
    return fib(num - 1) + fib(num - 2)
}


function reverse(str) {

    if (str.length === 1) return str

    // return str[str.length - 1] + reverse(str.slice(0, str.length - 1))

    // cleaner way
    return reverse(str.slice(1)) + str[0]
}

function isPalindrome(str){
    // if the first and the last character are the same - keep invoking the function 
    // until there are less than 2 characters left in the string

    if (str.length < 2) return true
    else if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    } else {
        return false
    }
}


function someRecursive(arr, callback){
  
    if (arr.length === 0) {
        return false
    }

    if (callback(arr[0])) {
        return true
    } else {
        return someRecursive(arr.slice(1), callback)
    }
}


function flatten(arr){
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr
}


function capitalizeFirst (arr) {
    
    if (arr.length === 0) {
        return arr
    }

    for (let str of arr) {
        let capitalizedString = str[0].toUpperCase() + str.slice(1).toLowerCase()
        let result = [capitalizedString]
        return result.concat(capitalizeFirst(arr.slice(1)))
    }
  }


  function nestedEvenSum (obj, sum = 0) {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                sum += nestedEvenSum(obj[key])
            } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
                sum += obj[key]
            }
        }
        return sum
  }


function capitalizeWords (arr) {
    if (arr.length === 1) {
        return arr[0].toUpperCase()
    }

    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

function stringifyNumbers (obj) {

    let newObj = {}
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString()
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }

    return newObj
}


function collectStrings(obj) {

    let results = []

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            results.push(obj[key])
        } else if (typeof obj[key] === 'object') {
            results = results.concat(collectStrings(obj[key]))
        }
    }

    return results
    
}