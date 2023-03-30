const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('async'), 2000)
            : reject(New Error ('Error'));
    });
}

const anotherFnc = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFnc();
console.log('after');
