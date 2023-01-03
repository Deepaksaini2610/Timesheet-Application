import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/Home';
// import Admin from './screens/Admin';
import Navigation from './screens/Navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
