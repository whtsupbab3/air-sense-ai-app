import Header from "components/Header";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "styles/GlobalStyles";

export default function ControlScreen() {
  return (
    <View style={[globalStyles.screen]}>
        <Header currentScreen="Control" />
       
      <Text>Control Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
});
