let some = 3
var some2 = 3
console.log(some)
console.log(some2)

fff()

function fff() {
    let some = 4
    var some2 = 4

    console.log(some)
    console.log(some2)
}

some2 = 5
console.log(some)
console.log(some2)
console.log(Math.min(some, some2))