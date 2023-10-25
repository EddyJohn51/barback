import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useRouter} from 'expo-router';


import styles from './popularrecipes.style';
import {COLORS, SIZES} from '../../../constants';
import PopularRecipeCard from '../../cards/PopularRecipeCard';

const data = [1,2,3,4, 5, 6, 7, 8, 9];

const PopularRecipes = () => {
    return (
        <View>
            <View>
                <Text>Popular Recipes</Text>
            </View>

            <View>
                {data?.map((recipe) =>
                    <PopularRecipeCard />
                )}
            </View>
        </View>
    );
};

export default PopularRecipes;