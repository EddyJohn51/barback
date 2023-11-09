import React, {useState, useEffect, useCallback} from 'react';
import {ActivityIndicator, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import axios from 'axios';

import {COLORS, SIZES} from '../../constants/';
import useFetchRecipeInfo from '../../hook/fetchRecipeInfo';
//import styles from '../../styles/search';

const RecipeSearch = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetchRecipeInfo();
        setRefreshing(false);
    }, []);

    const {data, isLoading, error, refetchRecipeInfo} = useFetchRecipeInfo('search', params.searchTerm);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
        <Stack.Screen
        options= {{
            headerStyle: {backgroundColor: COLORS.primary},
            headerShadowVisible: false,
            headerTitle: '',
        }}
        />
        <Text>You made it to the search page!</Text>
        </SafeAreaView>
    )
}

export default RecipeSearch;