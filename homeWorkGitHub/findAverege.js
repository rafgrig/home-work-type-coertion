function findAverage(array =[]){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    let averegeNumber = sum/array.length

    return console.log(averegeNumber)
}

findAverage([10, 20, 30, 40, 50]);