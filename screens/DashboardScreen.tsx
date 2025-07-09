import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  StorageCard,
  CategoryGrid,
  RecentFilesList,
  FloatingActionButton,
  ContextMenu,
  BottomNavigation,
  LockIcon,
  MenuIcon,
  StatusBar as CustomStatusBar,
} from "../components/dashboard";
import { SearchBar } from "../components/ui";

interface DashboardScreenProps {
  onNavigateToFolders?: () => void;
  onNavigateToNotes?: () => void;
  onNavigateToImages?: () => void;
  onNavigateToPdf?: () => void;
  onNavigateToHiddenItems?: () => void;
  onTabPress?: (tab: string) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onNavigateToFolders,
  onNavigateToNotes,
  onNavigateToImages,
  onNavigateToPdf,
  onNavigateToHiddenItems,
  onTabPress = () => {},
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileMenuPress = (
    fileName: string,
    position: { x: number; y: number },
  ) => {
    setSelectedFile(fileName);
    setContextMenuPosition(position);
    setIsContextMenuVisible(true);
  };

  const handleCloseContextMenu = () => {
    setIsContextMenuVisible(false);
    setSelectedFile(null);
  };

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
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingTop: 20,
          paddingBottom: 16,
        }}
      >
        {/* Jotter Logo */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "400",
              color: "#000000",
              fontFamily: "System",
            }}
          >
            Jotter
          </Text>
        </View>

        {/* Lock Icon */}
        <LockIcon onPress={onNavigateToHiddenItems} />
      </View>

      {/* Search Bar */}
      <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search here"
        />
      </View>

      {/* Menu Icon */}
      <View
        style={{
          position: "absolute",
          top: 121,
          right: 24,
          zIndex: 10,
        }}
      >
        <MenuIcon />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Storage Card */}
        <View style={{ paddingHorizontal: 24, marginBottom: 16 }}>
          <StorageCard />
        </View>

        {/* Category Grid */}
        <View style={{ paddingHorizontal: 24, marginBottom: 32 }}>
          <CategoryGrid
            onNavigateToFolders={onNavigateToFolders}
            onNavigateToNotes={onNavigateToNotes}
            onNavigateToImages={onNavigateToImages}
            onNavigateToPdf={onNavigateToPdf}
          />
        </View>

        {/* Recent Files */}
        <View style={{ paddingHorizontal: 24 }}>
          <RecentFilesList onFileMenuPress={handleFileMenuPress} />
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" onTabPress={onTabPress} />

      {/* Context Menu */}
      {isContextMenuVisible && (
        <ContextMenu
          visible={isContextMenuVisible}
          position={contextMenuPosition}
          onClose={handleCloseContextMenu}
          fileName={selectedFile}
        />
      )}
    </SafeAreaView>
  );
};
