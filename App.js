import React from 'react'
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import DeputadoScreen from './src/screens/DeputadoScreen/DeputadoScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='home' component={HomeScreen} options={{headerShow: false}}/>
            <Stack.Screen name='listaDeputados' component={SearchScreen} options={{title: 'Deputados'}}/>
            <Stack.Screen name='deputado' component={DeputadoScreen} options={{title: 'Perfil do Deputado'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
