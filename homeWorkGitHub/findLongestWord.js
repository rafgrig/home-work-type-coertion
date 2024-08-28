function findLongestWord(string=''){
    let arrayedString = string.split(' ')
    let longesrWord = arrayedString.sort((a,b) => b.length - a.length)[0]
    return console.log(longesrWord)
}

findLongestWord("JavaScript is awesome");