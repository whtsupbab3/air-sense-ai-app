import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useLanguage } from "./LanguageContext";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, language === "en" && styles.activeButton]}
        onPress={() => setLanguage("en")}
      >
        <Text style={[styles.text, language === "en" && styles.activeText]}>
          EN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, language === "ua" && styles.activeButton]}
        onPress={() => setLanguage("ua")}
      >
        <Text style={[styles.text, language === "ua" && styles.activeText]}>
          UA
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    right: 20,
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    padding: 4,
    zIndex: 1000,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  activeButton: {
    backgroundColor: "#333",
  },
  text: {
    color: "#666",
    fontSize: 14,
    fontWeight: "600",
  },
  activeText: {
    color: "#FFF",
  },
});
