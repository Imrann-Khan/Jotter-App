import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";

const BackIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_3_803)">
      <Path
        d="M13.8302 19.0003C13.6808 19.0008 13.5332 18.9678 13.3982 18.9038C13.2632 18.8398 13.1443 18.7463 13.0502 18.6303L8.22016 12.6303C8.07308 12.4513 7.99268 12.2269 7.99268 11.9953C7.99268 11.7637 8.07308 11.5392 8.22016 11.3603L13.2202 5.36028C13.3899 5.15606 13.6338 5.02763 13.8982 5.00325C14.1627 4.97888 14.4259 5.06054 14.6302 5.23028C14.8344 5.40001 14.9628 5.64393 14.9872 5.90835C15.0116 6.17278 14.9299 6.43606 14.7602 6.64028L10.2902 12.0003L14.6102 17.3603C14.7324 17.5071 14.8101 17.6858 14.834 17.8753C14.8579 18.0649 14.827 18.2573 14.7449 18.4299C14.6629 18.6024 14.5331 18.7478 14.371 18.8489C14.2089 18.95 14.0212 19.0025 13.8302 19.0003Z"
        fill="#262626"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_803">
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

interface AboutUsScreenProps {
  onBackPress?: () => void;
}

export const AboutUsScreen: React.FC<AboutUsScreenProps> = ({
  onBackPress,
}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
              About Us
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
            Shower Share is an innovative app designed to make sharing bathroom
            resources easier, more convenient, and sustainable. Whether you're a
            college student, a young professional, or anyone with limited access
            to private bathrooms, Shower Share is here to provide a seamless and
            respectful platform for sharing shower spaces.{"\n"}
            Our mission is to create a community-driven platform that connects
            people in need of shower facilities with those who have them
            available, all while ensuring safety, privacy, and convenience.
            {"\n"}
            Why Shower Share?{"\n"}
            Sustainable Living: We aim to reduce water waste and promote
            eco-friendly practices by encouraging the efficient use of bathroom
            resources.{"\n"}
            Convenience: Never struggle to find a shower when you need one
            again. With Shower Share, you can easily locate nearby available
            showers and book a time slot within seconds.{"\n"}
            Community-Focused: Shower Share isn't just an app; it's a community.
            We prioritize mutual respect, privacy, and trust among users.{"\n"}
            Privacy & Safety: Our platform ensures that both users and hosts are
            verified and reviews are transparent to guarantee a safe and
            pleasant experience for everyone.{"\n"}
            Whether you're traveling, moving between homes, or just need a
            clean, private space to refresh, Shower Share is the answer.{"\n"}
            Join the Shower Share community today, and let's make everyday life
            a little bit easier and a lot more sustainable.
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
