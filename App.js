/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#0F2027', '#203A43', '#2C5364']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      locations={[0, 0.5, 1]}
      useAngle={true}
      angle={45}
      angleCenter={{x: 0.5, y: 0.5}}
      style={styles.background}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 21,
  },
});

export default App;
