import {SafeAreaView, StyleSheet, View, Text, Image, Button} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from '../../assets/icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

function IntroductionScreen({ navigation, changeShowApp, showApp }) {
    const [message, setMessage] = useState('Loading...');

    // const onDone = () => {
    //     props.changeShowApp()
    // };
    
    // const onSkip = () => {
    //     props.changeShowApp()
    // };

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
        {showApp ? (
            <View style={styles.container}>
              <View>
                <Text style={styles.title1}>What do you want to see today?</Text>
              </View>
              <View style={styles.botonSize}>
                <Button
                    style={styles.boton1}
                    onPress={() => navigation.navigate('Daily')}
                    title="To Daily"
                    color = '#25166B'
                  />
              </View>
              <View style={styles.botonSize}>
                <Button
                    style={styles.boton1}
                    onPress={() => navigation.navigate('Map')}
                    title="To Map"
                    color = '#25166B'
                />
              </View>
              <View style={styles.view1}>
                <Image source={logo} style={styles.logoSize}  />
              </View>
              <StatusBar style="auto" />
            </View>
        ) : (
            <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={changeShowApp}
                showSkipButton={true}
                onSkip={changeShowApp}
                renderDoneButton={renderDoneButton1}
                renderNextButton={renderNextButton1}
                renderSkipButton={renderSkipButton}
            />
        )}
        </>        
    );



    
}
//IMPORTANTE para acceder al estado global se accede con this.props.showApp
//Para cambiar estado, la funcion es this.props.changeShowApp()
function mapStateToProps(state){
  return{
    showApp: state.showApp
  }
}

function mapDispatchToProps(dispatch){
  return{
    changeShowApp: () => dispatch({type: 'CHANGE_SHOWAPP'})
  }

}

export default connect( mapStateToProps, mapDispatchToProps )( IntroductionScreen )



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
    title1: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 100,
      paddingTop: 30,
      textAlign: 'center',
    },
    view1: {
      alignItems: "center",
      justifyContent: 'center',
    },
    botonSize: {
      marginTop: 30,
      width: 250,  
    },
    boton1: {         
      paddingTop:10,
      paddingBottom:10,
      backgroundColor: "#25166B",
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    logoSize: {
      marginTop: 70,
      width: 140,
      height: 140,
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