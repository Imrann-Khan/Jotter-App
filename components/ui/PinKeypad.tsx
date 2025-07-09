import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PinKeypadProps {
  onNumberPress: (number: string) => void;
  onDeletePress: () => void;
}

const DeleteIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="#303030"
    />
  </Svg>
);

export const PinKeypad: React.FC<PinKeypadProps> = ({
  onNumberPress,
  onDeletePress,
}) => {
  const keypadRows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["", "0", "delete"],
  ];

  const renderButton = (value: string, isDelete = false, isEmpty = false) => {
    if (isEmpty) {
      return (
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        />
      );
    }

    return (
      <TouchableOpacity
        onPress={() => {
          if (isDelete) {
            onDeletePress();
          } else {
            onNumberPress(value);
          }
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
        activeOpacity={0.7}
      >
        {isDelete ? (
          <DeleteIcon />
        ) : (
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: "#303030",
              fontFamily: "Inter",
              textAlign: "center",
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
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
      }}
    >
      {keypadRows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: "row",
            gap: 24,
            alignItems: "center",
          }}
        >
          {row.map((value, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            if (value === "") {
              return <View key={key}>{renderButton(value, false, true)}</View>;
            }
            if (value === "delete") {
              return <View key={key}>{renderButton(value, true)}</View>;
            }
            return <View key={key}>{renderButton(value)}</View>;
          })}
        </View>
      ))}
    </View>
  );
};
