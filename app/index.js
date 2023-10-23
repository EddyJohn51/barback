import {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native'
import {Stack, useRouter} from 'expo-router';

import {SIZES, COLORS} from '../constants';

import {Header, PopularRecipes} from '../components/';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.backgroundColor},
                headerShadowVisible: false,
                headerTitle: "",
            }} />

            <View style={{backgroundColor: COLORS.backgroundColor}}>
                <Header />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium }}>
                    <PopularRecipes />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;