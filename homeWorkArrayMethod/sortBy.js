function sortBy(array, argForSorting){
    switch(argForSorting){
      case "Asc": 
      return console.log(array.sort((a,b) => a-b))
      case "Desc":
      return console.log(array.sort((a,b) => b-a))
      default:
      return console.log(array)
    }
  }
  
  sortBy([4, 3, 2, 1], "Asc"); 
  sortBy([7, 8, 11, 66]);
  sortBy([7, 8, 11, 66], "Desc");