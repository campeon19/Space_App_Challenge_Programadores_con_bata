import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from '../../assets/splash1.png';

const Sliders = ({ navigation }) => {
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
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
        />
      )}
    </>
  );
};

export default Sliders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
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
    title: 'Sun data in your home',
    text: 'Upto 25% off on Domestic Flights',
    image: { logo },
    // backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Sun Statistics',
    text: 'Enjoy Great offers on our all services',
    image: { logo },
    // backgroundColor: '#22bcb5',
  },
];