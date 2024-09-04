const numbers = [1,2,3,4,5]

function myMap(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(callback(array[i], i, array));
    }
    return newArr;
  }
  
  const mappedNumbers = myMap(numbers, (number, index, array) => {
    return number * 2;
  });
    
  console.log(mappedNumbers);