import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { TextInput } from "../../components/ui/TextInput";
import { Button } from "../../components/ui/Button";
import { GoogleIcon } from "../../components/ui/GoogleIcon";

interface SignUpScreenProps {
  onNavigateToLogin: () => void;
  onSignUp: () => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  onNavigateToLogin,
  onSignUp,
}) => {
  const [username, setUsername] = useState("Great");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    // Add validation logic here
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onSignUp();
  };

  const handleGoogleSignUp = () => {
    // Implement Google sign up logic
    console.log("Google sign up");
  };

  const CheckBox = ({
    checked,
    onPress,
  }: {
    checked: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "#EAEAEA",
          backgroundColor: checked ? "#303030" : "#EAEAEA",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked && (
          <Text style={{ color: "#FFF", fontSize: 10, fontWeight: "bold" }}>
            ✓
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const Divider = () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        paddingHorizontal: 24,
      }}
    >
      <View style={{ flex: 1, height: 1, backgroundColor: "#BFBFBF" }} />
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 13,
          fontFamily: "Open Sans",
          color: "#595959",
        }}
      >
        or
      </Text>
      <View style={{ flex: 1, height: 1, backgroundColor: "#BFBFBF" }} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              borderRadius: 30,
              paddingHorizontal: 23,
              paddingTop: 147,
            }}
          >
            {/* Header */}
            <View
              style={{
                alignItems: "center",
                marginBottom: 108,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Inter",
                  color: "#303030",
                  textAlign: "center",
                }}
              >
                Create Your Account
              </Text>
            </View>

            {/* Form */}
            <View style={{ marginBottom: 12 }}>
              <View style={{ gap: 16, marginBottom: 18 }}>
                <TextInput
                  placeholder="user name"
                  value={username}
                  onChangeText={setUsername}
                  keyboardType="default"
                  autoCapitalize="none"
                />
                <TextInput
                  placeholder="Email "
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  isPassword
                />
                <TextInput
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  isPassword
                />
              </View>

              {/* Terms Checkbox */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 14,
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <CheckBox
                  checked={agreeToTerms}
                  onPress={() => setAgreeToTerms(!agreeToTerms)}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    color: "#555555",
                    lineHeight: 20,
                    flex: 1,
                  }}
                >
                  I have read & agreed to Jotter Terms & Condition
                </Text>
              </View>
            </View>

            {/* Sign Up Button */}
            <Button
              title="Sign Up"
              onPress={handleSignUp}
              containerStyle={{ marginBottom: 12 }}
            />

            {/* Login Link */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 27,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Inter",
                  color: "#555555",
                }}
              >
                Already have an account ?
              </Text>
              <TouchableOpacity onPress={onNavigateToLogin}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    color: "#303030",
                    marginLeft: 4,
                  }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <Divider />

            {/* Google Sign Up */}
            <Button
              title="Sign Up With Google"
              variant="google"
              icon={<GoogleIcon />}
              onPress={handleGoogleSignUp}
              containerStyle={{ marginBottom: 50 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
