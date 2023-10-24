import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

import styles from './header.style';
import {COLORS, icons} from '../../../constants';

const Header = () =>  {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.titleText}>BARBACK</Text>
                <Text style={styles.subtitleText}>Shake, Stir, Sip: Cocktails at Your Fingertips</Text>
            </View>

            <View>
                <TextInput 
                    style={{backgroundColor: COLORS.primary}}
                    placeholder='What Ingredient do you want to use?'
                />
            </View>

            <View>
                <TouchableOpacity>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={icons.camera}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>


    );
};

export default Header;