const promise = Promise.resolve(1);
promise.then(() => {
    Promise.resolve('reject')
    Promise.resolve('reject')
    Promise.resolve('reject')
}).catch(err => console.log(err))