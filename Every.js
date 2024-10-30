function everyMethod(arr, everyFunc) {
    for (let index in arr) {
        if (!fff(arr[index])) {
            return false
        }
    }
    return true
}

function everyWithSome(arr, fff) {
    return !arr.some(item => !fff(item))
}

let arr = [1, 2, 3, 4, 5]

function fff(number) {
    return number < 3
}

console.log(everyMethod(arr, fff))

console.log(everyWithSome(arr, fff))