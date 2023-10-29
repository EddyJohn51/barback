import React from 'react';
import {View, Text} from 'react-native';

import styles from './FeaturedRecipe.style';

const FeaturedRecipe = ({recipe}) => {
    return (
        <View>
            <Text>Featured Recipe: {recipe}</Text>
        </View>
    )
}

export default FeaturedRecipe;