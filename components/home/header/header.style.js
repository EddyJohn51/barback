import {StyleSheet} from "react-native";

import {COLORS, SIZES, FONTS} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.primary,
    },
    titleText: {
        fontFamily: FONTS.medium,
        color: COLORS.secondary,
        fontSize: SIZES.xxLarge * 1.5,
    },
    subtitleText: {
        fontFamily: FONTS.light,
        color: COLORS.secondary,
        fontSize: SIZES.small * 1.5,
    }
});

export default styles;