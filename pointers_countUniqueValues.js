function countUniqueValues(array) {

    // solution #1
    // for (let i = 0; i < array.length; i++) {

    //     let first = array[i]
    //     let second = array[i + 1]

    //     if (first === second) {
    //         array.splice(i, 1)
    //         i--
    //     }
    // }
    // return array.length

    // solution #2

    // for (let i = 0; i < array.length; i++) {

    //     let first = array[i]
    //     let second = array[i + 1]

    //     while (first === second) {
    //         array.splice(i, 1)
    //         first = array[i]
    //         second = array[i + 1]
    //     }
    //  }

    //  return array.length


    // solution #3 with using a helper array

    // for (let i = 0; i < array.length; i++) {
    //     let results = []

    //     let first = array[i]
    //     let second = array[i + 1]

    //     if (first !== second) {
    //         results.push(first)
    //     }
    //     return results.length
    // }

    // solution # 4 from Colt
    if (array.length === 0) return 0

    let i = 0

    for (let j = 1; j < array.length; j++) {

        if (array[i] !== array[j]) {
            i++
            array[i] = array[j]
        }

        return i + 1
    }

}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])