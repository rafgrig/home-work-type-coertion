function sum(...args) {
    return args.reduce((acc, current) => {
        return acc + current;
    }, 0);
}

console.log(sum(1, 2,3));