import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Alert,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { BottomNavigation } from "./BottomNavigation";
import { StatusBar as CustomStatusBar } from "../components/dashboard";
import { CalendarHeader } from "../components/calendar/CalendarHeader";
import { CalendarGrid } from "../components/calendar/CalendarGrid";
import { FileListItem } from "../components/calendar/FileListItem";
import { EmptyState } from "../components/calendar/EmptyState";
import { useCalendar } from "../hooks/useCalendar";
import { CalendarUtils } from "../utils/calendarUtils";
import { CalendarFile } from "../types/calendar";
import Svg, { Path } from "react-native-svg";

interface CalendarScreenProps {
  onTabPress?: (tab: string) => void;
  onNavigateBack?: () => void;
  onFilePress?: (file: CalendarFile) => void;
}

export const CalendarScreen: React.FC<CalendarScreenProps> = ({
  onTabPress = () => {},
  onNavigateBack,
  onFilePress,
}) => {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const {
    calendar,
    files,
    selectedDate,
    loading,
    error,
    refreshing,
    loadCalendarMonth,
    selectDate,
    refresh,
    clearError,
  } = useCalendar(currentYear, currentMonth);

  // Show error alert when error occurs
  useEffect(() => {
    if (error) {
      Alert.alert("Error", error, [
        {
          text: "Retry",
          onPress: () => {
            clearError();
            loadCalendarMonth(currentYear, currentMonth);
          },
        },
        { text: "OK", onPress: clearError },
      ]);
    }
  }, [error, clearError, loadCalendarMonth, currentYear, currentMonth]);

  const handleFileMenuPress = (
    fileName: string,
    position: { x: number; y: number },
  ) => {
    // Find the file and show context menu or navigate
    const file = files.find((f) => f.name === fileName);
    if (file && onFilePress) {
      onFilePress(file);
    }
  };

  const handleMonthChange = async (direction: "prev" | "next") => {
    let newMonth = currentMonth;
    let newYear = currentYear;

    if (direction === "next") {
      newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    } else {
      newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    await loadCalendarMonth(newYear, newMonth);
  };

  const handleDatePress = (dateString: string) => {
    selectDate(dateString);
  };

  const currentMonthName = calendar
    ? `${CalendarUtils.getMonthName(calendar.month)} ${calendar.year}`
    : `${CalendarUtils.getMonthName(currentMonth)} ${currentYear}`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      {/* Custom Status Bar */}
      <CustomStatusBar />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 64,
          paddingHorizontal: 24,
          marginTop: 44,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "400",
            color: "#303030",
            fontFamily: "Inter",
            textAlign: "center",
          }}
        >
          Calendar
        </Text>
      </View>

      {/* Calendar Header with Month/Year Selector */}
      <CalendarHeader
        selectedMonth={currentMonthName}
        onMonthChange={handleMonthChange}
        loading={loading}
      />

      {/* Days of Week Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          paddingHorizontal: 24,
          marginBottom: 8,
        }}
      >
        {["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <View
            key={day}
            style={{
              width: 48,
              height: 28,
              backgroundColor: "#EAEAEA",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#303030",
                fontFamily: "Inter",
                lineHeight: 20,
              }}
            >
              {day}
            </Text>
          </View>
        ))}
      </View>

      {/* Loading Indicator for Calendar */}
      {loading && !refreshing && (
        <View style={{ padding: 20, alignItems: "center" }}>
          <ActivityIndicator size="small" color="#303030" />
        </View>
      )}

      {/* Calendar Grid */}
      {calendar && (
        <View style={{ paddingHorizontal: 24, marginBottom: 35 }}>
          <CalendarGrid
            calendar={calendar}
            selectedDate={selectedDate}
            onDatePress={handleDatePress}
            loading={loading}
          />
        </View>
      )}

      {/* File List */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 25 }}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            colors={["#303030"]}
            tintColor="#303030"
          />
        }
      >
        {loading && !refreshing ? (
          <View style={{ padding: 40, alignItems: "center" }}>
            <ActivityIndicator size="large" color="#303030" />
            <Text style={{ marginTop: 10, color: "#747474", fontSize: 14 }}>
              Loading files...
            </Text>
          </View>
        ) : files.length > 0 ? (
          <View style={{ gap: 19 }}>
            {files.map((file) => (
              <FileListItem
                key={file._id}
                file={file}
                onMenuPress={handleFileMenuPress}
                onFilePress={onFilePress}
              />
            ))}
          </View>
        ) : (
          <EmptyState
            selectedDate={selectedDate}
            hasSelectedDate={!!selectedDate}
          />
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <View
        style={{
          position: "absolute",
          bottom: 118,
          left: 168,
          width: 56,
          height: 56,
        }}
      >
        <TouchableOpacity
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            borderWidth: 1,
            borderColor: "#EAEAEA",
            backgroundColor: "#FFF",
            padding: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <Path
              d="M14 24L34 24M24 34L24 14"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="calendar" onTabPress={onTabPress} />
    </SafeAreaView>
  );
};
