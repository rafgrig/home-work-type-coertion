function isPrime(number) {
    if (number <= 1) return console.log(false);   
    if (number <= 3) return console.log(true);  
    if (number % 2 === 0 || number % 3 === 0) return console.log(false);
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return console.log(false);
    }
    return console.log(true);
}

isPrime(7)
 
