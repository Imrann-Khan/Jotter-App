import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MoreVerticalIcon } from "./FileIcons";

interface ItemListRowProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  onPress?: () => void;
  onMenuPress?: () => void;
}

export const ItemListRow: React.FC<ItemListRowProps> = ({
  icon,
  title,
  date,
  onPress,
  onMenuPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        gap: 10,
      }}
    >
      {/* Icon */}
      <View style={{ width: 24, height: 24 }}>{icon}</View>

      {/* Content */}
      <View style={{ flex: 1, gap: 1 }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: "500",
            color: "#303030",
            lineHeight: 20,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 8,
            fontFamily: "Archivo",
            fontWeight: "500",
            color: "#747474",
            lineHeight: 20,
          }}
        >
          {date}
        </Text>
      </View>

      {/* More menu button */}
      <TouchableOpacity
        onPress={onMenuPress}
        style={{
          padding: 4,
        }}
      >
        <MoreVerticalIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
