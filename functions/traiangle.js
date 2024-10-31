let line
for (let i = 1; i < 9; i++) {
    line = ''
    for (let j = 0; j < i; j++) {
        line = line + "#"
    }
    console.log(line)
}