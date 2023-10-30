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
    
    const {data, isLoading, error, refetchRecipeInfo} = useFetchRecipeInfo('search', recipe);

    var ingredients = []
    var measures = []

    const getIngredients = () => {
        for(let i = 1; i < 16; i++)
        {
            let ing = data.drinks[0][`strIngredient${i}`];
            let measure = data.drinks[0][`strMeasure${i}`];

            if(ing !== null && measure !== null)
            {
                ingredients.push(ing);
                measures.push(measure);
            }else if(ing !== null && measure === null)
            {
                ingredients.push(ing);
                measures.push('');
            }
        }
    };

    const showTabInfo = () => {
        switch(activeTab) {
            case 'Ingredients':
                getIngredients();
                return (
                    <View>
                        {ingredients.map((item, index) => (
                            <View style={styles.contentContainer}>
                                <View style={styles.contentWrapper}>
                                    <View style={styles.contentDot}/>
                                    <Text style={styles.contentText}>{`${item} (${measures[index]})`}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                )
            case 'Instructions':
                const instructions = data.drinks[0].strInstructions.split('.')
                instructions.splice(-1);
                    return (
                        <View style={styles.contentContainer}>
                            {instructions.map((item, index) => (
                                <View style={styles.contentWrapper}>
                                    <View style={styles.contentDot}/>
                                    <Text style={styles.contentText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    )
            default:
                break;
        } 
    }

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
                        <View style={styles.featuredContainer}>
                            <View style={styles.imageContainer}>
                                <Image
                                    src={data.drinks[0].strDrinkThumb}
                                    style={styles.featuredImage}
                                    resizeMode='contain'
                                />
                            </View>
                            <Text style={styles.featuredName}>{data.drinks[0].strDrink}</Text>
                            <RecipeTabs 
                                tabs={tab}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                            {showTabInfo()}
                        </View>
                    )}
                </ScrollView>
            </>
        </SafeAreaView>
    );
}

export default FeaturedRecipe;