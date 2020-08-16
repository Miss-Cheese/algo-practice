function iterativeFactorial(num) {

    // with a while loop
    // let total = num
    // while (num > 1) {
    //     total = total * (num - 1)
    //     num--
    // }
    // return total

    // with a for loop
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total
}

function recursiveFactorial(num) {
    if (num === 1) return 1
    return num * recursiveFactorial(num - 1)
}