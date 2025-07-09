import React from "react";
import { View, Image, Text } from "react-native";
import { CalendarUtils } from "../../utils/calendarUtils";

interface EmptyStateProps {
  selectedDate?: string | null;
  hasSelectedDate?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  selectedDate,
  hasSelectedDate = false,
}) => {
  const getMessage = () => {
    if (hasSelectedDate && selectedDate) {
      const displayDate = CalendarUtils.formatDisplayDate(selectedDate);
      return `No files uploaded on ${displayDate}`;
    }
    return "No files found";
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        paddingHorizontal: 40,
      }}
    >
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d51bdb3132bed90171c95cb42c11b956f8f17f8d?width=1000",
        }}
        style={{
          width: 300,
          height: 225,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: "#747474",
          textAlign: "center",
          marginTop: 20,
          fontFamily: "Archivo",
        }}
      >
        {getMessage()}
      </Text>
      {hasSelectedDate && (
        <Text
          style={{
            fontSize: 14,
            color: "#AAAAAA",
            textAlign: "center",
            marginTop: 8,
            fontFamily: "Archivo",
          }}
        >
          Select a different date to view files
        </Text>
      )}
    </View>
  );
};
