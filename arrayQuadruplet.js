function findArrayQuadruplet(arr, s) {

    if (arr.length === 0) {
      return []
    }

    arr.sort((a,b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                for (let l = k + 1; l < arr.length; l++) {
                    if (arr[i] + arr[j] + arr[k] + arr[l] === s) {
                        return [arr[i], arr[j], arr[k], arr[l]]
                    }
                }
            }
        }
    }
    
    return []
}
  
//   findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20)