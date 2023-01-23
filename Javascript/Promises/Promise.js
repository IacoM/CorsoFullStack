const number = 15;

let myPromise = new Promise((resolve, reject)=> {
    let num = number;
    if(num > 10) {
        resolve(num);
    } else {
        reject(num);
    }
})

myPromise
    .then((num)=> console.log(num))
    .catch((err)=> console.error(err))