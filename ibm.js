function meanderingArray(unsorted) {
    let sortedArr = unsorted.sort((a, b) => a - b)
    let resultArr = []

    while (sortedArr.length > 0) {
        resultArr.push(sortedArr.pop())
        resultArr.push(sortedArr.shift())
    }

    return resultArr
}

function maximumContainers(scenarios) {
    // Data:
    // [ '10 2 5', '12 4 4', '6 2 2' ]
    // starting budget - 10
    // cost - 2
    // No of containers to return for a full refund - 5
   
    // Process:
    // do a for of loop to work on one test case at a time
    // startingBudget / cost = will be a number of containers initially received
    // number of containers initially received / No of containers to return for refund = additional containters
    // number of containers initially received + additional containters = total number of containers received (don't forget to do Math.floor)
    
    for (let testCase of scenarios) {

        let currentCase = testCase.split(' ')
        let startingBudget = parseInt(currentCase[0])
        let cost = parseInt(currentCase[1])
        let contForRefund = parseInt(currentCase[2])

        let receivedContainers = Math.floor(startingBudget / cost)
        let currentContainers = Math.floor(receivedContainers / contForRefund)
        let totalContainers = receivedContainers + currentContainers

        console.log(totalContainers)
        
    }
    
}