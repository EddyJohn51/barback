import React from 'react';
import {useCallback, useState} from 'react';
import {Text, View, ScrollView, ActivityIndicator, RefreshControl, SafeAreaView} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';

import {COLORS, SIZES} from '../../constants';
import useFetchProductInfo from '../../hook/fetchProductInfo';

const ProductInfo = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetchProductInfo();
        setRefreshing(false);
    }, []);

    const {data, isLoading, error, refetchProductInfo} = useFetchProductInfo(params.upc);

    const getIngredient = () => {
        console.log(data.items[0].category);
        const temp = data.items[0].category.split(' > ')
        const temp_ing = temp[temp.length - 1];
        return temp_ing;
    }

    const showIngredient = () => {
        const ing = getIngredient();
        return (
            <Text>{ing}</Text>
        )
    }

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
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.secondary} />
                    ) : error ? (
                        <Text>Something Went Wrong!</Text>
                    ) : data.length === 0 || data.items.length === 0 ? (
                        <Text>No data to render</Text>
                    ) : (
                        <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                            <Text>{data.items[0].title}</Text>
                            {showIngredient()}
                        </View>
                    )}
                </ScrollView>
            </>
        </SafeAreaView>
    );
}

export default ProductInfo;