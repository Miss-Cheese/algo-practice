
function DoesPasswordMeetCriteria(minLength, minOneNumber, minOneOfTheseSpecialChars, password) {
    
    if (password.length < minLength) return false
    else if (minOneNumber) {
        if (!hasNumber(password)) return false
    }
    else if (minOneOfTheseSpecialChars.length > 0) {
        if (!checkForSpecialChar(password, minOneOfTheseSpecialChars)) return false
    }
    return true
}

function hasNumber(string){
    return /\d/.test(string)
}

function checkForSpecialChar(password, specialCharacters) {
    for (let char of password) {
        for (let specialChar of specialCharacters) {
            if (char === specialChar) {
                return true
            }
        }
    }
    return false
}
