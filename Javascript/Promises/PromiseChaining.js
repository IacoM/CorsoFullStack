const user = {name: "John", age: 24};
function isLoggedIn() {
    return new Promise((resolve, reject) => {
        const isLogged = true;
        let num = Math.random();
        if(isLogged === true) {
            resolve(num);
        }else {
            reject(new Error('Not logged!'));
        }
    });
}

function getUserDetails(num) {
    return new Promise((resolve, reject)=> {
        if(num > 0.5) {
            resolve(user);
        }else {
            reject(new Error("User doesn't exist!"));
        }
    })
}

function printUserDetails(user){
    return user;
}

isLoggedIn()
    .then(getUserDetails)
    .then(printUserDetails)
    .then((user)=> console.log(user))
    .catch((err)=> console.error(err))