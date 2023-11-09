import React, {useState, useEffect, useCallback} from 'react';
import {ActivityIndicator, FlatList, Image, TouchableOpacity, View, Text, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';
import axios from 'axios';

import {COLORS, SIZES} from '../../constants/';
import useFetchRecipeInfo from '../../hook/fetchRecipeInfo';
import {PopularRecipeCard} from '../../components/';
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

        <>
            <Text>You made it to the search page!</Text>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.secondary} />
                ) : error ? (
                    <Text>Something Went Wrong!</Text>
                ) : (
                    <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                        <Text>Results Here</Text>
                        <FlatList
                            data={data.drinks}
                            renderItem={({item}) => (
                                <PopularRecipeCard
                                    name={item.strDrink}
                                    imageUrl={item.strDrinkThumb}
                                />
                            )}
                            keyExtractor={(item) => item.idDrink}
                            horizontal
                        />
                        {console.log(data.drinks)}
                    </View>
                )}
            </ScrollView>
        </>
        </SafeAreaView>
    )
}

export default RecipeSearch;