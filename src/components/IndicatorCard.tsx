import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Status } from "../utils/types";
import { getStatusColor } from "../utils/utils";
import Svg, { Circle } from "react-native-svg";

interface IndicatorCardProps {
  name: string;
  formula: string;
  data: {
    value: number;
    unit: string;
    status: Status;
  };
}

function CircularProgress ({ 
  size = 48,
  strokeWidth = 4,
  progress = 0.7,
  color = "#FFC107"
}) {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressStroke = circumference - (progress * circumference);

  return (
    <Svg width={size} height={size} style={styles.progressCircle}>
      {/* Background circle */}
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke="#333"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress circle */}
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={progressStroke}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
      {/* Value text will be rendered outside the SVG */}
    </Svg>
  );
};

export default function IndicatorCard({ name, formula, data }: IndicatorCardProps) {
  const progress = 0.7; // You'll need to calculate this based on your data ranges

  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Text style={styles.name}>
          {name} <Text style={styles.formula}>{formula}</Text>
        </Text>
        <View style={styles.bottomRow}>
          <View style={[styles.statusContainer, { backgroundColor: getStatusColor(data.status) }]}>
            <View style={styles.statusDot} />
            <Text style={styles.status}>{data.status}</Text>
          </View>
          <Text style={styles.value}>
            {data.value} {data.unit}
          </Text>
        </View>
      </View>
      <View style={styles.circleContainer}>
        <CircularProgress
          color={getStatusColor(data.status)}
          progress={progress}
        />
        <Text style={styles.circleValue}>{Math.round(data.value)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 83,
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 12,
    paddingBottom: 4,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContent: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  formula: {
    color: "#666",
    fontSize: 13,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    backgroundColor: "rgba(255, 193, 7, 0.2)",
  },
  statusDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#000",
    marginRight: 4,
  },
  status: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
  },
  value: {
    fontSize: 13,
    color: "#666",
    marginLeft: 6,
  },
  circleContainer: {
    position: "relative",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircle: {
    position: "absolute",
  },
  circleValue: {
    position: "absolute",
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
