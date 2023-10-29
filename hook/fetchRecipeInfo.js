import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchRecipeInfo = (endpoint, params) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    if(endpoint === 'search')
    {
        apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params}`
    } else if(endpoint === 'filter')
    {
        apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params}`
    }

    const options = {
        method: 'GET',
        url: apiUrl,
    };

    const getRecipeInfo = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert(`There was an error fetching recipe info: ${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getRecipeInfo();
    }, []);

     const refetchRecipeInfo = () => {
        setIsLoading(true);
        getRecipeInfo();
     };

     return {data, isLoading, error, refetchRecipeInfo};
}

export default useFetchRecipeInfo;