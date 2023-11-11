import React from 'react';
import {useCallback, useState} from 'react';
import {Text, View, ScrollView, ActivityIndicator, RefreshControl, SafeAreaView} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';

import {COLORS, SIZES} from '../../constants';
import {FeaturedRecipe} from '../../components';
const RecipeInfo = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <Stack.Screen
            options= {{
                headerStyle: {backgroundColor: COLORS.primary},
                headerShadowVisible: false,
                headerTitle: '',
            }}
            />

            <>
                <FeaturedRecipe
                    recipe={params.item}
                />
            u7</>

        </SafeAreaView>
    );
}

export default RecipeInfo;