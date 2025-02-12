import Header from "components/Header";
import { View, Text, StyleSheet } from "react-native";
import globalStyles from "styles/GlobalStyles";

export default function StatisticsScreen() {
  return (
    <View style={[globalStyles.screen]}>
      <Header currentScreen="Statistics" />

      <Text>Statistics Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
