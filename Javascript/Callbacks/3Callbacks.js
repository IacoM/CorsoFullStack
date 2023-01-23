function repeatHello(callback) {
    let id = setInterval(callback, 1000);
    setTimeout(()=> clearInterval(id),1000 * 5);
}

repeatHello(()=> console.log('Hello'));