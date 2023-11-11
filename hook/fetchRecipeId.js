import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchRecipeId = (id) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    };

    const getRecipeId = async () => {
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
        getRecipeId();
    }, []);

     const refetchRecipeId = () => {
        setIsLoading(true);
        getRecipeId();
     };

     return {data, isLoading, error, refetchRecipeId};
}

export default useFetchRecipeId;