function reverseArray(arr) {
    let res = arr.slice().reverse()
    return res
}

function rrrr(arr) {
    let res = []
    lengthArr = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        res[i] = arr[lengthArr - i]
    }
    return res
}


arr = [1,2,3,4,5]
console.log(rrrr(arr))