import { Indicator } from "./types";

export const indicators: Indicator[] = [
  {
    name: "Temperature",
    shortDescription: "",
    unit: "°C",
    statusRange: {
      Good: [20, 25],
      Moderate: [
        [15, 20],
        [25, 30],
      ],
      Unhealthy: [
        [-Infinity, 15],
        [30, Infinity],
      ],
    },
  },
  {
    name: "Humidity",
    shortDescription: "",
    unit: "%",
    statusRange: {
      Good: [30, 50],
      Moderate: [
        [20, 30],
        [50, 60],
      ],
      Unhealthy: [
        [-Infinity, 20],
        [60, Infinity],
      ],
    },
  },
  {
    name: "CO₂",
    shortDescription: "Carbon Dioxide",
    unit: "ppm",
    statusRange: {
      Good: [-Infinity, 800],
      Moderate: [800, 1000],
      Unhealthy: [1000, Infinity],
    },
  },
  {
    name: "PM₂.₅",
    shortDescription: "Particulate < 2.5 µg",
    unit: "µg/m³",
    statusRange: {
      Good: [-Infinity, 12],
      Moderate: [13, 35],
      Unhealthy: [35, Infinity],
    }
  },
  {
    name: "PM₁₀",
    shortDescription: "Particulate < 10 µg",
    unit: "µg/m³",
    statusRange: {
      Good: [-Infinity, 54],
      Moderate: [55, 154],
      Unhealthy: [154, Infinity],
    }
  },
  {
    name: "TVOC",
    shortDescription: "Total Volatile Organic Compounds",
    unit: "ppb",
    statusRange: {
      Good: [-Infinity, 220],
      Moderate: [220, 660],
      Unhealthy: [660, Infinity],
    },
  },
];

