import {useState, useEffect} from 'react';
import X_RAPIDAPI_KEY from '@env';
const axios = require('axios');

const fetchProductInfo = (upc) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
        params: {
            'upc': upc,
        },
        headers: {
            'X-RapidAPI-Key': X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    const fetchProductInfo = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert(`There was an error fetching product info: ${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() =>  {
        fetchProductInfo();
    }, []);

    const refetchProductInfo = () => {
        setIsLoading(true);
        fetchProductInfo();
    };

    return {data, isLoading, error, refetch};
}