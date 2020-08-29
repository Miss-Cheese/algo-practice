// UNFINISHED

array = [1,5,2,3,3,4,1,1]
n = 4

function checkSubset(arr, n) {

    let sum = 0

    for (let element of arr) {
        sum += element
    }

    let targetSubarraySum = sum / n

    if (sum % n !== 0) {
        return false
    } 
    
    for (i = 0; i < n; i++) {
        results.push([])
    }

    let sortedArr = arr.sort()

    let left = 0
    let right = sortedArr.length - 1

    results = [[], [], [], []]

    while (left < right) {

    }

    
}