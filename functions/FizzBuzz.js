for (let i = 1; i < 101; i++) {
    if (i%3 === 0) {
        console.log("Fizz")
        continue
    } else if (i%5 === 0) {
        console.log("Buz")
        continue
    }
    console.log(i)
}