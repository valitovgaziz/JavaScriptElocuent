function reverseArray(arr) {
    let res = arr.slice().reverse()
    return res
}

arr = [1,2,3,4,5]
reversed = reverseArray(arr)

console.log(reversed)
console.log(reversed == arr)
console.log(reversed === arr)