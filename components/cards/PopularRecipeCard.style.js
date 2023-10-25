import {StyleSheet} from 'react-native'

import {COLORS, SIZES, FONTS} from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: '#FFFFFF',
    },
    imageContainer: {
        height: 50,
        width: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageItem: {
        width: '90%',
        height: '90%',
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    recipeName: {
        fontSize: SIZES.large,
        fontFamily: FONTS.medium,
        color: COLORS.secondary,
    },
});

export default styles;
