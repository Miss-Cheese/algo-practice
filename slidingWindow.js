function maxSubarraySum(array, num) {
    // necessary variables - tempSum & maxSum
    // loop through the first num of the array to get the maxSum which will also be tempSum for the time being
    // tempSum = maxSum
    // loop from the i = num of the array and keep substracting the num before the block and add the num at the end of the block
    // maxSum will be the biggest one of maxSum and tempSum
    // return maxSum

    if (array.length < num) return null

    let tempSum = 0
    let maxSum = 0

    for (let i = 0; i < num; i++) {
        maxSum += array[i]
    }

    tempSum = maxSum

    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}


function minSubArrayLen(array, num) {
 
    let minLength = array.length + 1

    for (let i = 0; i < array.length; i++) {
        let currentValue = 0

        for (let j = i; j < array.length; j++) {
            currentValue += array[j] 
            if (currentValue >= num) {
                let tempMin = j - i + 1
                minLength = Math.min(minLength, tempMin)
            }
        }

    }



    return minLength > array.length ? 0 : minLength
}



function findLongestSubstring(string){
 
    let longestSubString = 0

    for (let i = 0; i < string.length; i++) {
      let tempLength = uniqueSubStringLength(string, i)
      longestSubString = Math.max(longestSubString, tempLength)
    }
    

    return longestSubString
}


 function uniqueSubStringLength(string, startingPosition) {

    let tempObj = {}

    for (let i = startingPosition; i < string.length; i++) {
        
        let currentChar = string[i]

        if (!tempObj[currentChar]) {
            tempObj[currentChar] = 1
            
        } else {
            return Object.keys(tempObj).length
        }
    }
    return Object.keys(tempObj).length

 }


 function findLongestSubstring(string){
 
    let longestSubString = 0

    for (let i = 0; i < string.length; i++) {

        let tempObj = {}

        for (let k = i; k < string.length; k++) {

            let currentChar = string[k]

            if (!tempObj[currentChar]) {
                tempObj[currentChar] = 1
            } else {
                break;
            }
        }

        let tempLongest = Object.keys(tempObj).length
        longestSubString = Math.max(longestSubString, tempLongest)
    }
    

    return longestSubString
}

 findLongestSubstring("thisisawesome")