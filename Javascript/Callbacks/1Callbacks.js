function printAsyncName(callback, name) {
    setTimeout(()=> {
        console.log(name);
    }, 2000);
    setTimeout(callback, 1000);
}

printAsyncName(()=> console.log('Hello'), 'Giovanni');