import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs, Circle } from "react-native-svg";
import { BottomNavigation } from "../components/ui/BottomNavigation";
import { LogOutModal } from "../components/ui/LogOutModal";

const ProfileIcon: React.FC = () => (
  <Svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    <Path
      d="M60 0.5C92.8614 0.5 119.5 27.1386 119.5 60C119.5 76.6481 112.663 91.6979 101.644 102.497H101.643C101.575 102.563 101.506 102.629 101.436 102.697L101.435 102.699C100.53 103.576 99.5991 104.426 98.6396 105.245H98.6387C96.7479 106.865 94.7535 108.366 92.668 109.738C83.2912 115.91 72.0652 119.5 60 119.5C47.9348 119.5 36.7088 115.91 27.332 109.738C25.2465 108.366 23.2521 106.865 21.3613 105.245H21.3604C20.4009 104.426 19.4696 103.576 18.5654 102.699L18.5645 102.697L18.3574 102.497H18.3564C7.33802 91.6978 0.5 76.648 0.5 60C0.500002 27.1386 27.1386 0.500002 60 0.5Z"
      fill="#E0E0E0"
      stroke="#747474"
    />
    <Path
      d="M101.565 101.651C100.654 102.535 99.7146 103.392 98.7468 104.219C96.8399 105.852 94.8284 107.365 92.7253 108.749C83.2694 114.973 71.9485 118.594 59.7826 118.594C47.6168 118.594 36.2958 114.973 26.8399 108.749C24.7369 107.365 22.7253 105.852 20.8185 104.219C19.8506 103.392 18.9116 102.535 18 101.651C20.2613 94.6437 25.791 88.9636 33.085 86.6618L50.8446 81.0536V78.1253C48.6186 76.803 46.6293 75.2911 44.9893 74.1833C41.938 72.1248 39.8846 68.8982 39.2778 65.2689L38.3309 59.6032C35.3646 59.6032 32.9673 57.2058 32.9673 54.2396C32.9673 52.0345 34.2909 50.1433 36.1899 49.3207C34.5315 45.4324 33.3152 41.3113 32.5841 37.0855C32.1198 34.4083 31.8582 31.5846 32.6443 29.0029C33.429 26.4211 35.5085 24.1559 37.9621 24.1114L38.2838 24.1337C39.8323 21.7154 42.2519 20.1224 44.7918 19.2017C47.3317 18.2796 50.0128 17.967 52.6691 17.661C53.7076 17.542 54.7512 17.4203 55.7975 17.3157C60.6223 16.8514 65.876 16.7389 70.8093 18.1122C75.7439 19.4868 80.5111 22.5681 83.0235 27.4805C85.0194 31.378 85.4235 36.0798 84.9213 40.5278C84.5891 43.4797 83.8815 46.3531 83.051 49.1899C85.1214 49.9315 86.598 51.9103 86.598 54.2396C86.598 57.2058 84.2032 59.6032 81.2344 59.6032L80.2875 65.2689C79.6806 68.8982 77.6286 72.1248 74.5773 74.1833C72.9346 75.2911 70.9479 76.803 68.7219 78.1253V81.0536L86.4802 86.6618C93.7756 88.9649 99.3053 94.645 101.568 101.651H101.565Z"
      fill="#9E9E9E"
    />
  </Svg>
);

const UserIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M15.02 3.01007C14.1523 2.34954 13.0905 1.99445 12 2.00007C9.24 2.00007 7 4.24007 7 7.00007C7 9.76007 9.24 12.0001 12 12.0001C14.76 12.0001 17 9.76007 17 7.00007M20.59 22.0001C20.59 18.1301 16.74 15.0001 12 15.0001C7.26 15.0001 3.41 18.1301 3.41 22.0001"
      stroke="#303030"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SettingsIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SupportIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_2605)">
      <Path
        d="M21.12 9.59965C21.12 9.06973 20.6899 8.63965 20.16 8.63965C19.6301 8.63965 19.2 9.06973 19.2 9.59965C19.2 9.82813 19.2 16.5712 19.2 16.7996C19.2 17.3296 19.6301 17.7596 20.16 17.7596C20.6899 17.7596 21.12 17.3296 21.12 16.7996C21.12 16.5712 21.12 9.82813 21.12 9.59965Z"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
      <Path
        d="M13.44 22.5596C13.9699 22.5596 14.4 22.1296 14.4 21.5996C14.4 21.0697 13.9699 20.6396 13.44 20.6396C13.2115 20.6396 11.2685 20.6396 11.04 20.6396C10.5101 20.6396 10.08 21.0697 10.08 21.5996C10.08 22.1296 10.5101 22.5596 11.04 22.5596C11.2685 22.5596 13.2115 22.5596 13.44 22.5596Z"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
      <Path
        d="M3.84 9.11996C3.84 4.61324 7.49328 0.959961 12 0.959961C16.5067 0.959961 20.16 4.61324 20.16 9.11996"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
      <Path
        d="M21.12 9.59961C22.4458 9.59961 23.52 11.211 23.52 13.1996C23.52 15.1873 22.4458 16.7996 21.12 16.7996"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
      <Path
        d="M2.88 9.59965C2.88 9.06973 3.31008 8.63965 3.84 8.63965C4.36992 8.63965 4.8 9.06973 4.8 9.59965C4.8 9.82813 4.8 16.5712 4.8 16.7996C4.8 17.3296 4.36992 17.7596 3.84 17.7596C3.31008 17.7596 2.88 17.3296 2.88 16.7996C2.88 16.5712 2.88 9.82813 2.88 9.59965Z"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
      <Path
        d="M2.88001 9.59961C1.55473 9.59961 0.480011 11.211 0.480011 13.1996C0.480011 15.1873 1.55473 16.7996 2.88001 16.7996"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
      <Path
        d="M20.16 17.7598C20.16 20.1598 18.72 21.5998 16.32 21.5998H14.4"
        stroke="#303030"
        strokeWidth="0.84"
        strokeMiterlimit="10"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2605">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const LogOutIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_2618)">
      <Path
        d="M7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.89464 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H7C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19C8 18.7348 7.89464 18.4804 7.70711 18.2929C7.51957 18.1054 7.26522 18 7 18H6V6H7Z"
        fill="white"
      />
      <Path
        d="M20.82 11.4204L18 7.42044C17.8471 7.20485 17.615 7.05858 17.3545 7.01361C17.0941 6.96864 16.8264 7.02862 16.61 7.18044C16.5018 7.25623 16.4098 7.35268 16.3391 7.46424C16.2684 7.57581 16.2206 7.70026 16.1982 7.83042C16.1759 7.96059 16.1796 8.09388 16.2091 8.22261C16.2386 8.35134 16.2933 8.47296 16.37 8.58044L18.09 11.0004H10C9.73478 11.0004 9.48043 11.1058 9.29289 11.2933C9.10536 11.4809 9 11.7352 9 12.0004C9 12.2657 9.10536 12.52 9.29289 12.7075C9.48043 12.8951 9.73478 13.0004 10 13.0004H18L16.2 15.4004C16.1212 15.5055 16.0639 15.625 16.0313 15.7523C15.9987 15.8795 15.9915 16.0119 16.01 16.1419C16.0286 16.2719 16.0726 16.3969 16.1395 16.5099C16.2064 16.6229 16.2949 16.7216 16.4 16.8004C16.5731 16.9303 16.7836 17.0004 17 17.0004C17.1552 17.0004 17.3084 16.9643 17.4472 16.8949C17.5861 16.8254 17.7069 16.7246 17.8 16.6004L20.8 12.6004C20.9281 12.4313 20.999 12.2258 21.0026 12.0137C21.0062 11.8016 20.9423 11.5938 20.82 11.4204Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2618">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ArrowRightIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_2595)">
      <Path
        d="M9.99999 18.9999C9.76634 19.0004 9.5399 18.919 9.35999 18.7699C9.25873 18.686 9.17503 18.5829 9.11368 18.4665C9.05233 18.3502 9.01453 18.2229 9.00245 18.0919C8.99038 17.9609 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.461 9.22999 17.3599L13.71 11.9999L9.38999 6.62994C9.30692 6.52765 9.24489 6.40996 9.20746 6.28362C9.17003 6.15728 9.15794 6.02479 9.17187 5.89376C9.18581 5.76273 9.22551 5.63575 9.28868 5.52011C9.35186 5.40447 9.43726 5.30246 9.53999 5.21994C9.64346 5.1289 9.76462 5.06024 9.89588 5.01825C10.0271 4.97626 10.1657 4.96185 10.3028 4.97594C10.4399 4.99002 10.5726 5.03229 10.6925 5.1001C10.8125 5.1679 10.9172 5.25977 11 5.36994L15.83 11.3699C15.9771 11.5489 16.0575 11.7733 16.0575 12.0049C16.0575 12.2366 15.9771 12.461 15.83 12.6399L10.83 18.6399C10.7297 18.761 10.6022 18.8566 10.458 18.9192C10.3138 18.9817 10.1569 19.0094 9.99999 18.9999Z"
        fill="#303030"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2595">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const PlusIcon: React.FC = () => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <Path
      d="M14 24L34 24M24 34L24 14"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

interface ProfileScreenProps {
  onNavigate?: (screen: string) => void;
  onLogout?: () => void;
  onTabPress?: (tab: string) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onNavigate,
  onLogout,
  onTabPress = () => {},
}) => {
  const [logOutModalVisible, setLogOutModalVisible] = useState(false);

  const menuItems = [
    {
      id: "editProfile",
      icon: <UserIcon />,
      title: "Edit Profile",
      onPress: () => onNavigate?.("EditProfile"),
    },
    {
      id: "settings",
      icon: <SettingsIcon />,
      title: "Settings",
      onPress: () => onNavigate?.("Settings"),
    },
    {
      id: "support",
      icon: <SupportIcon />,
      title: "Support",
      onPress: () => onNavigate?.("Support"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Profile Avatar */}
        <View style={{ alignItems: "center", marginTop: 50, marginBottom: 30 }}>
          <ProfileIcon />
        </View>

        {/* User Name */}
        <View style={{ alignItems: "center", marginBottom: 36 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#262626",
              fontFamily: "Inter",
            }}
          >
            Daniel Martinez
          </Text>
        </View>

        {/* Menu Items */}
        <View style={{ paddingHorizontal: 24, gap: 20 }}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={item.onPress}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
                paddingHorizontal: 16,
                borderRadius: 8,
                backgroundColor: "#F6F6F6",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
              >
                {item.icon}
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "300",
                    color: "#303030",
                    fontFamily: "Inter",
                    lineHeight: 24,
                  }}
                >
                  {item.title}
                </Text>
              </View>
              <ArrowRightIcon />
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out Button */}
        <View style={{ paddingHorizontal: 24, marginTop: 180 }}>
          <TouchableOpacity
            onPress={() => setLogOutModalVisible(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              height: 50,
              paddingHorizontal: 16,
              borderRadius: 8,
              backgroundColor: "#303030",
            }}
          >
            <LogOutIcon />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                color: "#FFF",
                fontFamily: "Inter",
                lineHeight: 24,
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View
        style={{
          position: "absolute",
          bottom: 156,
          alignSelf: "center",
          width: 56,
          height: 56,
          borderRadius: 28,
          borderWidth: 1,
          borderColor: "#EAEAEA",
          backgroundColor: "#FFF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PlusIcon />
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="profile" onTabPress={onTabPress} />

      {/* Log Out Modal */}
      <LogOutModal
        visible={logOutModalVisible}
        onCancel={() => setLogOutModalVisible(false)}
        onConfirm={() => {
          setLogOutModalVisible(false);
          onLogout?.();
        }}
      />
    </SafeAreaView>
  );
};
