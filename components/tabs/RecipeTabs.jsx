import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {COLORS, SIZES} from '../../constants';
import styles from './RecipeTabs.style';

const TabButton = ({name, activeTab, handleNewTab}) => (
    <TouchableOpacity
        onPress={handleNewTab}>
        <Text>{name}</Text>
    </TouchableOpacity>
)

const RecipeTabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <View>
            <FlatList
                data={tabs}
                renderItem={({item}) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        handleNewTab={()=> setActiveTab(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item=>item}
                contentContainerStyle={{columnGap: SIZES.small}}
            />
        </View>
    )
}

export default RecipeTabs;