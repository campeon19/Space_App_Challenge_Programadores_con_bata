import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function IntroductionScreen() {
    return (
        <View style={styles.container}>
            <Text>This is the introduction Screen!</Text>
            <StatusBar style="auto" />
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
