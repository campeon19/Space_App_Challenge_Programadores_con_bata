import {SafeAreaView, StyleSheet, View, Text, Image, Button} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from '../../assets/icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function IntroductionScreen({ navigation }) {
    const [message, setMessage] = useState('Loading...');
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        setShowRealApp(true);
    };
    
    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingBottom: 100,
            }}>
            <Image style={styles.introImageStyle} source={logo} />
            <Text style={styles.introTitleStyle}>{item.title}</Text>            
            <Text style={styles.introTextStyle}>{item.text}</Text>
          </View>
        );
    };

    const renderNextButton1 = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="arrow-right"
              color="rgba(0, 0, 0, .9)"
              size={24}
            />
          </View>
        );
    };

    const renderDoneButton1 = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="check"
              color="rgba(0, 0, 0, .9)"
              size={24}
            />
          </View>
        );
    };

    const renderSkipButton = () => {
        return (
          <View style={styles.buttonCircle2}>
            <Text style={{color:'black', fontSize:18}}>Skip</Text>
          </View>
        );
    };


    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setMessage(json.movies[0].title))
            .catch((err) => alert(err))
    }, [])

    return (
        <>
        {showRealApp ? (
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
        ) : (
            <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                renderDoneButton={renderDoneButton1}
                renderNextButton={renderNextButton1}
                renderSkipButton={renderSkipButton}
            />
        )}
        </>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    introImageStyle: {
        width: 140,
        height: 140,
        marginTop: 30,
    },
    introTextStyle: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 20,
        marginLeft: 50,
        marginRight: 50,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCircle2: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const slides = [
    {
      key: 's1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non posuere mauris, ut ornare urna. Sed dignissim sodales enim, tristique eleifend lacus laoreet eu. Maecenas et bibendum erat, et imperdiet neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales libero lobortis fringilla fermentum. Phasellus non diam sagittis nunc cursus pretium. Pellentesque pulvinar vulputate elit, a euismod purus efficitur ut.',
      title: 'Welcomme!',
      image: { logo },
      // backgroundColor: '#20d2bb',
    },
    {
      key: 's2',
      title: 'Sun data in your hand',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non posuere mauris, ut ornare urna. Sed dignissim sodales enim, tristique eleifend lacus laoreet eu. Maecenas et bibendum erat, et imperdiet neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales libero lobortis fringilla fermentum. Phasellus non diam sagittis nunc cursus pretium.',
      image: { logo },
      // backgroundColor: '#febe29',
    },
    {
      key: 's3',
      title: 'Sun Statistics around your home',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non posuere mauris, ut ornare urna. Sed dignissim sodales enim, tristique eleifend lacus laoreet eu. Maecenas et bibendum erat, et imperdiet neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales libero lobortis fringilla fermentum.',
      image: { logo },
      // backgroundColor: '#22bcb5',
    },
];