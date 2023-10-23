import {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native'
import {Stack, useRouter} from 'expo-router';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: '#FFFFFF'},
                headerShadowVisible: false,
                headerLeft: () => {
                    <ScreenHeaderButton />
                },
                headerRight: () => {
                    <ScreenHeaderButton />
                },
                headerTitle: "",
            }} />
        </SafeAreaView>
    )
};

export default Home;