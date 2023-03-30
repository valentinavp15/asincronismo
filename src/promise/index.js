const promise = new Promise(function (resolve, reject) {
    resolve('hey');
});

const cows = 8;

const countCows = new Promise (function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else{
        reject('There are no enough cows on the farm');
    }
})

// El uso de .then es cuando resolve es true, el catch es cuando reject es true
countCows.then( (result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('Finally'));
