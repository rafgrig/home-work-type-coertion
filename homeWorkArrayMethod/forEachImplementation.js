const numbers = [1,2,3,4,5]

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  }
  
  myForEach(numbers,(number, index, array) => {console.log(number);});