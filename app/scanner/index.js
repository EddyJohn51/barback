import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import {BarCodeScanner} from 'expo-barcode-scanner'

import {COLORS} from '../../constants';

const Scanner = () => {
    const router = useRouter();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
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
            style={StyleSheet.absoluteFillObject}
        />
        {scanned && <TouchableOpacity onPress={() => setScanned(false)}><Text>Scan Again</Text></TouchableOpacity>}
        </SafeAreaView>
    );
}

export default Scanner;