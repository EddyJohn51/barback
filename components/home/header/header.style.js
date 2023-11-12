import {StyleSheet} from "react-native";

import {COLORS, SIZES, FONTS} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.primary,
    },
    titleText: {
        fontFamily: FONTS.medium,
        color: COLORS.textColor,
        fontSize: SIZES.xxLarge * 1.5,
    },
    subtitleText: {
        fontFamily: FONTS.light,
        color: COLORS.textColor,
        fontSize: SIZES.small * 1.5,
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 0,
        height: 50,
        backgroundColor: COLORS.primary,
    },
    searchWrapper: {
        flex: 1,
        marginRight: SIZES.small,
        justifyContent: 'left',
        alignItems: 'left',
        flexDirection: 'row',
        marginTop: SIZES.xSmall,
        height: 40,
    },
    searchbar: {
        fontFamily: FONTS.medium,
        width: "80%",
        height: "100%",
        paddingHorizontal: SIZES.small,
        backgroundColor: "#E0E1DD",
        borderRadius: SIZES.xSmall,
    },
    searchButton: {
        width: "10%",
        height: "100%",
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.backgroundColor,
        justifyContent: 'center',
        alignItems: 'left',
        paddingHorizontal: 0,
    },
    searchButtonImage: {
        width: "50%",
        height: "50%",
    },
});

export default styles;