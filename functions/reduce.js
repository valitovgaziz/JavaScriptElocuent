function reduce() {

}

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9,10]
]
let result = []
let someNewArr = arr.reduce((resArr, arr) => resArr.concat(arr))
console.log(`
    Input arr = ${JSON.stringify(arr)}
    Output arr = ${JSON.stringify(someNewArr)}
    `)