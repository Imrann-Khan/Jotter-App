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
import { BackIcon, SearchIcon } from "../components/ui/FileIcons";
import {
  LockIcon,
  StatusBar as CustomStatusBar,
} from "../components/dashboard";

interface HiddenItem {
  id: string;
  name: string;
  type: "note" | "pdf" | "image" | "folder";
  size?: string;
  date: string;
  isHidden: boolean;
}

interface HiddenItemsScreenProps {
  onBackPress?: () => void;
  onItemPress?: (item: HiddenItem) => void;
  onHideItem?: (itemId: string) => void;
  onUnhideItem?: (itemId: string) => void;
}

export const HiddenItemsScreen: React.FC<HiddenItemsScreenProps> = ({
  onBackPress,
  onItemPress,
  onHideItem,
  onUnhideItem,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Sample hidden items data with realistic content
  const [hiddenItems] = useState<HiddenItem[]>([
    {
      id: "1",
      name: "Personal Journal 2024.txt",
      type: "note",
      size: "3.2 KB",
      date: "Today",
      isHidden: true,
    },
    {
      id: "2",
      name: "Banking Statements.pdf",
      type: "pdf",
      size: "1.8 MB",
      date: "Today",
      isHidden: true,
    },
    {
      id: "3",
      name: "Family Vacation Photo.jpg",
      type: "image",
      size: "2.4 MB",
      date: "Yesterday",
      isHidden: true,
    },
    {
      id: "4",
      name: "Private Documents",
      type: "folder",
      date: "Yesterday",
      isHidden: true,
    },
    {
      id: "5",
      name: "Meeting Notes - Confidential.txt",
      type: "note",
      size: "1.7 KB",
      date: "2 days ago",
      isHidden: true,
    },
    {
      id: "6",
      name: "Tax Returns 2023.pdf",
      type: "pdf",
      size: "892 KB",
      date: "3 days ago",
      isHidden: true,
    },
    {
      id: "7",
      name: "Screenshot_password.png",
      type: "image",
      size: "156 KB",
      date: "1 week ago",
      isHidden: true,
    },
    {
      id: "8",
      name: "Sensitive Files",
      type: "folder",
      date: "1 week ago",
      isHidden: true,
    },
    {
      id: "9",
      name: "Ideas & Thoughts.txt",
      type: "note",
      size: "912 B",
      date: "2 weeks ago",
      isHidden: true,
    },
    {
      id: "10",
      name: "Medical Records.pdf",
      type: "pdf",
      size: "3.1 MB",
      date: "2 weeks ago",
      isHidden: true,
    },
    {
      id: "11",
      name: "Private Photo Album.jpg",
      type: "image",
      size: "4.2 MB",
      date: "3 weeks ago",
      isHidden: true,
    },
    {
      id: "12",
      name: "Financial Planning",
      type: "folder",
      date: "1 month ago",
      isHidden: true,
    },
  ]);

  const filteredItems = hiddenItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleItemPress = (item: HiddenItem) => {
    onItemPress?.(item);
  };

  const handleItemMenuPress = (itemId: string, action: string) => {
    const item = hiddenItems.find((i) => i.id === itemId);
    if (!item) return;

    switch (action) {
      case "unhide":
        onUnhideItem?.(itemId);
        break;
      case "delete":
        // Handle delete action
        break;
      default:
        break;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <SafeAreaView style={{ flex: 1 }}>
        <CustomStatusBar />

        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 24,
            paddingVertical: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <TouchableOpacity onPress={onBackPress}>
              <BackIcon />
            </TouchableOpacity>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <LockIcon />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#181818",
                  fontFamily: "Inter",
                }}
              >
                Hidden Items
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
            <SearchIcon />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        {showSearch && (
          <View style={{ paddingHorizontal: 24, paddingBottom: 16 }}>
            <SearchBar
              placeholder="Search hidden items..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        )}

        {/* Content */}
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {filteredItems.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 100,
              }}
            >
              <LockIcon />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#747474",
                  fontFamily: "Inter",
                  textAlign: "center",
                  marginTop: 16,
                }}
              >
                {searchQuery ? "No hidden items found" : "No hidden items"}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#747474",
                  fontFamily: "Inter",
                  textAlign: "center",
                  marginTop: 8,
                  paddingHorizontal: 40,
                  lineHeight: 20,
                }}
              >
                {searchQuery
                  ? "Try adjusting your search terms"
                  : "Files you hide will appear here for extra privacy"}
              </Text>
            </View>
          ) : (
            <View style={{ paddingHorizontal: 24 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#747474",
                    fontFamily: "Inter",
                  }}
                >
                  {filteredItems.length} item
                  {filteredItems.length !== 1 ? "s" : ""}
                </Text>
              </View>

              {filteredItems.map((item) => (
                <ItemListRow
                  key={item.id}
                  title={item.name}
                  subtitle={
                    item.size ? `${item.size} • ${item.date}` : item.date
                  }
                  type={item.type}
                  onPress={() => handleItemPress(item)}
                  onMenuPress={(position) => {
                    // Show context menu with unhide option
                    handleItemMenuPress(item.id, "unhide");
                  }}
                  showMenuDots={true}
                />
              ))}
            </View>
          )}
        </ScrollView>

        {/* Floating Action Button */}
        <FloatingActionButton onPress={() => {}} />
      </SafeAreaView>
    </View>
  );
};
