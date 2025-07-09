import React from "react";
import { TouchableOpacity, View } from "react-native";
import { PlusIcon } from "./FileIcons";

interface FloatingActionButtonProps {
  onPress?: () => void;
  bottom?: number;
  right?: number;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
  bottom = 100,
  right = 24,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        bottom,
        right,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#F6F6F6",
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      <PlusIcon />
    </TouchableOpacity>
  );
};
