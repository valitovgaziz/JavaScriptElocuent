function countBs(str) {
    numbersOfB = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            numbersOfB++
        }
    }
    return numbersOfB
}

function countChar(str, adf) {
    let charMap = new Map()
    for (let i = 0; i < adf.length; i++) {
        charMap.set(adf[i], 0)
        for (let j = 0; j < str.length; j++) {
            if (str[j] === adf[i]) {
                number = charMap.get(adf[i]) + 1
                charMap.set(adf[i], number)
            }
        }
    }
    console.log(charMap)
}

console.log("Function count B")
console.log(countBs("BBB"))
console.log("Function count Chars")
console.log(countChar("ABCCCCc", "ABC"))