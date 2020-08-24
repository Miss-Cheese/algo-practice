// function bubbleSort(arr) {
//     for (let i = arr.length - 1; i < arr.length; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//         console.log(arr)
//     }
// }


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] > arr[k]) {
                let temp = arr[i]
                arr[i] = arr[k]
                arr[k] = temp
            }
        }
    }
    return arr
}
