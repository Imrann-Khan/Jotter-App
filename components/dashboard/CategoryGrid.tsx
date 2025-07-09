import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FolderIcon, NoteIcon, ImageIcon, PDFIcon } from "./Icons";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
}

interface CategoryGridProps {
  onNavigateToFolders?: () => void;
  onNavigateToNotes?: () => void;
  onNavigateToImages?: () => void;
  onNavigateToPdf?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 100,
        height: 88,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {icon}
        <Text
          style={{
            color: "#303030",
            fontSize: 14,
            fontFamily: "System",
            fontWeight: "500",
            lineHeight: 24,
            textAlign: "center",
            flex: 1,
            marginLeft: 8,
          }}
        >
          {title}
        </Text>
      </View>

      <View style={{ gap: 2 }}>
        <Text
          style={{
            fontSize: 10,
            color: "#303030",
            fontFamily: "System",
            fontWeight: "400",
            lineHeight: 20,
          }}
        >
          Total Item:15
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "#303030",
            fontFamily: "System",
            fontWeight: "400",
            lineHeight: 20,
          }}
        >
          Storage:5.30GB
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onNavigateToFolders,
  onNavigateToNotes,
  onNavigateToImages,
  onNavigateToPdf,
}) => {
  const categories = [
    {
      icon: <FolderIcon />,
      title: "Folder",
      onPress: onNavigateToFolders,
    },
    {
      icon: <NoteIcon />,
      title: "Note",
      onPress: onNavigateToNotes,
    },
    {
      icon: <ImageIcon />,
      title: "Images",
      onPress: onNavigateToImages,
    },
    {
      icon: <PDFIcon />,
      title: "PDF",
      onPress: onNavigateToPdf,
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 23,
        justifyContent: "space-between",
      }}
    >
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          icon={category.icon}
          title={category.title}
          onPress={category.onPress}
        />
      ))}
    </View>
  );
};
