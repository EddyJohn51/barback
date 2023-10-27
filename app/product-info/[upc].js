import React from 'react';
import {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {Stack, useRouter, useLocalSearchParams} from 'expo-router';

import {COLORS, SIZES} from '../../constants';
import fetchProductInfo from '../../hook/fetchProductInfo';

const ProductInfo = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const {info, isLoading, error, refetchInfo} = fetchProductInfo(params.upc);

    return (
        <View>
            <Text>Product info for {params.upc} </Text>
        </View>
    );
}

export default ProductInfo;