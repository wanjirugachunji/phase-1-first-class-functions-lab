function returnFirstTwoDrivers(drivers) {
    drivers = drivers.slice(0,2)
    return drivers
}


function returnLastTwoDrivers(drivers){
    drivers = drivers.slice(-2)
    return drivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num){
    return totalFare => totalFare * num
}

function fareDoubler(createFareMultiplier){
        return createFareMultiplier * 2 
}

function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, callBack){
    return callBack(drivers)
}
