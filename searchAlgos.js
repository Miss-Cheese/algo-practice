// Linear search

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}


function binarySearch(arr, val) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)


    while (start <= end) {
        
        if (arr[middle] === val) {
            return middle
        } else if (arr[middle] < val) {
            start = middle + 1
        } else {
            end = middle - 1
        }
        middle = Math.floor((start + end) / 2)
    }

    return -1

}