import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const window = Dimensions.get('window');
const LandingPage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('ShoppingList');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/shopping.png')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/list.jpg')}
        style={styles.ellipse1}
      />
      <Text style={styles.fastRescuedFood}>Welcome to Smart Buyers.</Text>
      <View style={styles.rectangle1}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12486B',
    borderRadius: 15,
    width: window.width,
    height: window.height,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 25,
    alignItems: 'center',
  },

  image: {
    borderRadius: 15,
    width: window.width * 0.96,
    height: window.height * 0.35,
    position: 'absolute',
    left: window.width * 0.02,
    top: window.height * 0.45,
  },
  ellipse1: {
    borderRadius: window.width * 0.19,
    width: window.width * 0.38,
    height: window.width * 0.38,
    position: 'absolute',
    left: window.width * 0.29,
    top: window.height * 0.07,
  },
  fastRescuedFood: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: window.height * 0.05,
    fontFamily: 'IndieFlower-Regular',
    position: 'absolute',
    left: window.width * 0.07,
    top: window.height * 0.26,
    width: window.width * 0.86,
    height: window.height * 0.34,
  },
  rectangle1: {
    backgroundColor: '#419197',
    borderRadius: 15,
    width: window.width * 0.55,
    height: window.height * 0.06,
    position: 'absolute',
    left: window.width * 0.22,
    top: window.height * 0.86,
  },

  button: {
    position: 'absolute',
    backgroundColor: '#419197',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default LandingPage;
