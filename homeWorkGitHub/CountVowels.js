function countVowels(string = ''){
    let arrayedSrtng = string.split('')
    let count = 0 
    for(let i = 0; i< string.length; i ++){
        if(arrayedSrtng[i] === 'a' ||arrayedSrtng[i] === 'e' || arrayedSrtng[i] === 'i' || arrayedSrtng[i] === 'o' || arrayedSrtng[i] === 'u' ||
            arrayedSrtng[i] === 'A' ||arrayedSrtng[i] === 'E' || arrayedSrtng[i] === 'I' || arrayedSrtng[i] === 'O' || arrayedSrtng[i] === 'U'
         ){
            count++
        }
    }
    return console.log(count)
}

countVowels("JavaScript");