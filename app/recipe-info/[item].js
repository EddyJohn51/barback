import React from 'react';
import {useCallback, useState} from 'react';
import {Text, View, ScrollView, ActivityIndicator, RefreshControl, SafeAreaView} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';

import {COLORS, SIZES} from '../../constants';
import useFetchProductInfo from '../../hook/fetchProductInfo';

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
                <Text>RECIPE INFO</Text>
            </>
        </SafeAreaView>
    );
}

export default RecipeInfo;