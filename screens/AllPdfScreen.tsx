import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "../components/ui";
import { ItemListRow } from "../components/ui/ItemListRow";
import { FloatingActionButton } from "../components/ui/FloatingActionButton";
import { PDFIcon, BackIcon, SearchIcon } from "../components/ui/FileIcons";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const BatteryIcon = () => (
  <Svg width="25" height="13" viewBox="0 0 25 13" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.630859 4C0.630859 1.79086 2.42172 0 4.63086 0H18.4838C20.693 0 22.4839 1.79086 22.4839 4V9C22.4839 11.2091 20.693 13 18.4839 13H4.63086C2.42173 13 0.630859 11.2091 0.630859 9V4Z"
      fill="#181818"
    />
    <Path
      d="M0.630859 4C0.630859 1.79086 2.42172 0 4.63086 0H16.5239V13H4.63086C2.42172 13 0.630859 11.2091 0.630859 9V4Z"
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
      d="M6.2461 8.2905C7.59261 7.1513 9.56458 7.15139 10.9111 8.2905C10.9788 8.35175 11.0186 8.43847 11.0205 8.52976C11.0224 8.62112 10.9861 8.70891 10.9209 8.77292L8.81251 10.9018C8.75078 10.9643 8.66691 11.0004 8.57911 11.0005C8.49118 11.0005 8.40655 10.9644 8.34473 10.9018L6.23536 8.77292C6.1705 8.70891 6.1348 8.6209 6.13673 8.52976C6.13869 8.43844 6.17833 8.35172 6.2461 8.2905ZM3.39551 5.74265C6.2968 3.04291 10.7902 3.04282 13.6914 5.74265C13.7568 5.80585 13.7939 5.89293 13.7949 5.98386C13.7959 6.07496 13.7605 6.16337 13.6963 6.228L12.4766 7.45945C12.351 7.58519 12.1484 7.58857 12.0195 7.46628C11.0668 6.6032 9.8273 6.12441 8.542 6.12449C7.25756 6.12503 6.01948 6.60378 5.06739 7.46628C4.93853 7.58875 4.73499 7.58526 4.60938 7.45945L3.39063 6.228C3.32642 6.16357 3.29126 6.0758 3.292 5.98484C3.29286 5.8937 3.32998 5.80596 3.39551 5.74265ZM0.547858 3.19968C4.99771 -1.06659 12.0179 -1.06653 16.4678 3.19968C16.5322 3.26306 16.5688 3.34953 16.5693 3.43991C16.5699 3.53026 16.5343 3.617 16.4707 3.68113L15.25 4.91355C15.1243 5.03969 14.9206 5.04159 14.793 4.91745C13.0976 3.30495 10.8471 2.40486 8.50782 2.40476C6.16843 2.40487 3.91817 3.30495 2.22266 4.91745C2.09508 5.04171 1.89117 5.03995 1.76563 4.91355L0.544929 3.68113C0.481331 3.61696 0.445718 3.53027 0.446296 3.43991C0.44689 3.34954 0.483414 3.26301 0.547858 3.19968Z"
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

interface AllPdfScreenProps {
  onBackPress?: () => void;
}

export const AllPdfScreen: React.FC<AllPdfScreenProps> = ({ onBackPress }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const pdfs = [
    { id: 1, name: "pdf.1", date: "Jan 18, 2025" },
    { id: 2, name: "pdf.2", date: "Jan 18, 2025" },
    { id: 3, name: "pdf.3", date: "Jan 18, 2025" },
    { id: 4, name: "pdf.1", date: "Jan 13, 2025" },
    { id: 5, name: "pdf.1", date: "Jan 13, 2025" },
    { id: 6, name: "pdf.1", date: "Jan 12, 2025" },
    { id: 7, name: "pdf.1", date: "Jan 11, 2025" },
  ];

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    }
  };

  const handleAddPress = () => {
    // Handle add new pdf
    console.log("Add pdf pressed");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
          All pdf
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

      {/* PDFs List */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: 120,
          gap: 19,
        }}
        showsVerticalScrollIndicator={false}
      >
        {pdfs.map((pdf) => (
          <ItemListRow
            key={pdf.id}
            icon={<PDFIcon />}
            title={pdf.name}
            date={pdf.date}
            onPress={() => console.log(`PDF ${pdf.name} pressed`)}
            onMenuPress={() => console.log(`Menu for ${pdf.name} pressed`)}
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
