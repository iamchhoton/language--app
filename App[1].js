import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LettersScreen from './LettersScreen';
import PhrasesScreen from './PhrasesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Letters" component={LettersScreen} />
        <Stack.Screen name="Phrases" component={PhrasesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}