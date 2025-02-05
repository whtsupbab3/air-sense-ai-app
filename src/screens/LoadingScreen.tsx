import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import { useLanguage } from '../i18n/LanguageContext';

export default function LoadingScreen() {
  const { t } = useLanguage();

  return (
    <View style={[globalStyles.screen, styles.container]}>
      <ActivityIndicator size="large" color="#FFF" />
      <Text style={[globalStyles.text, styles.text]}>{t.loading.text}</Text>
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
