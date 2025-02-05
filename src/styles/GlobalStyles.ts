import { StyleSheet, Platform, StatusBar } from "react-native";

const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  screen: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    color: "white",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  input: {
    backgroundColor: "#1A1A1A",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});

export default globalStyles;
