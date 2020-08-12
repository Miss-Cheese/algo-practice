function averagePair(array, targetAverage){
    
    if (array.length < 2) {
        return false
    }

    for (let i = 0; i < array.length; i++) {
       
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) / 2 === targetAverage) {
                return true
            } 
        }
        
    }
    
    return false
    
}