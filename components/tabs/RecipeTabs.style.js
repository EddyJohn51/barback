import {StyleSheet} from 'react-native';

import {FONTS, COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2,
        alignItems: 'center',
    },
    button: (name, activeTab) => ({
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeTab ? COLORS.secondary : COLORS.tertiary,
        borderRadius: SIZES.medium,
        marginLeft: 2,
    }),
    buttonText: (name, activeTab) => ({
        fontFamily: FONTS.light,
        fontSize: SIZES.medium,
        color: COLORS.textColor,
    }),
});

export default styles;