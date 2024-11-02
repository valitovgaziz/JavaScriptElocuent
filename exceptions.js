function promptDirection(question) {
    let result = prompt(question)
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
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