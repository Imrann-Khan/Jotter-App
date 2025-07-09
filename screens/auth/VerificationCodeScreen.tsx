import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "../../components/ui/Button";
import { BackButton } from "../../components/ui/BackButton";

interface VerificationCodeScreenProps {
  onBack: () => void;
  onVerify: (code: string) => void;
  onResendCode: () => void;
}

export const VerificationCodeScreen: React.FC<VerificationCodeScreenProps> = ({
  onBack,
  onVerify,
  onResendCode,
}) => {
  const [code, setCode] = useState(["1", "1", "1", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input if text is entered
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    // Move to previous input on backspace
    if (key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      alert("Please enter the complete verification code");
      return;
    }
    onVerify(verificationCode);
  };

  const CodeInput = ({ value, onChangeText, onKeyPress, index }: any) => {
    const hasValue = value !== "" && value !== "-";

    return (
      <TextInput
        ref={(ref) => (inputRefs.current[index] = ref!)}
        style={{
          width: 48,
          height: 48,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: hasValue ? "#747474" : "#EAEAEA",
          backgroundColor: hasValue ? "#FFF" : "#F6F6F6",
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Inter",
          color: hasValue ? "#2B2B2B" : "#555555",
        }}
        value={value === "-" ? "" : value}
        onChangeText={onChangeText}
        onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent.key, index)}
        keyboardType="numeric"
        maxLength={1}
        placeholder={hasValue ? "" : "-"}
        placeholderTextColor="#555555"
      />
    );
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
              marginBottom: 121,
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
                lineHeight: 29,
              }}
            >
              Enter Verification{"\n"}Code.
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Mulish",
                color: "#555555",
                textAlign: "center",
                lineHeight: 24,
              }}
            >
              Please enter the 6 digit verification code sent {"\n"}to your
              e-mail
            </Text>
          </View>

          {/* Code Input Container */}
          <View style={{ marginBottom: 87 }}>
            {/* Code Inputs */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
              }}
            >
              {code.map((digit, index) => (
                <CodeInput
                  key={index}
                  value={digit}
                  onChangeText={(text: string) => handleCodeChange(text, index)}
                  onKeyPress={handleKeyPress}
                  index={index}
                />
              ))}
            </View>

            {/* Resend Code Link */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter",
                  color: "#555555",
                }}
              >
                Didn't get the code?
              </Text>
              <TouchableOpacity onPress={onResendCode}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Archivo",
                    fontWeight: "500",
                    color: "#009A3F",
                    textDecorationLine: "underline",
                  }}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Verify Button */}
          <Button
            title="Verify"
            onPress={handleVerify}
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
            backgroundColor: "#303030",
          }}
        />
      </View>
    </SafeAreaView>
  );
};
