import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";
import { StatusBar as CustomStatusBar } from "../components/dashboard";

const BackIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_3_1063)">
      <Path
        d="M13.8299 19.0003C13.6805 19.0008 13.5329 18.9678 13.3979 18.9038C13.263 18.8398 13.144 18.7463 13.0499 18.6303L8.21992 12.6303C8.07284 12.4513 7.99243 12.2269 7.99243 11.9953C7.99243 11.7637 8.07284 11.5392 8.21992 11.3603L13.2199 5.36028C13.3897 5.15606 13.6336 5.02763 13.898 5.00325C14.1624 4.97888 14.4257 5.06054 14.6299 5.23028C14.8341 5.40001 14.9626 5.64393 14.9869 5.90835C15.0113 6.17278 14.9297 6.43606 14.7599 6.64028L10.2899 12.0003L14.6099 17.3603C14.7322 17.5071 14.8099 17.6858 14.8338 17.8753C14.8576 18.0649 14.8267 18.2573 14.7447 18.4299C14.6626 18.6024 14.5328 18.7478 14.3707 18.8489C14.2086 18.95 14.021 19.0025 13.8299 19.0003Z"
        fill="#262626"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_1063">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const BottomBarIcon: React.FC = () => (
  <View
    style={{
      width: 150,
      height: 4,
      borderRadius: 16,
      backgroundColor: "#BABABA",
    }}
  />
);

interface PrivacyPolicyScreenProps {
  onBackPress?: () => void;
}

export const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({
  onBackPress,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomStatusBar />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 24,
            paddingVertical: 20,
            gap: 38,
            height: 64,
          }}
        >
          <TouchableOpacity onPress={onBackPress}>
            <BackIcon />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              height: 45,
              marginRight: 38,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "400",
                color: "#303030",
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              Privacy Policy
            </Text>
          </View>
        </View>

        {/* Content */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 49,
            paddingBottom: 50,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: "#646464",
              fontFamily: "Inter",
              lineHeight: 18,
            }}
          >
            At Shower Share, we respect and protect your privacy. This Privacy
            Policy explains how we collect, use, store, and share information
            when you use our mobile application ("App") and related services
            ("Services"). By using the Shower Share App, you agree to the
            practices described in this Privacy Policy. If you do not agree with
            the terms of this Privacy Policy, please do not use the App{"\n"}
            We may collect the following types of information:{"\n"}
            Personal Information: When you create an account, we may collect
            your name, email address, phone number, and other details.{"\n"}
            Usage Data: Information on how you use the App, including IP
            address, device information, and usage patterns.{"\n"}
            Location Data: If you enable location services, we may collect
            location data to help you find available showers near you.
          </Text>
        </View>
      </ScrollView>

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
  );
};
