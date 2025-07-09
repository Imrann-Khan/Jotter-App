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

interface LoginScreenProps {
  onNavigateToSignUp: () => void;
  onNavigateToForgotPassword: () => void;
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onNavigateToSignUp,
  onNavigateToForgotPassword,
  onLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add validation logic here
    onLogin();
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign in logic
    console.log("Google sign in");
  };

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
                marginBottom: 184,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: "Inter",
                  color: "#303030",
                  textAlign: "center",
                  lineHeight: 29,
                }}
              >
                Continue Your Journey{"\n"}Let's Sign In
              </Text>
            </View>

            {/* Form */}
            <View style={{ marginBottom: 42 }}>
              <View style={{ gap: 16, marginBottom: 18 }}>
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
              </View>

              <TouchableOpacity
                onPress={onNavigateToForgotPassword}
                style={{ alignSelf: "flex-end", marginTop: 8, marginRight: 2 }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter",
                    color: "#595959",
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <Button
              title="Log In"
              onPress={handleLogin}
              containerStyle={{ marginBottom: 12 }}
            />

            {/* Sign Up Link */}
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
                Don't have any account ?
              </Text>
              <TouchableOpacity onPress={onNavigateToSignUp}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Inter",
                    fontWeight: "700",
                    color: "#303030",
                    marginLeft: 4,
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <Divider />

            {/* Google Sign In */}
            <Button
              title="Sign Up With Google"
              variant="google"
              icon={<GoogleIcon />}
              onPress={handleGoogleSignIn}
              containerStyle={{ marginBottom: 50 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
