import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/slices/userSlice";
import globalStyles from "../styles/GlobalStyles";
import { RootState } from "../store";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { getStatusColor } from "utils/utils";
import { LanguageSelector } from "../components/LanguageSelector";
import IndicatorList from "components/IndicatorList";
import { useLanguage } from "i18n/LanguageContext";
import Header from "components/Header";

export interface IndicatorData {
  value: number;
  unit: string;
  status: "Good" | "Moderate" | "Unhealthy";
  description?: string;
}

interface AirQualityData {
  overall: {
    value: number;
    status: "Good" | "Moderate" | "Unhealthy";
    description: string;
  };
  pollutants: {
    pm25: IndicatorData;
    no2: IndicatorData;
    o3: IndicatorData;
    so2: IndicatorData;
    pm10: IndicatorData;
    co: IndicatorData;
  };
}

export default function HomeScreen() {

  const { user } = useSelector((state: RootState) => state.user);
  const { t } = useLanguage();

  const [airQualityData, setAirQualityData] = useState<AirQualityData>({
    overall: {
      value: 58,
      status: "Moderate",
      description:
        "Air quality is acceptable. However, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
    },
    pollutants: {
      pm25: {
        value: 17.59,
        unit: "µg/m³",
        status: "Moderate",
      },
      no2: {
        value: 18.89,
        unit: "µg/m³",
        status: "Good",
      },
      o3: {
        value: 79.47,
        unit: "µg/m³",
        status: "Good",
      },
      so2: {
        value: 5.09,
        unit: "µg/m³",
        status: "Good",
      },
      pm10: {
        value: 34.24,
        unit: "µg/m³",
        status: "Moderate",
      },
      co: {
        value: 1360.88,
        unit: "µg/m³",
        status: "Unhealthy",
      },
    },
  });



  return (
    <ScrollView style={globalStyles.screen}>
      <View style={globalStyles.screen}>
        <Header currentScreen="Home" />

        <View style={styles.mainCard}>
          <Text style={styles.title}>{t.home.currentAirQuality}</Text>

          <View style={styles.qualityIndicator}>
            <Text style={styles.qualityValue}>
              {airQualityData.overall.value}
            </Text>
            <Text
              style={[
                styles.qualityStatus,
                { color: getStatusColor(airQualityData.overall.status) },
              ]}
            >
              {airQualityData.overall.status}
            </Text>
          </View>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            eos voluptatum? Ducimus amet, quos nostrum cupiditate impedit minus
            praesentium expedita ad quisquam quis, magnam distinctio, nobis
            beatae blanditiis dignissimos rerum?
          </Text>
        </View>
        <IndicatorList
          data={{
            "CO₂": {
              value: airQualityData.pollutants.co.value,
              unit: airQualityData.pollutants.co.unit,
              status: airQualityData.pollutants.co.status,
            },
            Temperature: {
              value: 24,
              unit: "°C",
              status: "Good",
            },
            // Add other indicators as needed
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    padding: 8,
  },
  mainCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 20,
  },
  qualityIndicator: {
    alignItems: "center",
    marginBottom: 20,
  },
  qualityValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
  },
  qualityStatus: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: "#757575",
    lineHeight: 24,
  },
  pollutantsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
