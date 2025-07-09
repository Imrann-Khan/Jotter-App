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
    <G clipPath="url(#clip0_3_1001)">
      <Path
        d="M13.8299 19.0003C13.6805 19.0008 13.5329 18.9678 13.3979 18.9038C13.263 18.8398 13.144 18.7463 13.0499 18.6303L8.21992 12.6303C8.07284 12.4513 7.99243 12.2269 7.99243 11.9953C7.99243 11.7637 8.07284 11.5392 8.21992 11.3603L13.2199 5.36028C13.3897 5.15606 13.6336 5.02763 13.898 5.00325C14.1624 4.97888 14.4257 5.06054 14.6299 5.23028C14.8341 5.40001 14.9626 5.64393 14.9869 5.90835C15.0113 6.17278 14.9297 6.43606 14.7599 6.64028L10.2899 12.0003L14.6099 17.3603C14.7322 17.5071 14.8099 17.6858 14.8338 17.8753C14.8576 18.0649 14.8267 18.2573 14.7447 18.4299C14.6626 18.6024 14.5328 18.7478 14.3707 18.8489C14.2086 18.95 14.021 19.0025 13.8299 19.0003Z"
        fill="#262626"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_1001">
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

interface TermsAndConditionsScreenProps {
  onBackPress?: () => void;
}

export const TermsAndConditionsScreen: React.FC<
  TermsAndConditionsScreenProps
> = ({ onBackPress }) => {
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
            gap: 53,
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
              marginRight: 53,
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
              Terms & Condition
            </Text>
          </View>
        </View>

        {/* Content */}
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 51,
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
            Welcome to Shower Share!{"\n"}
            These Terms and Conditions ("Terms") govern your use of the Shower
            Share mobile application ("App") and the services offered through
            it. By accessing or using the App, you agree to be bound by these
            Terms. If you do not agree to these Terms, do not use the App.{"\n"}
            1. Acceptance of Terms{"\n"}
            By downloading, installing, or using the Shower Share App, you agree
            to these Terms, including any future modifications. We reserve the
            right to update or change these Terms at any time, and your
            continued use of the App after any changes will constitute your
            acceptance of the updated Terms.{"\n"}
            2. Description of the App{"\n"}
            Shower Share is a mobile application that allows users to [describe
            the main function of the app, e.g., "share shower spaces, book
            available showers, track shower time, etc."].{"\n"}
            The app may also provide additional features and services, which may
            be subject to additional terms and conditions.{"\n"}
            3. User Eligibility{"\n"}
            To use the App, you must be at least [insert age requirement] years
            old or the legal age of majority in your jurisdiction. By using the
            App, you represent and warrant that you meet these requirements.
            {"\n"}
            4. User Accounts{"\n"}
            Account Creation: To access certain features, you may be required to
            create an account. When you create an account, you agree to provide
            accurate, current, and complete information and to update it as
            necessary.{"\n"}
            Account Security: You are responsible for maintaining the
            confidentiality of your account login credentials and for all
            activities that occur under your account. Notify us immediately if
            you suspect any unauthorized use of your account.
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
