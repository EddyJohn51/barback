import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, useWindowDimensions} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {BarCodeScanner} from 'expo-barcode-scanner'

import {COLORS} from '../../constants';

const Scanner = () => {
    const router = useRouter();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const {width, height} = useWindowDimensions();

    const [x, setX] = useState((width / 2) - 50);
    const [y, setY] = useState((width / 2) + 50);
    const [boxWidth, setBoxWidth] = useState(100);
    const [boxHeight, setBoxHeight] = useState(100);


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({type, data, bounds}) => {
        setScanned(true);

        const {origin, size} = bounds;

        setX(origin.x);
        setY(origin.y);
        setBoxHeight(size.height);
        setBoxWidth(size.width);

        alert(`Barcode of type ${type} scanned! Data is ${data}`);
    };
    
    if(hasPermission === null) {
        return (
            <Text>Requesting Camera Permission</Text>
        );
    }
    if(hasPermission === false) {
        return (
        <Text>Permission not granted.</Text>
        );
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.primary},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                        >
                            <Text>BACK</Text>
                        </TouchableOpacity>
                    )
                }}
            />

    
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}>
                <View 
                    style={{
                        position: 'absolute',
                        top: y,
                        left: x,
                        width:boxWidth,
                        height:boxHeight,
                        borderColor: '#00FF00',
                        borderWidth: 2
                    }}>

                </View> 
            </BarCodeScanner>
            {scanned && <TouchableOpacity onPress={() => setScanned(false)}><Text>Scan Again</Text></TouchableOpacity>}
        </SafeAreaView>
    );
}

export default Scanner;