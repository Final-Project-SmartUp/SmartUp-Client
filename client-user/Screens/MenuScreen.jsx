import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MainMenu = ({ navigation }) => {
  const handleStartPress = () => {
    navigation.navigate('Quiz');
  };

  const handleLeaderboardPress = () => {
    navigation.navigate('Leaderboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Game</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLeaderboardPress}>
        <Text style={styles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    padding: 16,
    backgroundColor: '#007aff',
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainMenu;
