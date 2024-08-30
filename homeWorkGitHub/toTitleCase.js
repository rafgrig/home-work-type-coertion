function toTitle(string = "") {
    let arrayedString = string.split(" ");
        for (let i = 0; i < arrayedString.length; i++) {
                arrayedString[i] = arrayedString[i][0].toUpperCase() + arrayedString[i].slice(1).toLowerCase();
        }
    return arrayedString.join(" ");
}

console.log(toTitle("OpenAI"))