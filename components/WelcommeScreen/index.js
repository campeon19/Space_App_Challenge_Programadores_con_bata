import {Text, View, StyleSheet, Button, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import logo from '../../assets/splash1.png';

export default function WelcommeScreen({ navigation }) {
    const [outputText, setOutputText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non posuere mauris, ut ornare urna. Sed dignissim sodales enim, tristique eleifend lacus laoreet eu. Maecenas et bibendum erat, et imperdiet neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales libero lobortis fringilla fermentum. Phasellus non diam sagittis nunc cursus pretium. Pellentesque pulvinar vulputate elit, a euismod purus efficitur ut.")
    
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image source={logo} style={styles.logoSize}  />
            </View>
            <View>
                <Text style={styles.title1}>Welcomme!</Text>
            </View>
            <View style={styles.view2}>
                <Text>{outputText}</Text>                
            </View>
            <View style={styles.botonSize}>
                <Button 
                    style={styles.boton1} 
                    color="#25166B"                  
                    onPress={() => setOutputText('Funcion en construccion xD')}
                    title="Next"
                />
            </View>
            <View style={styles.botonSize}>
                <Button
                    style={styles.boton1} 
                    color="#25166B"                    
                    onPress={() => navigation.navigate('Introduction')}
                    title="Return"
                />
            </View>
            <StatusBar style="auto" />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logoSize: {
        width: 140,
        height: 140,
    },
    view1: {
        marginTop: 50,
    },
    view2: {
        marginTop: 50,
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
    },
    title1: {
        fontSize: 30,
        marginTop: 30,
    },
    botonSize: {
        marginTop: 10,
        width: 150,        
    },
    boton1: {         
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: "#25166B",
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    }

});
