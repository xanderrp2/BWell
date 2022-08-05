import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Journal({ navigation }) {
    return (
    <View style={styles.container}>
      <Text style={styles.container}>This is the journal screen</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
