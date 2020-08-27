function putStudentsInClasses (array) {

    let classObj = {}

    for (let studentClass of array) {
        let subject = studentClass[1]
        let student = studentClass[0]

        if (!classObj[subject]) {
            classObj[subject] = []
        } 

        classObj[subject].push(student)
    }

    return classObj
}


putStudentsInClasses([[58, "algebra"],[58, "athletics"],[63, "art"],[88, "algebra"],[72, "english"],[77, "calculus"],[69, "art"]])