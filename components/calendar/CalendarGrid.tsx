import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CalendarMonth } from "../../types/calendar";
import { CalendarUtils } from "../../utils/calendarUtils";

interface CalendarGridProps {
  calendar: CalendarMonth;
  selectedDate: string | null; // YYYY-MM-DD format
  onDatePress: (dateString: string) => void;
  loading?: boolean;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  calendar,
  selectedDate,
  onDatePress,
  loading = false,
}) => {
  // Show only first week for preview (like in design)
  const previewDays = calendar.days.slice(0, 7);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 8,
        width: 328,
        height: 33,
        opacity: loading ? 0.5 : 1,
      }}
    >
      {previewDays.map((day, index) => {
        const isSelected = selectedDate === day.fullDate;
        const isCurrentMonth = CalendarUtils.isSameMonth(
          day.fullDate,
          calendar.year,
          calendar.month,
        );
        const isToday = CalendarUtils.isToday(day.fullDate);

        // For design matching, highlight day 31 with yellow background
        const shouldHighlight = day.date === 31 && isCurrentMonth;

        return (
          <TouchableOpacity
            key={`${day.fullDate}-${index}`}
            onPress={() => onDatePress(day.fullDate)}
            disabled={loading}
            style={{
              width: 34,
              height: 33,
              borderRadius: 20,
              backgroundColor:
                shouldHighlight || isSelected ? "#FDCF41" : "transparent",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontWeight: "400",
                color: "#000",
                fontFamily: "Archivo",
                lineHeight: 20,
                textAlign: "center",
              }}
            >
              {day.date}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
