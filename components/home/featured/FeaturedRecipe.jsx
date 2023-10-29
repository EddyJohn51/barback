import React, {useState, useCallback} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator} from 'react-native';

import {COLORS, SIZES} from '../../../constants';
import useFetchRecipeInfo from '../../../hook/fetchRecipeInfo'

import RecipeTabs from '../../tabs/RecipeTabs'
import styles from './FeaturedRecipe.style';

const tab = ['Ingredients', 'Instructions'];

const FeaturedRecipe = ({recipe}) => {
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tab[0])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetchRecipeInfo();
        setRefreshing(false);
    }, []);


    const showTabInfo = () => {
        switch(activeTab) {
            case 'Ingredients':
                return (
                    <View>
                        <Text>INGREDIENTS</Text>
                    </View>
                )
            case 'Instructions':
                    return (
                        <View>
                            <Text>INSTRUCTIONS</Text>
                        </View>
                    )
            default:
                break;
        } 
    }
    
    const {data, isLoading, error, refetchRecipeInfo} = useFetchRecipeInfo('search', recipe);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.secondary} />
                    ) : error ? (
                        <Text>Something Went Wrong!</Text>
                    ) : data.length === 0 ? (
                        <Text>No data to render</Text>
                    ) : (
                        <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                            <Image
                                src={data.drinks[0].strDrinkThumb}
                                style={{width: 150, height: 150}}
                                resizeMode='contain'
                            />
                            <Text>{data.drinks[0].strDrink}</Text>
                            <RecipeTabs 
                                tabs={tab}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            {showTabInfo()}
                            {console.log(data.drinks[0])}
                        </View>
                    )}
                </ScrollView>
            </>
        </SafeAreaView>
    );
}

export default FeaturedRecipe;