import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HomeIcon, BookmarkIcon, CalendarIcon, ProfileIcon } from "./Icons";

interface TabItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const TabItem: React.FC<TabItemProps> = ({
  icon,
  label,
  isActive,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 68,
        gap: 4,
      }}
    >
      <View
        style={{
          width: 52,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {icon}
        {isActive && label === "Home" && (
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              fontSize: 12,
              color: "#303030",
              fontFamily: "System",
              fontWeight: "400",
              lineHeight: 20,
            }}
          >
            {label}
          </Text>
        )}
      </View>

      {isActive && (
        <View
          style={{
            height: 4,
            width: "100%",
            borderRadius: 5,
            backgroundColor: "#303030",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

interface BottomNavigationProps {
  activeTab: "home" | "bookmark" | "calendar" | "profile";
  onTabPress?: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress = () => {},
}) => {
  const tabs = [
    { id: "home", icon: <HomeIcon />, label: "Home" },
    { id: "bookmark", icon: <BookmarkIcon />, label: "Bookmark" },
    { id: "calendar", icon: <CalendarIcon />, label: "Calendar" },
    { id: "profile", icon: <ProfileIcon />, label: "Profile" },
  ];

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 26,
      }}
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          icon={tab.icon}
          label={tab.label}
          isActive={activeTab === tab.id}
          onPress={() => onTabPress(tab.id)}
        />
      ))}
    </View>
  );
};
