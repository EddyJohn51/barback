import {useState} from 'react';
import {View, SafeAreaView, ScrollView, Text, useWindowDimensions, StatusBar} from 'react-native'
import {Stack, useRouter} from 'expo-router';
import RenderHtml from 'react-native-render-html';

import {SIZES, COLORS} from '../constants';

import {Header, PopularRecipes, FeaturedRecipe} from '../components/';

const Home = () => {
    const router = useRouter();
    const {width} = useWindowDimensions();

    const recipes = ['margarita', 'bloody mary', 'old-fashioned', 'martini'];
    
    return (

        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
            <StatusBar barStyle='dark-content' hidden = {false} backgroundColor={COLORS.primary} translucent={true}/>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.primary},
                headerShadowVisible: false,
                headerTitle: "",
            }} />

            <View style={{backgroundColor: COLORS.backgroundColor}}>
                <Header
                    navigateCamera={() => {
                        router.push('/scanner');
                    }}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium }}>
                    <FeaturedRecipe 
                        recipe={recipes[Math.floor(Math.random() * recipes.length)]}/>
                </View>

                <View>
                    <RenderHtml
                        contentWidth={width} 
                        source={{html: '<a target="_blank" href="https://icons8.com/icon/132/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'}}
                    />
                    <RenderHtml
                        contentWidth={width}
                        source={{html: '<a target="_blank" href="https://icons8.com/icon/5376/camera">Camera</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'}}
                    />
                    <RenderHtml
                        contentWidth={width}
                        source={{html: '<a href="https://fonts.google.com/specimen/Kanit">Kanit</a> font from <a href="https://fonts.google.com/">Google Fonts</a'}}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;