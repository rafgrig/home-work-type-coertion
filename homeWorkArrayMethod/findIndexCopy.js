function MyFingIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
          return i;
      }
  }

  return undefined
}

const findIndex = MyFingIndex(numbers, element => element > 2)

console.log(findIndex)