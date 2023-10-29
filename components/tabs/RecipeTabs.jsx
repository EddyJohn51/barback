import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {COLORS, SIZES} from '../../constants';
import styles from './RecipeTabs.style';

const TabButton = ({name}) => (
    <TouchableOpacity>
        <Text>{name}</Text>
    </TouchableOpacity>
)

const RecipeTabs = ({tabs}) => {
    return (
        <View>
            <FlatList
                data={tabs}
                renderItem={({item}) => (
                    <TabButton
                        name={item}
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