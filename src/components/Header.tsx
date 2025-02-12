import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { LanguageSelector } from "./LanguageSelector";

type RootStackParamList = {
  Home: undefined;
  Control: undefined;
  Statistics: undefined;
  Settings: undefined;
};

interface HeaderProps {
  currentScreen: "Home" | "Control" | "Statistics" | "Settings";
}

export default function Header({ currentScreen }: HeaderProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      <LanguageSelector />
      <View style={styles.headerRight}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.icon}
        >
          <Ionicons
            name={currentScreen === "Home" ? "home" : "home-outline"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Control")}
          style={styles.icon}
        >
          <Ionicons
            name={
              currentScreen === "Control"
                ? "game-controller"
                : "game-controller-outline"
            }
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Statistics")}
          style={styles.icon}
        >
          <Ionicons
            name={
              currentScreen === "Statistics"
                ? "stats-chart"
                : "stats-chart-outline"
            }
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.icon}
        >
          <Ionicons
            name={currentScreen === "Settings" ? "settings" : "settings-outline"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
});
