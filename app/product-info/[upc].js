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

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <Stack.Screen
            options= {{
                headerStyle: {backgroundColor: COLORS.primary},
                headerShadowVisible: false,
                headerTitle: "",
            }}
            />

            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

                </ScrollView>
            </>
        </SafeAreaView>
    );
}

export default ProductInfo;