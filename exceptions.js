const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptDirection(question) {
    var result = "";
    rl.question(question, (answer) => {
        result = answer;
        rl.close();
    })
    if (result !== undefined & result.toLowerCase() == "left") return "L";
    if (result !== undefined & result.toLowerCase() == "right") return "R";
    throw new Error("Неверное направление: " + result);
}

function look() {
    if (promptDirection("Куда двигаться?") == "L") {
        return "дом";
    } else {
        return "два злых медведя";
    }
}

try {
    console.log("Перед вами", look());
} catch (error) {
    console.log("Что то пошло не так: " + error);
}