const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

const newArr = arr.filter((item)=>{
    if(+item && typeof item === "number")return true
})

console.log(newArr)