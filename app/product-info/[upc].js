import React from 'react';
import {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';

import {COLORS, SIZES} from '../../constants';
import useFetchProductInfo from '../../hook/fetchProductInfo';

const ProductInfo = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const {data, isLoading, error, refetchProductInfo} = useFetchProductInfo(params.upc);

    return (
        <View>
            <Text>Product info for {params.upc}</Text>
            <Text>{data.total}</Text>  
        </View>
    );
}

export default ProductInfo;