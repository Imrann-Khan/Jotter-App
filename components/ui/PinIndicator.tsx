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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
      }}
    >
      {Array.from({ length: pinLength }, (_, index) => (
        <View
          key={index}
          style={{
            width: 14,
            height: 14,
            borderRadius: 8,
            backgroundColor: index < currentLength ? "#303030" : "#747474",
          }}
        />
      ))}
    </View>
  );
};
