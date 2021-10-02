import {Text, View, StyleSheet, Button} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function MapScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the map screen!</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => navigation.navigate('Introduction')}
                title="Return"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
