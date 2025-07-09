import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CalendarHeaderProps {
  selectedMonth: string;
  onMonthChange: (direction: "prev" | "next") => void;
  loading?: boolean;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  selectedMonth,
  onMonthChange,
  loading = false,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 24,
        marginBottom: 8,
        height: 36,
        width: 121,
        justifyContent: "flex-start",
      }}
    >
      {/* Current Month Display with Dropdown */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 10,
          width: 97,
          height: 36,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#303030",
            fontFamily: "Archivo",
            lineHeight: 24,
          }}
        >
          {selectedMonth}
        </Text>
        {loading && <ActivityIndicator size="small" color="#303030" />}
      </View>

      {/* Dropdown Arrow */}
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M16 10L12 14L8 10"
          stroke="#303030"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
