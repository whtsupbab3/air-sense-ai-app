import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import globalStyles from "../styles/GlobalStyles";

export default function LoadingScreen() {
  return (
    <View style={{ ...globalStyles.screen, ...styles.container }}>
      <ActivityIndicator size="large" color="#FFF" />
      <Text style={{ ...globalStyles.text, ...styles.text }}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
  },
});
