const numbers = [1,2,3,4,5]

function MyFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
  
    return undefined
  }
  
  const find = MyFind(numbers, element => element > 2)
  
  console.log(find)