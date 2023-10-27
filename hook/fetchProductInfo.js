import {useState, useEffect} from 'react';
import  axios from 'axios';
import {UPC_API_TOKEN} from '@env';

const auth_token = UPC_API_TOKEN;
console.log(auth_token);

const fetchProductInfo = (upc) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`,
    };

    const fetchProductInfo = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data);
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

    return {data, isLoading, error, refetchProductInfo};
}

export default fetchProductInfo;