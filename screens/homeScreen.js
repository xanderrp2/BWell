import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Home({navigation}) {

    const pressHandler = () => {
        navigation.push('Journal');    
    }
    return (
    <View style={styles.container}>
      <Text>This is the home screen</Text>
      <Button title = 'go to journalScreen' onPress = {() => pressHandler()}></Button>
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
