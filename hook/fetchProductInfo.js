import {useState, useEffect} from 'react';
import  axios from 'axios';

const useFetchProductInfo = (upc) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`,
    };

    const getProductInfo = async () => {
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
        getProductInfo();
    }, []);

    const refetchProductInfo = () => {
        setIsLoading(true);
        getProductInfo();
    };

    return {data, isLoading, error, refetchProductInfo};
}

export default useFetchProductInfo;