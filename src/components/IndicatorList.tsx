import React from "react";
import { View, StyleSheet } from "react-native";
import { indicators } from "../utils/constants";
import IndicatorCard from "./IndicatorCard";
import { Status } from "../utils/types";

interface IndicatorListProps {
  data: {
    [key: string]: {
      value: number;
      unit: string;
      status: Status;
    };
  };
}

export default function IndicatorList({ data }: IndicatorListProps) {
  return (
    <View style={styles.grid}>
      {indicators.map((indicator) => (
        <IndicatorCard
          key={indicator.name}
          name={indicator.name}
          formula={indicator.shortDescription}
          data={{
            value: data[indicator.name]?.value || 0,
            unit: indicator.unit,
            status: data[indicator.name]?.status || "Good",
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});