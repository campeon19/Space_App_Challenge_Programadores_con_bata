import {Text, View, StyleSheet, Button} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";


export default function IntroductionScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>This is the introduction Screen!</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => navigation.navigate('Daily')}
                title="To Daily"
            />
            <Button
                onPress={() => navigation.navigate('Map')}
                title="To Map"
            />
            <Button
                onPress={() => navigation.navigate('Menu')}
                title="Menu"
            />
            <Button
                onPress={() => navigation.navigate('Statistics')}
                title="Statistics"
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
