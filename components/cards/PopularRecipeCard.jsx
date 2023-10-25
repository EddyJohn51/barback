import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './PopularRecipeCard.style';
import {COLORS} from '../../constants';

const PopularRecipeCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => {alert("Popular Recipe Pressed")}}
            >
                <Image 
                    source={{uri: 'https://placehold.co/100x100/png'}}
                    style={styles.imageItem}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.recipeName}>PopularRecipeCard</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PopularRecipeCard;