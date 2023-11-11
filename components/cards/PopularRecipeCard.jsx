import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './PopularRecipeCard.style';
import {COLORS} from '../../constants';

const PopularRecipeCard = ({name, imageUrl, navigateSearch}) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={navigateSearch}
        >
            <TouchableOpacity
                style={styles.imageContainer}
            >
                <Image 
                    source={{uri: imageUrl}}
                    style={styles.imageItem}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.recipeName}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PopularRecipeCard;