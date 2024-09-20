function reversedString(s){
    try{
        let reversedString = s.split("").reverse().join('')
        return reversedString
    }catch(err){
        console.log(err)
    }
}

console.log(reversedString('Hello'))