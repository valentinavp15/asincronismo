// En la terminal: npm i node-fetch
import fetch from 'node-fetch';

// Para llamar la API de platzi
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const responde = await fetch(urlApi);
    const data = await responde.json();
    return data;
}

const anotherFunction = async (urlApi) =>{
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);        
        console.log(products.title);
        console.log(category.name);

    } catch (error){
        console.error(error);
    }
}

anotherFunction(API);