import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/slices/userSlice';
import globalStyles from '../styles/GlobalStyles';
import { RootState } from 'store';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={[globalStyles.screen, styles.container]}>
      <Text style={[globalStyles.text, styles.title]}>Hi {user?.name}</Text>
      
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
