import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Logo } from "../components/Logo";

interface LandingScreenProps {
  onNavigateToAuth?: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  onNavigateToAuth,
}) => {
  const handleGetStarted = () => {
    // Navigate to authentication flow
    if (onNavigateToAuth) {
      onNavigateToAuth();
    } else {
      console.log("Get Started pressed");
    }
  };

  const handleWatchHowItWorks = () => {
    // Handle watch how it works action
    console.log("Watch How It Works pressed");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Logo width={226} height={60} />
        </View>

        {/* Main Title */}
        <Text style={styles.mainTitle}>
          Your Notes, Organized. Automatically
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Save your screenshots, PDFs, and notes in one place. Search
          effortlessly and find what you need in seconds.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.getStartedText}>Get Started for free</Text>
        </TouchableOpacity>

        {/* Watch How It Works Link */}
        <TouchableOpacity onPress={handleWatchHowItWorks}>
          <Text style={styles.watchHowItWorksText}>Watch How It Works</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    position: "relative",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 23,
    paddingTop: 185,
    paddingBottom: 100,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 108, // Distance from top (185) to logo + logo height + gap to title
    alignItems: "center",
  },
  mainTitle: {
    width: 346,
    height: 58,
    color: "#303030",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "500",
    lineHeight: "normal",
    marginBottom: 17, // Gap between title and description
  },
  description: {
    width: 311,
    height: 90,
    color: "#555555",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 24,
    marginBottom: 68, // Gap between description and button
  },
  getStartedButton: {
    width: 346,
    height: 50,
    backgroundColor: "#303030",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 92, // Gap between button and link
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  getStartedText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: "normal",
  },
  watchHowItWorksText: {
    width: 346,
    height: 30,
    color: "#303030",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: "normal",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});
