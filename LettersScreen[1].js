import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const letters = [
  { letter: 'অ', soundUrl: 'https://github.com/imrandude/assets/blob/main/audio/o.mp3?raw=true' },
  { letter: 'আ', soundUrl: 'https://github.com/imrandude/assets/blob/main/audio/aa.mp3?raw=true' },
  { letter: 'ক', soundUrl: 'https://github.com/imrandude/assets/blob/main/audio/ka.mp3?raw=true' },
  { letter: 'খ', soundUrl: 'https://github.com/imrandude/assets/blob/main/audio/kha.mp3?raw=true' },
];

export default function LettersScreen() {
  const playSound = async (url) => {
    const { sound } = await Audio.Sound.createAsync({ uri: url });
    await sound.playAsync();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={letters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: '#e0f7fa',
              borderRadius: 10,
              alignItems: 'center',
            }}
            onPress={() => playSound(item.soundUrl)}
          >
            <Text style={{ fontSize: 36 }}>{item.letter}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}