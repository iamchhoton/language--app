import React from 'react';
import { View, Text, FlatList } from 'react-native';

const phrases = [
  { en: 'Hello', bn: 'নমস্কার' },
  { en: 'Thank you', bn: 'ধন্যবাদ' },
  { en: 'How are you?', bn: 'আপনি কেমন আছেন?' },
  { en: 'Good night', bn: 'শুভ রাত্রি' },
  { en: 'I love you', bn: 'আমি তোমায় ভালোবাসি' },
];

export default function PhrasesScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={phrases}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: '#f9fbe7',
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.en}</Text>
            <Text style={{ fontSize: 22, color: '#444' }}>{item.bn}</Text>
          </View>
        )}
      />
    </View>
  );
}