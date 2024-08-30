function sortObjects(arrOfObjcets, argumentForSort){
    arrOfObjcets.sort((a,b) => a.argumentForSort-b.argumentForSort)
    let newArr = []
    for(let i =0; i<arrOfObjcets.length;i++ ){
        newArr.push([arrOfObjcets[i]])
    }
    return newArr
}

console.log(sortObjects([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
    ],'age'))