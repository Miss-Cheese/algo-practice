process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    const xmlArray = input.split('\n')
    const propertiesLength = parseInt(xmlArray[0])
    let properties = []

    // get properties into an array
    for (let i = 1; i <= propertiesLength; i++) {
        if (xmlArray[i][0] !== "#") {
            properties.push(xmlArray[i])
        }
    }

    // create propertyHashMap
    let propertyHashMap = {}
    for (let property of properties) {
        let index = property.indexOf('=')
        propertyHashMap[property.slice(0, index)] = property.slice(index + 1)
    }

    // make an array of xml 
    let xmlProper = []
    let xmlOutput = []

    for (let i = propertiesLength + 1; i < xmlArray.length; i++) {
        xmlProper.push(xmlArray[i])
    }

    for (let element of xmlProper) {
        let startIndex = element.indexOf("${")
        while (startIndex > -1) {
            let firstPart = element.slice(0, startIndex)
            let closingBracket = element.indexOf("}", startIndex)
            let secondPart = element.slice(closingBracket + 1)
            let key = element.slice(startIndex + 2, closingBracket)
            let value = propertyHashMap[key]

            if (!value) {
                value = ""
            }
            element = firstPart + value + secondPart
            startIndex = element.indexOf("${")
        }
        xmlOutput.push(element)
    }

    console.log(xmlOutput.join('\n')) 
    
});

