import {View, StyleSheet, Dimensions, Text, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location"

const latitudeDelta = 0.009;
const longitudeDelta = 0.009;

export default function MapScreen({ navigation }) {
    const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 })
    const [initialRegion, setInitialRegion] = useState(null)

    const getLocation = async () => {
        let coords
        try {
            await Location.requestForegroundPermissionsAsync()
            const data = await Location.getCurrentPositionAsync()
            coords = data.coords
        } catch (e) {
            coords = { latitude: 29.559346, longitude: -95.090022 }
        }
        return coords
    }

    useEffect(() => {
        getLocation()
            .then(coords => {
                setCoordinates(coords)
                setInitialRegion({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta,
                    longitudeDelta,
                })
            })
    }, [])

    return (
        <View style={styles.container}>
            { initialRegion ? (
                <>
                    <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation onPress={(e) => setCoordinates(e.nativeEvent.coordinate)}>
                         <Marker draggable coordinate={coordinates} onDragEnd={(e) => setCoordinates(e.nativeEvent.coordinate)} />
                    </MapView>
                    <TouchableOpacity style={styles.button} onPress={() => alert(`Latitud: ${coordinates.latitude} Longitud: ${coordinates.longitude}`)}>
                        <Text style={styles.text}>SELECCIONAR</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text>Por favor espera...</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-end',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    button: {
        backgroundColor: "#5834f7",
        padding: 20,
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
});
