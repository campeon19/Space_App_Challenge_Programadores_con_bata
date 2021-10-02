import {Text, View, StyleSheet, Button} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";


export default function IntroductionScreen({ navigation }) {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setMessage(json.movies[0].title))
            .catch((err) => alert(err))
    }, [])

    return (
        <View style={styles.container}>
            <Text>This is the introduction Screen!</Text>
            <Text>{message}</Text>
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
            <Button
                onPress={() => navigation.navigate('Welcomme')}
                title="Welcomme"
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
