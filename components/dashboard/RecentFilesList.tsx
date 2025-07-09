import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  ImageIcon,
  FolderIcon,
  NoteIcon,
  PDFIcon,
  MoreVerticalIcon,
} from "./Icons";

interface FileItemProps {
  icon: React.ReactNode;
  name: string;
  date: string;
  onMenuPress: (position: { x: number; y: number }) => void;
}

const FileItem: React.FC<FileItemProps> = ({
  icon,
  name,
  date,
  onMenuPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          gap: 10,
        }}
      >
        {icon}
        <View style={{ flex: 1, gap: 1 }}>
          <Text
            style={{
              fontSize: 12,
              color: "#303030",
              fontFamily: "System",
              fontWeight: "500",
              lineHeight: 20,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 8,
              color: "#747474",
              fontFamily: "System",
              fontWeight: "300",
              lineHeight: 20,
            }}
          >
            {date}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={(event) => {
          const { pageX, pageY } = event.nativeEvent;
          onMenuPress({ x: pageX, y: pageY });
        }}
        style={{ padding: 4 }}
      >
        <MoreVerticalIcon />
      </TouchableOpacity>
    </View>
  );
};

interface RecentFilesListProps {
  onFileMenuPress: (
    fileName: string,
    position: { x: number; y: number },
  ) => void;
}

export const RecentFilesList: React.FC<RecentFilesListProps> = ({
  onFileMenuPress,
}) => {
  const recentFiles = [
    {
      icon: <ImageIcon />,
      name: "image.123",
      date: "Jan 18, 2025",
    },
    {
      icon: <FolderIcon />,
      name: "Folder.1",
      date: "Jan 18, 2025",
    },
    {
      icon: <NoteIcon />,
      name: "Note bd",
      date: "Jan 18, 2025",
    },
    {
      icon: <PDFIcon />,
      name: "pdf.1",
      date: "Jan 18, 2025",
    },
  ];

  return (
    <View style={{ gap: 16 }}>
      <Text
        style={{
          fontSize: 20,
          color: "#303030",
          fontFamily: "System",
          fontWeight: "500",
          lineHeight: 28,
        }}
      >
        Recent
      </Text>

      <View style={{ gap: 19 }}>
        {recentFiles.map((file, index) => (
          <FileItem
            key={index}
            icon={file.icon}
            name={file.name}
            date={file.date}
            onMenuPress={(position) => onFileMenuPress(file.name, position)}
          />
        ))}
      </View>
    </View>
  );
};
