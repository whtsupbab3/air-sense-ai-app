import Header from "components/Header";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import LogOutButton from "components/LogOutButton";

export default function SettingsScreen() {
  return (
    <View style={[globalStyles.screen]}>
      <Header currentScreen="Settings" />
      <Text>Settings Screen</Text>

      <View style={styles.optionsContainer}>
        <LogOutButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
