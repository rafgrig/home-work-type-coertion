const person ={
    firstName:"Jone",
    lastName:"Doe",
    age:30
  }
  
  person.toString = () =>{
    return `Name: ${person.firstName}${person.lastName} age: ${person.age}`
  }
  
  console.log(String(person))