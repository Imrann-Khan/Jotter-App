import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";
import { StatusBar as CustomStatusBar } from "../components/dashboard";

const ProfileIcon: React.FC = () => (
  <Svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    <Path
      d="M60 0.5C92.8614 0.5 119.5 27.1386 119.5 60C119.5 76.6481 112.663 91.6979 101.644 102.497H101.643C101.575 102.563 101.506 102.629 101.436 102.697L101.435 102.699C100.53 103.576 99.5991 104.426 98.6396 105.245H98.6387C96.7479 106.865 94.7535 108.366 92.668 109.738C83.2912 115.91 72.0652 119.5 60 119.5C47.9348 119.5 36.7088 115.91 27.332 109.738C25.2465 108.366 23.2521 106.865 21.3613 105.245H21.3604C20.4009 104.426 19.4696 103.576 18.5654 102.699L18.5645 102.697L18.3574 102.497H18.3564C7.33802 91.6978 0.5 76.648 0.5 60C0.500002 27.1386 27.1386 0.500002 60 0.5Z"
      fill="#E0E0E0"
      stroke="#747474"
    />
    <Path
      d="M101.565 101.651C100.654 102.535 99.7146 103.392 98.7468 104.219C96.8399 105.852 94.8284 107.365 92.7253 108.749C83.2694 114.973 71.9485 118.594 59.7826 118.594C47.6168 118.594 36.2958 114.973 26.8399 108.749C24.7369 107.365 22.7253 105.852 20.8185 104.219C19.8506 103.392 18.9116 102.535 18 101.651C20.2613 94.6437 25.791 88.9636 33.085 86.6618L50.8446 81.0536V78.1253C48.6186 76.803 46.6293 75.2911 44.9893 74.1833C41.938 72.1248 39.8846 68.8982 39.2778 65.2689L38.3309 59.6032C35.3646 59.6032 32.9673 57.2058 32.9673 54.2396C32.9673 52.0345 34.2909 50.1433 36.1899 49.3207C34.5315 45.4324 33.3152 41.3113 32.5841 37.0855C32.1198 34.4083 31.8582 31.5846 32.6443 29.0029C33.429 26.4211 35.5085 24.1559 37.9621 24.1114L38.2838 24.1337C39.8323 21.7154 42.2519 20.1224 44.7918 19.2017C47.3317 18.2796 50.0128 17.967 52.6691 17.661C53.7076 17.542 54.7512 17.4203 55.7975 17.3157C60.6223 16.8514 65.876 16.7389 70.8093 18.1122C75.7439 19.4868 80.5111 22.5681 83.0235 27.4805C85.0194 31.378 85.4235 36.0798 84.9213 40.5278C84.5891 43.4797 83.8815 46.3531 83.051 49.1899C85.1214 49.9315 86.598 51.9103 86.598 54.2396C86.598 57.2058 84.2032 59.6032 81.2344 59.6032L80.2875 65.2689C79.6806 68.8982 77.6286 72.1248 74.5773 74.1833C72.9346 75.2911 70.9479 76.803 68.7219 78.1253V81.0536L86.4802 86.6618C93.7756 88.9649 99.3053 94.645 101.568 101.651H101.565Z"
      fill="#9E9E9E"
    />
  </Svg>
);

const BackIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_3_6)">
      <Path
        d="M13.8299 19.0003C13.6805 19.0008 13.5329 18.9678 13.3979 18.9038C13.263 18.8398 13.144 18.7463 13.0499 18.6303L8.21992 12.6303C8.07284 12.4513 7.99243 12.2269 7.99243 11.9953C7.99243 11.7637 8.07284 11.5392 8.21992 11.3603L13.2199 5.36028C13.3897 5.15606 13.6336 5.02763 13.898 5.00325C14.1624 4.97888 14.4257 5.06054 14.6299 5.23028C14.8341 5.40001 14.9626 5.64393 14.9869 5.90835C15.0113 6.17278 14.9297 6.43606 14.7599 6.64028L10.2899 12.0003L14.6099 17.3603C14.7322 17.5071 14.8099 17.6858 14.8338 17.8753C14.8576 18.0649 14.8267 18.2573 14.7447 18.4299C14.6626 18.6024 14.5328 18.7478 14.3707 18.8489C14.2086 18.95 14.021 19.0025 13.8299 19.0003Z"
        fill="#262626"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_6">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const CameraIcon: React.FC = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M10 14.5833C11.0417 14.5833 11.9271 14.2188 12.6563 13.4896C13.3854 12.7604 13.75 11.875 13.75 10.8333C13.75 9.79167 13.3854 8.90625 12.6563 8.17708C11.9271 7.44792 11.0417 7.08333 10 7.08333C8.95835 7.08333 8.07294 7.44792 7.34377 8.17708C6.6146 8.90625 6.25002 9.79167 6.25002 10.8333C6.25002 11.875 6.6146 12.7604 7.34377 13.4896C8.07294 14.2188 8.95835 14.5833 10 14.5833ZM10 12.9167C9.41669 12.9167 8.92363 12.7153 8.52085 12.3125C8.11808 11.9097 7.91669 11.4167 7.91669 10.8333C7.91669 10.25 8.11808 9.75694 8.52085 9.35417C8.92363 8.95139 9.41669 8.75 10 8.75C10.5834 8.75 11.0764 8.95139 11.4792 9.35417C11.882 9.75694 12.0834 10.25 12.0834 10.8333C12.0834 11.4167 11.882 11.9097 11.4792 12.3125C11.0764 12.7153 10.5834 12.9167 10 12.9167ZM3.33335 17.5C2.87502 17.5 2.48266 17.3368 2.15627 17.0104C1.82988 16.684 1.66669 16.2917 1.66669 15.8333V5.83333C1.66669 5.375 1.82988 4.98264 2.15627 4.65625C2.48266 4.32986 2.87502 4.16667 3.33335 4.16667H5.95835L7.50002 2.5H12.5L14.0417 4.16667H16.6667C17.125 4.16667 17.5174 4.32986 17.8438 4.65625C18.1702 4.98264 18.3334 5.375 18.3334 5.83333V15.8333C18.3334 16.2917 18.1702 16.684 17.8438 17.0104C17.5174 17.3368 17.125 17.5 16.6667 17.5H3.33335ZM3.33335 15.8333H16.6667V5.83333H13.2917L11.7709 4.16667H8.22919L6.70835 5.83333H3.33335V15.8333Z"
      fill="#F5F9FE"
    />
  </Svg>
);

interface EditProfileScreenProps {
  onNavigate?: (screen: string) => void;
}

export const EditProfileScreen: React.FC<EditProfileScreenProps> = ({
  onNavigate,
}) => {
  const [userName, setUserName] = useState("Great");

  const handleBack = () => {
    onNavigate?.("Profile");
  };

  const handleSave = () => {
    // Handle save logic here
    onNavigate?.("Profile");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomStatusBar />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 24,
              paddingVertical: 20,
              gap: 53,
            }}
          >
            <TouchableOpacity onPress={handleBack}>
              <BackIcon />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                color: "#303030",
                fontFamily: "Inter",
                textAlign: "center",
                flex: 1,
                marginRight: 53,
              }}
            >
              Edit Profile
            </Text>
          </View>

          {/* Profile Avatar with Edit Button */}
          <View
            style={{ alignItems: "center", marginTop: 54, marginBottom: 89 }}
          >
            <View style={{ position: "relative" }}>
              <ProfileIcon />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: 7,
                  right: 7,
                  width: 32,
                  height: 32,
                  borderRadius: 32,
                  backgroundColor: "#4C5375",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CameraIcon />
              </TouchableOpacity>
            </View>
          </View>

          {/* User Name Input */}
          <View style={{ paddingHorizontal: 25, marginBottom: 340 }}>
            <View style={{ position: "relative" }}>
              {/* Input Field */}
              <View
                style={{
                  height: 50,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#303030",
                  backgroundColor: "#FFF",
                  paddingHorizontal: 16,
                  paddingTop: 13,
                  marginTop: 10,
                }}
              >
                <TextInput
                  value={userName}
                  onChangeText={setUserName}
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                    color: "#303030",
                    fontFamily: "Inter",
                    lineHeight: 24,
                    padding: 0,
                    margin: 0,
                  }}
                  placeholder="Enter your name"
                  placeholderTextColor="#555"
                />
              </View>

              {/* Label */}
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 9,
                  backgroundColor: "#FFF",
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "400",
                    color: "#000",
                    fontFamily: "Archivo",
                    lineHeight: 20,
                  }}
                >
                  User Name
                </Text>
              </View>
            </View>
          </View>

          {/* Save Button */}
          <View style={{ paddingHorizontal: 23, marginBottom: 30 }}>
            <TouchableOpacity
              onPress={handleSave}
              style={{
                height: 50,
                borderRadius: 100,
                backgroundColor: "#303030",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#FFF",
                  fontFamily: "Inter",
                }}
              >
                Save Change
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
