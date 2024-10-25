function countBs(str) {
    numbersOfB = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            numbersOfB++
        }
    }
    return numbersOfB
}

console.log(countBs("BBB"))