// Para poder hacer llamado a esta librería en la terminal hago > npm i xmlhttprequest y me sale "added 1 package, and audited 2 packages in 2s", luego debo llamar de la manera que está abajo a la librería 

// XMLHttpRequest es un objeto de JS que permite hacer peticiones e interactuar con servicios en la nube(URLs o APIs).

const XMLHttpRequest = require('xmlhttprequest');

// Para llamar la API de platzi
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    // Le da un espacio en memoria al XHR
    let xhttp = new XMLHttpRequest();

    // ya podemos utilizar nuestra variable ‘xhttp’ (en conjunto al callback) como un objeto para acceder y manipular la API. Primero debemos abrir una solicitud (un request) esto lo hacemos con el método ‘.open()’
    // Ahora bien el primer parámetro es el tipo de solicitud que vamos a realizar, el segundo parámetro es la url de la API a la cuál le vamos a realizar el request, el tercer parámetro recibe un booleano para indicarle si vamos a utilizar asíncronismo o no, tal simple como TRUE o FALSE según el caso.
    xhttp.open('GET', urlApi, true);

    xhttp.onreadystatechange = function(event) {
        // el readystate responde
        // 0 unsent
        // 1 opened
        // 2 headers_recived
        // 3 loading
        // 4 done, entonces debemos parar en ‘4’ cuando la operacion ha sido completada
        if(xhttp.readyState === 4){

            // el status responde 
            // 100 - 199 informational responses,
            // 200 - 299 succesful responses, 
            // 300 - 399 redirection message,
            // 400 - 499 client error resposes,
            // 500 - 599, server error responses 
            if(xhttp.status ===200){
                // Ya comprobamos que tanto el request como el response hayan sido exitosos

                // En el primer paramentro dejamos un null porque ya verificamos que el proceso esté correcto, el segundo parametro usamos la función ‘JSON.parse()’ para convertir en datos que podamos controlar el texto que nos retorna la propiedad ‘.responseText’ después de hacer el request.
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else{
            const error = new Error ('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}

