import React, { useState } from "react";
import { LoginScreen } from "./LoginScreen";
import { SignUpScreen } from "./SignUpScreen";
import { ForgotPasswordScreen } from "./ForgotPasswordScreen";
import { VerificationCodeScreen } from "./VerificationCodeScreen";
import { ResetPasswordScreen } from "./ResetPasswordScreen";
import { PinEntryScreen } from "./PinEntryScreen";

type AuthScreen =
  | "login"
  | "signup"
  | "forgot-password"
  | "verification"
  | "reset-password"
  | "pin-entry";

interface AuthNavigatorProps {
  onAuthComplete: () => void;
}

export const AuthNavigator: React.FC<AuthNavigatorProps> = ({
  onAuthComplete,
}) => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>("login");
  const [userEmail, setUserEmail] = useState("");

  const navigateToScreen = (screen: AuthScreen) => {
    setCurrentScreen(screen);
  };

  const handleSendVerificationCode = (email: string) => {
    setUserEmail(email);
    // Here you would typically call an API to send the verification code
    console.log("Sending verification code to:", email);
    navigateToScreen("verification");
  };

  const handleVerifyCode = (code: string) => {
    // Here you would typically verify the code with your backend
    console.log("Verifying code:", code);
    navigateToScreen("reset-password");
  };

  const handleResendCode = () => {
    // Here you would typically resend the verification code
    console.log("Resending verification code to:", userEmail);
  };

  const handleResetPassword = (newPassword: string) => {
    // Here you would typically reset the password via API
    console.log("Resetting password");
    // After successful reset, you might want to navigate back to login
    navigateToScreen("login");
  };

  const handlePinComplete = (pin: string) => {
    // Here you would typically verify the PIN with your backend
    console.log("PIN entered:", pin);
    onAuthComplete();
  };

  const handleForgotPin = () => {
    // Handle forgot PIN logic - could navigate to forgot password or show other options
    console.log("Forgot PIN pressed");
    navigateToScreen("forgot-password");
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login successful");
    onAuthComplete();
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Sign up successful");
    onAuthComplete();
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <LoginScreen
            onNavigateToSignUp={() => navigateToScreen("signup")}
            onNavigateToForgotPassword={() =>
              navigateToScreen("forgot-password")
            }
            onLogin={handleLogin}
          />
        );
      case "signup":
        return (
          <SignUpScreen
            onNavigateToLogin={() => navigateToScreen("login")}
            onSignUp={handleSignUp}
          />
        );
      case "forgot-password":
        return (
          <ForgotPasswordScreen
            onBack={() => navigateToScreen("login")}
            onSendVerificationCode={handleSendVerificationCode}
          />
        );
      case "verification":
        return (
          <VerificationCodeScreen
            onBack={() => navigateToScreen("forgot-password")}
            onVerify={handleVerifyCode}
            onResendCode={handleResendCode}
          />
        );
      case "reset-password":
        return <ResetPasswordScreen onResetPassword={handleResetPassword} />;
      case "pin-entry":
        return (
          <PinEntryScreen
            onPinComplete={handlePinComplete}
            onForgotPin={handleForgotPin}
          />
        );
      default:
        return (
          <LoginScreen
            onNavigateToSignUp={() => navigateToScreen("signup")}
            onNavigateToForgotPassword={() =>
              navigateToScreen("forgot-password")
            }
            onLogin={handleLogin}
          />
        );
    }
  };

  return renderCurrentScreen();
};
