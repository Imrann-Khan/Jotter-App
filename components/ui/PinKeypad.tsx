import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface PinKeypadProps {
  onNumberPress: (number: string) => void;
  onDeletePress: () => void;
}

export const PinKeypad: React.FC<PinKeypadProps> = ({
  onNumberPress,
  onDeletePress,
}) => {
  const keypadRows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [",", "0", "delete"],
  ];

  const renderButton = (value: string, isDelete = false, isEmpty = false) => {
    if (isEmpty) {
      return (
        <View
          style={{
            width: 80,
            height: 80,
          }}
        />
      );
    }

    return (
      <TouchableOpacity
        onPress={() => {
          if (isDelete) {
            onDeletePress();
          } else if (value !== ",") {
            onNumberPress(value);
          }
        }}
        style={{
          display: "flex",
          width: 80,
          height: 80,
          padding: value === "," ? 28 : 19,
          paddingVertical: 19,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 40,
          backgroundColor: "transparent",
        }}
        activeOpacity={0.7}
      >
        {isDelete ? (
          <View />
        ) : (
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: "#303030",
              fontFamily: "Inter",
              textAlign: "center",
              lineHeight: 42,
            }}
          >
            {value}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 24,
      }}
    >
      {keypadRows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 24,
            flexDirection: "row",
          }}
        >
          {row.map((value, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            if (value === "delete") {
              return <View key={key}>{renderButton(value, true)}</View>;
            }
            if (value === ",") {
              return <View key={key}>{renderButton(value, false, true)}</View>;
            }
            return <View key={key}>{renderButton(value)}</View>;
          })}
        </View>
      ))}
    </View>
  );
};
