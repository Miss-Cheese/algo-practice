function simpleXMLProcessor(input) {

    const xmlArray = input.split('\n')
    const propertiesLength = parseInt(xmlArray[0])
    let properties = []

    // get properties into an array
    for (let i = 1; i <= propertiesLength; i++) {
        if (xmlArray[i][0] !== "#") {
            properties.push(xmlArray[i])
        }
    }


    let propertyHashMap = {}
    for (let property of properties) {
        let index = property.indexOf('=')
        propertyHashMap[property.slice(0, index)] = property.slice(index + 1)
    }

  

    let xmlProper = []

    for (let i = propertiesLength + 1; i < xmlArray.length; i++) {
        xmlProper.push(xmlArray[i])
    }

    // let propertyIndex
    // let propertyStartIndex 
    // let propertyEndIndex 

    for (let i = 0; i < xmlProper.length; i++) {
        let subTag = xmlProper[i] 
        for (let j = 0; j < subTag.length; j++) {
            if (subTag[j] === "$" && subTag[j + 1] === "{") {
                let propertyIndex = i
                let propertyStartIndex = j
            }
            else if (subTag[j] === "}") {
                let propertyEndIndex = j
            }
        }
    }

    let copyOfXMLProper = [...xmlProper]

    let targetProperty = copyOfXMLProper[propertyIndex]

    let resultStart = targetProperty.substring(0, propertyStartIndex)
    let resultEnd = targetProperty.substring(propertyEndIndex + 1)
    
    let propertyToAdd = resultStart + propertyValue + resultEnd

    xmlProper.splice(propertyIndex, 1, propertyToAdd)

    // for (let element of xmlProper) {
    //     element.replace(/['"]+/g, '')
    // }

    return xmlProper.join('\n')
}
