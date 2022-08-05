import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Home from './screens/homeScreen';
import Navigator from './routes/homeStack';
import React, {useState, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Navigator />
    //<Home />
    //<View style={styles.container}>
    //  <Text style={styles.container}>This is the home screen</Text>
    //  <Button title = 'go to journalScreen' onPress={pressHandler()}></Button>
    //</View>
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
