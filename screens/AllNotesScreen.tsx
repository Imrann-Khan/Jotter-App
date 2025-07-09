import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "../components/ui";
import { ItemListRow } from "../components/ui/ItemListRow";
import { FloatingActionButton } from "../components/ui/FloatingActionButton";
import { NoteIcon, BackIcon, SearchIcon } from "../components/ui/FileIcons";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const BatteryIcon = () => (
  <Svg width="25" height="13" viewBox="0 0 25 13" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.630737 4C0.630737 1.79086 2.4216 0 4.63074 0H18.4837C20.6929 0 22.4837 1.79086 22.4837 4V9C22.4837 11.2091 20.6929 13 18.4837 13H4.63074C2.4216 13 0.630737 11.2091 0.630737 9V4Z"
      fill="#181818"
    />
    <Path
      d="M0.630737 4C0.630737 1.79086 2.4216 0 4.63074 0H16.5238V13H4.63073C2.4216 13 0.630737 11.2091 0.630737 9V4Z"
      fill="#181818"
    />
    <Path
      d="M23.4773 4.80762V8.86564C24.2882 8.52195 24.8156 7.72243 24.8156 6.83663C24.8156 5.95083 24.2882 5.15131 23.4773 4.80762Z"
      fill="#181818"
    />
  </Svg>
);

const WifiIcon = () => (
  <Svg width="17" height="11" viewBox="0 0 17 11" fill="none">
    <Path
      d="M6.24598 8.2905C7.59249 7.1513 9.56446 7.15139 10.911 8.2905C10.9787 8.35175 11.0185 8.43847 11.0204 8.52976C11.0223 8.62112 10.986 8.70891 10.9208 8.77292L8.81238 10.9018C8.75066 10.9643 8.66679 11.0004 8.57899 11.0005C8.49106 11.0005 8.40642 10.9644 8.34461 10.9018L6.23524 8.77292C6.17038 8.70891 6.13468 8.6209 6.1366 8.52976C6.13857 8.43844 6.17821 8.35172 6.24598 8.2905ZM3.39539 5.74265C6.29668 3.04291 10.7901 3.04282 13.6913 5.74265C13.7567 5.80585 13.7938 5.89293 13.7948 5.98386C13.7957 6.07496 13.7604 6.16337 13.6962 6.228L12.4764 7.45945C12.3509 7.58519 12.1483 7.58857 12.0194 7.46628C11.0667 6.6032 9.82718 6.12441 8.54188 6.12449C7.25744 6.12503 6.01936 6.60378 5.06727 7.46628C4.9384 7.58875 4.73487 7.58526 4.60926 7.45945L3.39051 6.228C3.3263 6.16357 3.29114 6.0758 3.29188 5.98484C3.29274 5.8937 3.32986 5.80596 3.39539 5.74265ZM0.547736 3.19968C4.99759 -1.06659 12.0178 -1.06653 16.4677 3.19968C16.5321 3.26306 16.5687 3.34953 16.5692 3.43991C16.5697 3.53026 16.5342 3.617 16.4706 3.68113L15.2499 4.91355C15.1242 5.03969 14.9205 5.04159 14.7929 4.91745C13.0975 3.30495 10.847 2.40486 8.5077 2.40476C6.16831 2.40487 3.91805 3.30495 2.22254 4.91745C2.09496 5.04171 1.89105 5.03995 1.76551 4.91355L0.544807 3.68113C0.481209 3.61696 0.445596 3.53027 0.446174 3.43991C0.446768 3.34954 0.483292 3.26301 0.547736 3.19968Z"
      fill="#181818"
    />
  </Svg>
);

const MobileSignalIcon = () => (
  <Svg width="18" height="12" viewBox="0 0 18 12" fill="none">
    <Path
      d="M9.771 3C9.771 2.44772 10.1971 2 10.7227 2H11.6744C12.2 2 12.6261 2.44772 12.6261 3V11C12.6261 11.5523 12.2 12 11.6744 12H10.7227C10.1971 12 9.771 11.5523 9.771 11V3Z"
      fill="#181818"
    />
    <Path
      d="M14.5295 1C14.5295 0.447715 14.9556 0 15.4813 0H16.433C16.9586 0 17.3847 0.447715 17.3847 1V11C17.3847 11.5523 16.9586 12 16.433 12H15.4813C14.9556 12 14.5295 11.5523 14.5295 11V1Z"
      fill="#181818"
    />
    <Path
      d="M5.01245 6.5C5.01245 5.94772 5.43855 5.5 5.96416 5.5H6.91587C7.44149 5.5 7.86758 5.94772 7.86758 6.5V11C7.86758 11.5523 7.44149 12 6.91587 12H5.96416C5.43855 12 5.01245 11.5523 5.01245 11V6.5Z"
      fill="#181818"
    />
    <Path
      d="M0.253906 9C0.253906 8.44772 0.680001 8 1.20562 8H2.15733C2.68294 8 3.10903 8.44772 3.10903 9V11C3.10903 11.5523 2.68294 12 2.15733 12H1.20562C0.680001 12 0.253906 11.5523 0.253906 11V9Z"
      fill="#181818"
    />
  </Svg>
);

interface AllNotesScreenProps {
  onBackPress?: () => void;
}

export const AllNotesScreen: React.FC<AllNotesScreenProps> = ({
  onBackPress,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const notes = [
    { id: 1, name: "Note 1", date: "Jan 18, 2025" },
    { id: 2, name: "Note 2", date: "Jan 18, 2025" },
    { id: 3, name: "Note3", date: "Jan 18, 2025" },
    { id: 4, name: "Note 4", date: "Jan 18, 2025" },
    { id: 5, name: "Note bd", date: "Jan 18, 2025" },
    { id: 6, name: "Note bd", date: "Jan 18, 2025" },
    { id: 7, name: "Note bd", date: "Jan 18, 2025" },
  ];

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    }
  };

  const handleAddPress = () => {
    // Handle add new note
    console.log("Add note pressed");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      {/* Status Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingTop: 15,
          paddingBottom: 15,
          height: 44,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Prompt",
            fontWeight: "400",
            color: "#181818",
          }}
        >
          5:13
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View style={{ marginRight: 5 }}>
            <MobileSignalIcon />
          </View>
          <View style={{ marginRight: 5 }}>
            <WifiIcon />
          </View>
          <BatteryIcon />
        </View>
      </View>

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
          paddingVertical: 10,
          backgroundColor: "rgba(255, 255, 255, 0.50)",
          height: 64,
        }}
      >
        <TouchableOpacity
          onPress={handleBackPress}
          style={{ marginRight: 110 }}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "500",
            color: "#303030",
            flex: 1,
          }}
        >
          All Notes
        </Text>
      </View>

      {/* Search Bar */}
      <View style={{ paddingHorizontal: 24, paddingVertical: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 42,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#EAEAEA",
            backgroundColor: "#FFF",
            paddingHorizontal: 12,
            gap: 8,
          }}
        >
          <SearchIcon />
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: "500",
              color: "#747474",
              lineHeight: 20,
            }}
          >
            Search here
          </Text>
        </View>
      </View>

      {/* Notes List */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 120,
          gap: 19,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notes.map((note) => (
          <ItemListRow
            key={note.id}
            icon={<NoteIcon />}
            title={note.name}
            date={note.date}
            onPress={() => console.log(`Note ${note.name} pressed`)}
            onMenuPress={() => console.log(`Menu for ${note.name} pressed`)}
          />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton onPress={handleAddPress} />

      {/* iPhone Bottom Bar */}
      <View
        style={{
          height: 20,
          paddingHorizontal: 10,
          paddingTop: 5,
          paddingBottom: 10,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      >
        <View
          style={{
            width: 150,
            height: 4,
            borderRadius: 16,
            backgroundColor: "#545454",
          }}
        />
      </View>
    </SafeAreaView>
  );
};
