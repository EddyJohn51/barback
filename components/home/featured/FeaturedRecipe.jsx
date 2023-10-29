import React, {useState, useCallback} from 'react';
import {View, Text, Image} from 'react-native';

import useFetchRecipeInfo from '../../../hook/fetchRecipeInfo'

import styles from './FeaturedRecipe.style';

const FeaturedRecipe = ({recipe}) => {
    const [refreshing, setRefreshing] = useState(false);

    const {data, isLoading, error, refetchRecipeInfo} = useFetchRecipeInfo('search', 'bloody_mary');

    return (
        <View>
            <Text>Featured Recipe: {recipe}</Text>
        </View>
    )
}

export default FeaturedRecipe;