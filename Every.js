function everyMethod(arr, everyFunc) {
    for (let index in arr) {
        if (!everyFunc(arr[index])) {
            return false
        }
    }
    return true
}

let arr = [1, 2, 3, 4, 5]

function everyFunc(number) {
    return number < 4
}

console.log(everyMethod(arr, everyFunc))