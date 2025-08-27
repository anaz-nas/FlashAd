/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Get_Started.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            The Real Deal{'\n'}
            <Text style={styles.bold}>In Real Time.</Text>
          </Text>

          <Text style={styles.subtitle}>
            Discover exclusive deals near you and save big on every purchase!
            Businesses, craft the perfect promotion for your company and deliver
            it at the moment of greatest impact.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started →</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 10,
    lineHeight: 34,
  },
  bold: {
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 25,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#BA181B',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GetStarted;
