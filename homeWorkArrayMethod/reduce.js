const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

const newArr = arr.reduce((acc, item)=>{
    if(item>18){
        acc += item
    }
    return acc
}, 0)

console.log(newArr)