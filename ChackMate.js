let num = 10
let line = ''
for (let i = 1; i < Number(num) + 1; i++) {
    if (i === 1 || i%2 !==0) {
        line = " "
        for (let j = 2; j <= num; j++) {
            if (j%2 === 0) {
                line = line + "#"
            } else {
                line = line + " "
            }
        }
        console.log(line)
    } else {
        line = "#"
        for (let j = 2; j <= num; j++) {
            if (j%2 === 0) {
                line = line + " "
            } else {
                line = line + "#"
            }
        }
        console.log(line)
    }
    line = ""
}