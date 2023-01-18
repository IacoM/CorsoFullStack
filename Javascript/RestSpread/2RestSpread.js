function sum(...rest) {
    return rest.reduce((a, rest)=> a + rest);
}

console.log(sum(1, 2, 3, 4, 5));