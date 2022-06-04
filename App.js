import { StyleSheet, Text, View } from 'react-native';

import SearchScreen from './src/views/SearchScreen/SearchScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen/>
    </View>
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
