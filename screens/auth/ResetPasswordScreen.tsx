import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TextInput } from "../../components/ui/TextInput";
import { Button } from "../../components/ui/Button";

interface ResetPasswordScreenProps {
  onResetPassword: (newPassword: string) => void;
}

export const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  onResetPassword,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    if (!newPassword.trim()) {
      alert("Please enter a new password");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onResetPassword(newPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 123,
          }}
        >
          {/* Header */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 75,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: "500",
                color: "#303030",
                textAlign: "center",
                marginBottom: 7,
              }}
            >
              Reset Your Password.
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter",
                color: "#595959",
                textAlign: "center",
                lineHeight: 24,
              }}
            >
              Please enter your email to reset{"\n"}your password.
            </Text>
          </View>

          {/* Password Inputs */}
          <View style={{ marginBottom: 27 }}>
            <View style={{ gap: 24 }}>
              <TextInput
                placeholder="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                isPassword
              />
              <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                isPassword
              />
            </View>
          </View>

          {/* Reset Password Button */}
          <Button
            title="Reset Password"
            onPress={handleResetPassword}
            containerStyle={{ marginBottom: 50 }}
          />
        </View>
      </KeyboardAvoidingView>

      {/* Bottom Bar */}
      <View
        style={{
          height: 20,
          backgroundColor: "#FFF",
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          paddingHorizontal: 10,
          paddingBottom: 10,
          justifyContent: "flex-end",
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
    </SafeAreaView>
  );
};
