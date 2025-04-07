import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 26, marginBottom: 30 }}>Bengali Learning App</Text>
      <Button title="Vowels & Consonants" onPress={() => navigation.navigate('Letters')} />
      <View style={{ height: 20 }} />
      <Button title="Common Phrases" onPress={() => navigation.navigate('Phrases')} />
    </View>
  );
}