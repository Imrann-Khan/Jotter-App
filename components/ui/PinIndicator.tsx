import React from "react";
import { View } from "react-native";

interface PinIndicatorProps {
  pinLength: number;
  currentLength: number;
}

export const PinIndicator: React.FC<PinIndicatorProps> = ({
  pinLength,
  currentLength,
}) => {
  return (
    <View
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        flexDirection: "row",
      }}
    >
      {Array.from({ length: pinLength }, (_, index) => (
        <View
          key={index}
          style={{
            width: 14,
            height: 14,
            borderRadius: 8,
            backgroundColor: "#747474",
          }}
        />
      ))}
    </View>
  );
};
