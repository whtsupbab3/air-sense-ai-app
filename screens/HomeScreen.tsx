import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/GlobalStyles';

export default function HomeScreen() {
  return (
    <View style={[globalStyles.screen, styles.container]}>
      <Text style={[globalStyles.text, styles.title]}>Air Quality Monitor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
