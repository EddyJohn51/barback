import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {useRouter} from 'expo-router'

import styles from './header.style';
import {COLORS, icons} from '../../../constants';

const Header = ({navigateCamera, searchTerm, setSearchTerm, handleClick}) =>  {
    const router = useRouter();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.titleText}>BARBACK</Text>
                <Text style={styles.subtitleText}>Shake, Stir, Sip: Cocktails at Your Fingertips</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchbar}
                        placeholder='What Ingredient do you want to use?'
                        placeholderTextColor={COLORS.secondary}
                        value={searchTerm}
                        onChangeText={(text) => {setSearchTerm(text)}}
                    />
                </View>

                <TouchableOpacity style={styles.searchButton}
                    onPress={handleClick}
                >
                    <Image
                        style={styles.searchButtonImage}
                        source={icons.search}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchButton}
                    onPress= {navigateCamera}
                >
                    <Image
                        style={styles.searchButtonImage}
                        source={icons.camera}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>


    );
};

export default Header;