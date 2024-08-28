const date ={
    day:'25',
    month:'01',
    year:'2024'
  }
  
  date.toString=()=>{
    return `${date.day}/${date.month}/${date.year}`
  }

  console.log(String(date))