import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";

const BackIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_3_392)">
      <Path
        d="M13.8302 19.0003C13.6808 19.0008 13.5332 18.9678 13.3982 18.9038C13.2632 18.8398 13.1443 18.7463 13.0502 18.6303L8.22016 12.6303C8.07308 12.4513 7.99268 12.2269 7.99268 11.9953C7.99268 11.7637 8.07308 11.5392 8.22016 11.3603L13.2202 5.36028C13.3899 5.15606 13.6338 5.02763 13.8982 5.00325C14.1627 4.97888 14.4259 5.06054 14.6302 5.23028C14.8344 5.40001 14.9628 5.64393 14.9872 5.90835C15.0116 6.17278 14.9299 6.43606 14.7602 6.64028L10.2902 12.0003L14.6102 17.3603C14.7324 17.5071 14.8101 17.6858 14.834 17.8753C14.8579 18.0649 14.827 18.2573 14.7449 18.4299C14.6629 18.6024 14.5331 18.7478 14.371 18.8489C14.2089 18.95 14.0212 19.0025 13.8302 19.0003Z"
        fill="#262626"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_392">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const PhoneIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M10.0025 4.25722C9.69873 3.4979 8.96332 3 8.14551 3H5.39474C4.3483 3 3.5 3.8481 3.5 4.89453C3.5 13.7892 10.7108 21 19.6055 21C20.6519 21 21.5 20.1516 21.5 19.1052L21.5005 16.354C21.5005 15.5361 21.0027 14.8009 20.2434 14.4971L17.6069 13.4429C16.9249 13.1701 16.1483 13.2929 15.5839 13.7632L14.9035 14.3307C14.1089 14.9929 12.9396 14.9402 12.2082 14.2088L10.2922 12.2911C9.56079 11.5596 9.50673 10.3913 10.1689 9.59668L10.7363 8.9163C11.2066 8.35195 11.3305 7.57516 11.0577 6.89309L10.0025 4.25722Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MailIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M4.5 6L10.6076 10.6123L10.6097 10.614C11.2878 11.1113 11.6271 11.3601 11.9988 11.4562C12.3272 11.5412 12.6725 11.5412 13.001 11.4562C13.3729 11.36 13.7132 11.1105 14.3926 10.6123C14.3926 10.6123 18.3101 7.60594 20.5 6M3.5 15.8002V8.2002C3.5 7.08009 3.5 6.51962 3.71799 6.0918C3.90973 5.71547 4.21547 5.40973 4.5918 5.21799C5.01962 5 5.58009 5 6.7002 5H18.3002C19.4203 5 19.9796 5 20.4074 5.21799C20.7837 5.40973 21.0905 5.71547 21.2822 6.0918C21.5 6.5192 21.5 7.07899 21.5 8.19691V15.8036C21.5 16.9215 21.5 17.4805 21.2822 17.9079C21.0905 18.2842 20.7837 18.5905 20.4074 18.7822C19.98 19 19.421 19 18.3031 19H6.69691C5.57899 19 5.0192 19 4.5918 18.7822C4.21547 18.5905 3.90973 18.2842 3.71799 17.9079C3.5 17.4801 3.5 16.9203 3.5 15.8002Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BottomBarIcon: React.FC = () => (
  <View
    style={{
      width: 150,
      height: 4,
      borderRadius: 16,
      backgroundColor: "#FFFFFF",
    }}
  />
);

interface SupportScreenProps {
  onBackPress?: () => void;
}

export const SupportScreen: React.FC<SupportScreenProps> = ({
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
              Support
            </Text>
          </View>
        </View>

        {/* Support Illustration */}
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 68,
            paddingTop: 50,
            paddingBottom: 66,
          }}
        >
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f77940b3f4b2b248eb242b97153807d3d653c9b?width=515",
            }}
            style={{
              width: 257,
              height: 233,
            }}
            resizeMode="contain"
          />
        </View>

        {/* Support Information */}
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 35,
            gap: 20,
          }}
        >
          {/* Description */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "400",
              color: "#2B2B2B",
              fontFamily: "Archivo",
              lineHeight: 30,
              textAlign: "center",
            }}
          >
            If you face any kind of problem with{"\n"}our service feel free to
            contact us.
          </Text>

          {/* Contact Information */}
          <View
            style={{
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            {/* Phone Number */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
              }}
            >
              <PhoneIcon />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#2B2B2B",
                  fontFamily: "Archivo",
                  lineHeight: 28,
                }}
              >
                (609)327-7992
              </Text>
            </View>

            {/* Email */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
              }}
            >
              <MailIcon />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#2B2B2B",
                  fontFamily: "Archivo",
                  lineHeight: 28,
                }}
              >
                jotter@gmail.com
              </Text>
            </View>
          </View>
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
