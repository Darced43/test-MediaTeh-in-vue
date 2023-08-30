import {ref} from 'vue'
import axios from "axios";

export default async function useFetch() {
    
    const products = ref(null)

    try {
        const response = await axios.get('https://dummyjson.com/products?limit=12');
        products.value =  response.data.products
    } catch (error) {
        console.log(error);
    }

    return products
}