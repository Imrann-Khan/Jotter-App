import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { SearchIcon } from "../dashboard/Icons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Search here",
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 42,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#EAEAEA",
        backgroundColor: "#FFFFFF",
        gap: 8,
      }}
    >
      <SearchIcon />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#747474"
        style={{
          flex: 1,
          fontSize: 12,
          fontWeight: "500",
          lineHeight: 20,
          color: "#303030",
          fontFamily: "System",
        }}
      />
    </View>
  );
};
