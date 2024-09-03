function parseInteger(arr = []) {
    return arr.map((item) => {
        const parsed = +item;
        return isNaN(parsed) ? null : parsed;
    });
}

console.log(parseInteger(['1', 'px', '2']));