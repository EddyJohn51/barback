import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {useRouter} from 'expo-router';


import styles from './popularrecipes.style';
import {COLORS, SIZES} from '../../../constants';
import {PopularRecipeCard} from '../../cards/PopularRecipeCard';

const PopularRecipes = () => {
    return (
        <View>
            <Text>Popular Recipes</Text>
        </View>
    );
};

export default PopularRecipes;