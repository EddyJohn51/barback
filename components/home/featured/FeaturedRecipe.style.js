import {StyleSheet} from 'react-native'

import {SIZES, COLORS, FONTS} from '../../../constants';

const styles = StyleSheet.create({
    featuredContainer: {
        padding: SIZES.medium,
        paddingBottom: 50,
    },
    imageContainer: {
        alignItems: 'center',
    },
    featuredImage: {
        width: 150,
        height: 150,
    },
    featuredName: {
        fontFamily: FONTS.medium,
        fontSize: 30,
        textAlign: 'center',
    },
});

export default styles;