function secondreversedString(s){
    try{
        return s.split("").reverse().join("")
    }catch(e){
        console.log(e)
    }
}

console.log(secondreversedString(6))