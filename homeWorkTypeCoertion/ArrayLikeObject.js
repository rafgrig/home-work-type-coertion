const arrayLike = {
    0:"item1",
    1:"item2",
    2:"item3",
  }
  
  arrayLike.toString = ()=>{
    let string = ""
    for(let i = 0; i < 3; i++){
        let idx = i + ''
        string += arrayLike[idx] + ', '
    }
    return string
  }

console.log(String(arrayLike))
