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
import { BackButton } from "../../components/ui/BackButton";

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onSendVerificationCode: (email: string) => void;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  onBack,
  onSendVerificationCode,
}) => {
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }
    onSendVerificationCode(email);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* App Bar */}
      <View
        style={{
          height: 64,
          paddingHorizontal: 24,
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: 44,
        }}
      >
        <BackButton onPress={onBack} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 59,
          }}
        >
          {/* Header */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 140,
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
              Forgot Your Password?
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

          {/* Email Input */}
          <View style={{ marginBottom: 36 }}>
            <TextInput
              placeholder="Email "
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Send Verification Code Button */}
          <Button
            title="Get Verification Code"
            onPress={handleSendCode}
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
