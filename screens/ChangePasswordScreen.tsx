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
import Svg, { Path, G, ClipPath, Rect, Defs, Circle } from "react-native-svg";

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

const EyeIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M20.6191 10.9712L21.3831 10.326L20.6191 10.9712ZM20.6191 13.0288L21.3831 13.674L20.6191 13.0288ZM3.38088 10.9712L2.61691 10.326L3.38088 10.9712ZM3.38088 13.0288L4.14485 12.3835L3.38088 13.0288ZM3.38088 10.9712L4.14485 11.6165C6.00829 9.41021 8.83199 8 12 8V7V6C8.22766 6 4.85032 7.68167 2.61691 10.326L3.38088 10.9712ZM12 7V8C15.168 8 17.9917 9.41021 19.8552 11.6165L20.6191 10.9712L21.3831 10.326C19.1497 7.68167 15.7723 6 12 6V7ZM20.6191 13.0288L19.8552 12.3835C17.9917 14.5898 15.168 16 12 16V17V18C15.7723 18 19.1497 16.3183 21.3831 13.674L20.6191 13.0288ZM12 17V16C8.83199 16 6.00829 14.5898 4.14485 12.3835L3.38088 13.0288L2.61692 13.674C4.85032 16.3183 8.22766 18 12 18V17ZM20.6191 10.9712L19.8552 11.6165C20.0483 11.8451 20.0483 12.1549 19.8552 12.3835L20.6191 13.0288L21.3831 13.674C22.2056 12.7002 22.2056 11.2998 21.3831 10.326L20.6191 10.9712ZM3.38088 10.9712L2.61691 10.326C1.79436 11.2998 1.79436 12.7002 2.61692 13.674L3.38088 13.0288L4.14485 12.3835C3.95172 12.1549 3.95172 11.8451 4.14485 11.6165L3.38088 10.9712ZM14.0866 12H13.0866C13.0866 12.5128 12.6405 13 12 13V14V15C13.6643 15 15.0866 13.6964 15.0866 12H14.0866ZM12 14V13C11.3595 13 10.9134 12.5128 10.9134 12H9.91342H8.91342C8.91342 13.6964 10.3357 15 12 15V14ZM9.91342 12H10.9134C10.9134 11.4872 11.3595 11 12 11V10V9C10.3357 9 8.91342 10.3036 8.91342 12H9.91342ZM12 10V11C12.6405 11 13.0866 11.4872 13.0866 12H14.0866H15.0866C15.0866 10.3036 13.6643 9 12 9V10Z"
      fill="black"
    />
  </Svg>
);

const BottomBarIcon: React.FC = () => (
  <View
    style={{
      width: 150,
      height: 4,
      borderRadius: 16,
      backgroundColor: "#555",
    }}
  />
);

interface ChangePasswordScreenProps {
  onNavigate?: (screen: string) => void;
}

export const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({
  onNavigate,
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBack = () => {
    onNavigate?.("Settings");
  };

  const handleSave = () => {
    // Handle save logic here
    onNavigate?.("Settings");
  };

  const renderPasswordInput = (
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    label: string,
    showPassword: boolean,
    toggleShowPassword: () => void,
    isFirst?: boolean,
  ) => {
    return (
      <View style={{ position: "relative" }}>
        {/* Input Field */}
        <View
          style={{
            height: 50,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: isFirst ? "#303030" : "#EAEAEA",
            backgroundColor: isFirst ? "#FFF" : "#F6F6F6",
            paddingHorizontal: 16,
            paddingTop: isFirst ? 13 : 16,
            flexDirection: "row",
            alignItems: isFirst ? "flex-start" : "center",
            justifyContent: "space-between",
            marginTop: isFirst ? 10 : 0,
          }}
        >
          {isFirst && showPassword ? (
            <Svg width="115" height="10" viewBox="0 0 115 10" fill="none">
              <Circle cx="4.88562" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="19.9183" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="34.951" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="49.9838" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="65.0165" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="80.049" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="95.0817" cy="4.99988" r="4.88562" fill="#303030" />
              <Circle cx="110.114" cy="4.99988" r="4.88562" fill="#303030" />
            </Svg>
          ) : (
            <TextInput
              value={value}
              onChangeText={onChangeText}
              style={{
                fontSize: 14,
                fontWeight: "300",
                color: isFirst ? "#303030" : "#555",
                fontFamily: "Inter",
                lineHeight: 24,
                padding: 0,
                margin: 0,
                flex: 1,
              }}
              placeholder={placeholder}
              placeholderTextColor="#555"
              secureTextEntry={!showPassword}
            />
          )}
          <TouchableOpacity onPress={toggleShowPassword}>
            <EyeIcon />
          </TouchableOpacity>
        </View>

        {/* Label for first input only */}
        {isFirst && (
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
              {label}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: 30 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

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
                paddingHorizontal: 23,
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
                Change Password
              </Text>
            </View>

            {/* Password Inputs */}
            <View style={{ paddingHorizontal: 23, marginTop: 270, gap: 18 }}>
              {renderPasswordInput(
                currentPassword,
                setCurrentPassword,
                "Current Password",
                "Current Password",
                showCurrentPassword,
                () => setShowCurrentPassword(!showCurrentPassword),
                true,
              )}

              {renderPasswordInput(
                newPassword,
                setNewPassword,
                "New Password",
                "New Password",
                showNewPassword,
                () => setShowNewPassword(!showNewPassword),
              )}

              {renderPasswordInput(
                confirmPassword,
                setConfirmPassword,
                "Confirm Password",
                "Confirm Password",
                showConfirmPassword,
                () => setShowConfirmPassword(!showConfirmPassword),
              )}
            </View>

            {/* Save Button */}
            <View style={{ paddingHorizontal: 22, marginTop: 185 }}>
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

        {/* Bottom Bar */}
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }}
        >
          <BottomBarIcon />
        </View>
      </SafeAreaView>
    </View>
  );
};
