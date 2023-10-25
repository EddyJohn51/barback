import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useRouter} from 'expo-router';


import styles from './popularrecipes.style';
import {COLORS, SIZES} from '../../../constants';
import PopularRecipeCard from '../../cards/PopularRecipeCard';

const data = [1,2,3,4];

const PopularRecipes = () => {
    return (
        <View>
            {data?.map((recipe) =>
                <PopularRecipeCard />
            )}
        </View>
    );
};

export default PopularRecipes;