import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/slices/authSlice';
import globalStyles from '../styles/GlobalStyles';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={[globalStyles.screen, styles.container]}>
      <Text style={[globalStyles.text, styles.title]}>Air Quality Monitor</Text>
      
      <TouchableOpacity
        style={[globalStyles.button, styles.signOutButton]}
        onPress={handleSignOut}
      >
        <Text style={globalStyles.text}>Sign Out</Text>
      </TouchableOpacity>
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
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#FF3B30', 
  }
});
