function areThereDuplicates(arguments) { // use arguments when don't know how many arguments you're getting
    let obj = {}
    
    for (let i = 0; i < arguments.length; i++) {
        let element = arguments[i]
        
        if (obj[element]) {
            return true
        }
        obj[element] = 1
    }
    return false

}