function Iterator(number, conditionFunc, stepFunc, doFunc) {
    while(conditionFunc(number)) {
        doFunc(number)
        number = stepFunc(number)
    }
}

function conditionFunc(number) {
    if (number > 0) {
        return true
    }
    return false
}

function stepFunc(number) {
    return number - 1
}

function doFunc(number) {
    console.log(number)
}

Iterator(5, conditionFunc, stepFunc, doFunc)