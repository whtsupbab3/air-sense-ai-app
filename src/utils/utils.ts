export const getStatusColor = (status: string) => {
  switch (status) {
    case "Good":
      return "#4CAF50";
    case "Moderate":
      return "#FFC107";
    case "Unhealthy":
      return "#F44336";
    default:
      return "#757575";
  }
};
