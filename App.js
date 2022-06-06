import React from 'react'
import { StyleSheet, View } from 'react-native';

// import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
