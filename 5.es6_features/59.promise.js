console.log('welcome');

//creating promise - 3 states in promise (pending, resolve, reject)
/*
const promise1 = new Promise((resolve, reject) => {
    let completePromise = false;
    if (completePromise) {
        resolve('completed promise 1')
    } else {
        // reject('not completed promise 1')
        reject(new Error('not completed promise 1'))
    }
})

const promise2 = new Promise((resolve, reject) => {
    resolve('promise 2 completed');
})

// console.log(promise1);
promise1.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err.message);
});

promise2.then(res => {
    console.log(res);
})
*/

/*
//promise all function
const promise1 = new Promise((resolve, reject) => {
    resolve('completed promise 1');
})

const promise2 = new Promise((resolve, reject) => {
    resolve('completed promise 2');
})

Promise.all([promise1, promise2]).then(([res1, res2]) => {
    console.log(res1, res2);
})
*/


//promise race function -> show first resolevd
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('completed promise 1');
    }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('completed promise 2');
    }, 1000)
})

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});



console.log('bye');