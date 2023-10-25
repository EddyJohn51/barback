import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {COLORS} from '../../constants';

const Scanner = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.primary},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                        >
                            <Text>BACK</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <View>
                <Text>Will Be A Camera View</Text>
            </View>
        </SafeAreaView>
    );
}

export default Scanner;