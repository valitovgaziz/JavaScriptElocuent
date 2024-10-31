function range(start, end) {
    let sum = 0
    for (let i = start; start <= end; start++) {
        sum += start
    }
    return sum
}

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(numbers) {
    res = 0
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i]
    }
    return res
}

console.log(range(1, 10))
console.log(sum(nums))