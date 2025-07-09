import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { DeleteConfirmationModal } from "../components/ui/DeleteConfirmationModal";

interface FileItem {
  id: string;
  name: string;
  type: "image" | "pdf" | "note";
  date: string;
}

interface FolderContentsScreenProps {
  folderId: string;
  folderName: string;
  onBackPress: () => void;
  onItemPress?: (item: FileItem) => void;
}

export const FolderContentsScreen: React.FC<FolderContentsScreenProps> = ({
  folderId,
  folderName,
  onBackPress,
  onItemPress,
}) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);

  // Mock data - replace with actual data fetching
  const [files, setFiles] = useState<FileItem[]>([
    { id: "1", name: "image.123", type: "image", date: "Jan 18, 2025" },
    { id: "2", name: "image.123", type: "image", date: "Jan 18, 2025" },
    { id: "3", name: "image.123", type: "image", date: "Jan 18, 2025" },
    { id: "4", name: "image.123", type: "image", date: "Jan 18, 2025" },
    { id: "5", name: "document.1", type: "pdf", date: "Jan 18, 2025" },
    { id: "6", name: "image.123", type: "image", date: "Jan 18, 2025" },
    { id: "7", name: "image.123", type: "image", date: "Jan 18, 2025" },
  ]);

  const handleMorePress = (item: FileItem) => {
    setSelectedItem(item);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedItem) {
      setFiles(files.filter((file) => file.id !== selectedItem.id));
      setDeleteModalVisible(false);
      setSelectedItem(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
    setSelectedItem(null);
  };

  const handleAddPress = () => {
    Alert.alert("Add File", "Add file functionality would be implemented here");
  };

  const renderFileIcon = (type: string) => {
    if (type === "pdf") {
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <Path
            d="M20.6297 6.62812V21.1078C20.6297 22.7062 19.336 24 17.7375 24H6.26255C4.66411 24 3.37036 22.7062 3.37036 21.1078V2.89219C3.37036 1.29375 4.66411 0 6.26255 0H14.0016L20.6297 6.62812Z"
            fill="#F15642"
          />
          <Path
            d="M20.6298 6.62812H15.197C14.5361 6.62812 14.0017 6.09375 14.0017 5.43281V0L20.6298 6.62812Z"
            fill="#FF9587"
          />
          <Path
            d="M10.2141 12.9374C10.2141 13.9358 9.68442 14.489 8.75161 14.489H8.17974V16.1624H7.49536V11.3999H8.75161C9.68442 11.3999 10.2141 11.9671 10.2141 12.9374ZM9.51099 12.9374C9.51099 12.3515 9.25786 12.0515 8.74224 12.0515H8.17974V13.8327H8.74224C9.26255 13.8374 9.51099 13.5515 9.51099 12.9374ZM10.7954 11.3999H11.9766C12.9 11.3999 13.4438 11.9437 13.4438 12.8812V14.6624C13.4438 15.6046 12.9 16.1577 11.9813 16.1577H10.7907V11.3999H10.7954ZM11.986 15.5062C12.4735 15.5062 12.7547 15.2155 12.7547 14.6483V12.8952C12.7547 12.3374 12.4829 12.0515 11.986 12.0515H11.4844V15.5062H11.986ZM14.9485 12.0468V13.4671H16.3829V14.0905H14.9485V16.1577H14.2641V11.3999H16.5094V12.0468H14.9485Z"
            fill="white"
          />
        </Svg>
      );
    } else {
      return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <G clipPath="url(#clip0_1_1612)">
            <Path
              d="M6.24954 17.5466C4.64862 17.5466 3.22462 16.5216 2.70748 14.9956L2.67251 14.8806C2.55054 14.4764 2.49944 14.1366 2.49944 13.7966V6.97827L0.0734135 15.0765C-0.238594 16.2676 0.472424 17.5025 1.66538 17.8316L17.1289 21.9728C17.317 22.0218 17.5105 22.0466 17.7049 22.0468C18.7008 22.0468 19.6109 21.3858 19.866 20.4116L20.7669 17.5466H6.24954Z"
              fill="#ECEFF1"
            />
            <Path
              d="M24.0001 2.2962V13.7966C24.0001 15.0366 22.99 16.0467 21.75 16.0467H6.24957C6.14958 16.0467 6.04964 16.0366 5.95955 16.0265C4.90957 15.8967 4.08965 15.0366 4.00959 13.9766C3.99951 13.9166 3.99951 13.8565 3.99951 13.7966V2.2962C3.99951 1.05618 5.00955 0.0461426 6.24957 0.0461426H21.75C22.99 0.0461426 24.0001 1.05618 24.0001 2.2962Z"
              fill="#ECEFF1"
            />
            <Path
              d="M10.9995 5.04626C10.9995 6.1508 10.1042 7.04637 8.99962 7.04637C7.89494 7.04637 6.99951 6.1508 6.99951 5.04626C6.99951 3.94171 7.89494 3.04614 8.99962 3.04614C10.1042 3.04614 10.9995 3.94176 10.9995 5.04626Z"
              fill="#FFC107"
            />
            <Path
              d="M24 10.9864V13.7966C24 15.0366 22.99 16.0467 21.75 16.0467H6.2495C6.14951 16.0467 6.04957 16.0366 5.95947 16.0265L16.2598 5.72637C16.9398 5.04629 18.0598 5.04629 18.7398 5.72637L24 10.9864Z"
              fill="#388E3C"
            />
            <Path
              d="M18.0598 16.0468H6.2495C6.14956 16.0468 6.04957 16.0367 5.95948 16.0266C4.9095 15.8968 4.08959 15.0367 4.00952 13.9767L8.75958 9.22647C9.43966 8.54658 10.5596 8.54658 11.2396 9.22647L18.0598 16.0468Z"
              fill="#4CAF50"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_1_1612">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    }
  };

  const renderMoreIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z"
        stroke="#303030"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
        stroke="#303030"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z"
        stroke="#303030"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* Status Bar */}
      <View
        style={{
          width: "100%",
          height: 44,
          paddingHorizontal: 24,
          paddingTop: 13,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#181818",
            fontFamily: "Prompt",
          }}
        >
          5:13
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          {/* Mobile Signal */}
          <Svg width={17} height={12} viewBox="0 0 18 12" fill="none">
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

          {/* WiFi */}
          <Svg width={16} height={11} viewBox="0 0 17 11" fill="none">
            <Path
              d="M6.2461 8.2905C7.59261 7.1513 9.56458 7.15139 10.9111 8.2905C10.9788 8.35175 11.0186 8.43847 11.0205 8.52976C11.0224 8.62112 10.9861 8.70891 10.9209 8.77292L8.81251 10.9018C8.75078 10.9643 8.66691 11.0004 8.57911 11.0005C8.49118 11.0005 8.40655 10.9644 8.34473 10.9018L6.23536 8.77292C6.1705 8.70891 6.1348 8.6209 6.13673 8.52976C6.13869 8.43844 6.17833 8.35172 6.2461 8.2905ZM3.39551 5.74265C6.2968 3.04291 10.7902 3.04282 13.6914 5.74265C13.7568 5.80585 13.7939 5.89293 13.7949 5.98386C13.7959 6.07496 13.7605 6.16337 13.6963 6.228L12.4766 7.45945C12.351 7.58519 12.1484 7.58857 12.0195 7.46628C11.0668 6.6032 9.8273 6.12441 8.542 6.12449C7.25756 6.12503 6.01948 6.60378 5.06739 7.46628C4.93853 7.58875 4.73499 7.58526 4.60938 7.45945L3.39063 6.228C3.32642 6.16357 3.29126 6.0758 3.292 5.98484C3.29286 5.8937 3.32998 5.80596 3.39551 5.74265ZM0.547858 3.19968C4.99771 -1.06659 12.0179 -1.06653 16.4678 3.19968C16.5322 3.26306 16.5688 3.34953 16.5693 3.43991C16.5699 3.53026 16.5343 3.617 16.4707 3.68113L15.25 4.91355C15.1243 5.03969 14.9206 5.04159 14.793 4.91745C13.0976 3.30495 10.8471 2.40486 8.50782 2.40476C6.16843 2.40487 3.91817 3.30495 2.22266 4.91745C2.09508 5.04171 1.89117 5.03995 1.76563 4.91355L0.544929 3.68113C0.481331 3.61696 0.445718 3.53027 0.446296 3.43991C0.44689 3.34954 0.483414 3.26301 0.547858 3.19968Z"
              fill="#181818"
            />
          </Svg>

          {/* Battery */}
          <Svg width={24} height={13} viewBox="0 0 25 13" fill="none">
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
              d="M23.4775 4.80762V8.86564C24.2885 8.52195 24.8158 7.72243 24.8158 6.83663C24.8158 5.95083 24.2885 5.15131 23.4775 4.80762Z"
              fill="#181818"
            />
          </Svg>
        </View>
      </View>

      {/* Header */}
      <View
        style={{
          width: "100%",
          height: 64,
          paddingHorizontal: 24,
          paddingVertical: 10,
          backgroundColor: "rgba(255, 255, 255, 0.50)",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            {/* Back Button */}
            <TouchableOpacity onPress={onBackPress}>
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <G clipPath="url(#clip0_3_778)">
                  <Path
                    d="M13.8299 19C13.6805 19.0005 13.5329 18.9676 13.3979 18.9035C13.263 18.8395 13.144 18.7461 13.0499 18.63L8.21992 12.63C8.07284 12.4511 7.99243 12.2267 7.99243 11.995C7.99243 11.7634 8.07284 11.539 8.21992 11.36L13.2199 5.36003C13.3897 5.15581 13.6336 5.02739 13.898 5.00301C14.1624 4.97863 14.4257 5.06029 14.6299 5.23003C14.8341 5.39977 14.9626 5.64368 14.9869 5.90811C15.0113 6.17253 14.9297 6.43581 14.7599 6.64003L10.2899 12L14.6099 17.36C14.7322 17.5068 14.8099 17.6856 14.8338 17.8751C14.8576 18.0647 14.8267 18.2571 14.7447 18.4296C14.6626 18.6021 14.5328 18.7475 14.3707 18.8486C14.2086 18.9497 14.021 19.0023 13.8299 19Z"
                    fill="#262626"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_3_778">
                    <Rect width="24" height="24" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </TouchableOpacity>

            {/* Folder Name */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#303030",
                fontFamily: "Inter",
                lineHeight: 30,
              }}
            >
              {folderName}
            </Text>
          </View>
        </View>
      </View>

      {/* File List */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 30 }}>
        <View style={{ gap: 19 }}>
          {files.map((file) => (
            <View
              key={file.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  flex: 1,
                }}
              >
                {renderFileIcon(file.type)}

                <View style={{ flex: 1, gap: 1 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#303030",
                      fontFamily: "Archivo",
                      lineHeight: 20,
                    }}
                  >
                    {file.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: "400",
                      color: "#747474",
                      fontFamily: "Archivo",
                      lineHeight: 20,
                    }}
                  >
                    {file.date}
                  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => handleMorePress(file)}>
                {renderMoreIcon()}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={handleAddPress}
        style={{
          position: "absolute",
          right: 24,
          bottom: 100,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: "#F6F6F6",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
          <Path
            d="M14 24L34 24M24 34L24 14"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Bottom Bar */}
      <View
        style={{
          width: "100%",
          height: 20,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 0,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          justifyContent: "center",
          alignItems: "center",
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

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        visible={deleteModalVisible}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        itemType={selectedItem?.type}
      />
    </View>
  );
};
