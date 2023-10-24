import {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text, useWindowDimensions} from 'react-native'
import {Stack, useRouter} from 'expo-router';
import RenderHtml from 'react-native-render-html';

import {SIZES, COLORS} from '../constants';

import {Header, PopularRecipes} from '../components/';

const Home = () => {
    const router = useRouter();
    const {width} = useWindowDimensions();

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

                <View>
                    <RenderHtml
                        contentWidth={width} 
                        source={{html: '<a target="_blank" href="https://icons8.com/icon/132/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'}}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;