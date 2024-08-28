function findLargest(array = []){
    array.sort((a, b) => b - a);
    return console.log(array[0])
}

findLargest([1, 3, 5, 7, 9]);