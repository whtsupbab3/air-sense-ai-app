export type User = {
  id: number;
  name: string;
  email: string;
};

export type Status = "Good" | "Moderate" | "Unhealthy";

export type Indicator = {
  name: string;
  shortDescription: string;
  unit: string;
  statusRange: {
    Good: [number | number[], number | number[]];
    Moderate: [number | number[], number | number[]];
    Unhealthy: [number | number[], number | number[]];
  };
};
