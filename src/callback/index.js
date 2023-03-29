function sum(num1, num2){
    return num1 + num2;
};

function calc(num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

setTimeout(function(){
    console.log('Hola Javascripit')
}, 5000);

// Alt + 96 ``
function gretting(name){
    console.log(`Hola ${name}`);
}

// Primero se llama la función luego el tiempo (2segundos) y el argumento de la funcion
setTimeout(gretting, 2000, 'Valentina');