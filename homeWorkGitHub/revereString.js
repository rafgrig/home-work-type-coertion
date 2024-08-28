function reverseString(string = ''){
    let reversedString = string.split('').reverse().join("")
    return console.log(reversedString)
}

reverseString("JavaScript")