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
    contentContainer: {
        marginVertical: SIZES.small,
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 0,
    },
    contentDot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: COLORS.textColor,
        marginTop: 6,
    },
    contentText: {
        fontSize: SIZES.medium,
        color: COLORS.textColor,
        fontFamily: FONTS.light,
        marginLeft: SIZES.small,
    }
});

export default styles;