import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Svg, { Path, G, ClipPath, Rect, Defs } from "react-native-svg";
import { DeleteAccountModal } from "../components/ui/DeleteAccountModal";

const BackIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_3_1058)">
      <Path
        d="M13.83 19.0003C13.6806 19.0008 13.533 18.9678 13.3981 18.9038C13.2631 18.8398 13.1442 18.7463 13.05 18.6303L8.22004 12.6303C8.07296 12.4513 7.99255 12.2269 7.99255 11.9953C7.99255 11.7637 8.07296 11.5392 8.22004 11.3603L13.22 5.36028C13.3898 5.15606 13.6337 5.02763 13.8981 5.00325C14.1625 4.97888 14.4258 5.06054 14.63 5.23028C14.8343 5.40001 14.9627 5.64393 14.9871 5.90835C15.0114 6.17278 14.9298 6.43606 14.76 6.64028L10.29 12.0003L14.61 17.3603C14.7323 17.5071 14.81 17.6858 14.8339 17.8753C14.8578 18.0649 14.8268 18.2573 14.7448 18.4299C14.6627 18.6024 14.533 18.7478 14.3709 18.8489C14.2088 18.95 14.0211 19.0025 13.83 19.0003Z"
        fill="#262626"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_1058">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const LockIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10M9.5 16C9.5 16.663 9.76339 17.2989 10.2322 17.7678C10.7011 18.2366 11.337 18.5 12 18.5C12.663 18.5 13.2989 18.2366 13.7678 17.7678C14.2366 17.2989 14.5 16.663 14.5 16C14.5 15.337 14.2366 14.7011 13.7678 14.2322C13.2989 13.7634 12.663 13.5 12 13.5"
      stroke="#303030"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 17V15C22 11 21 10 17 10H7C3 10 2 11 2 15V17C2 21 3 22 7 22H17C18.76 22 19.94 21.81 20.71 21.25"
      stroke="#303030"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const GavelIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M4.05774 20.7499V19.2499H15.5577V20.7499H4.05774ZM9.86149 15.5921L4.55774 10.2884L6.31149 8.48462L11.6652 13.7884L9.86149 15.5921ZM15.7885 9.66512L10.4847 4.31137L12.2885 2.55762L17.5922 7.86137L15.7885 9.66512ZM20.6 19.6536L7.89624 6.94987L8.94999 5.89612L21.6537 18.5999L20.6 19.6536Z"
      fill="#303030"
    />
  </Svg>
);

const ShieldIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 8V12M20 10.165C20 16.7333 15.0319 19.6781 12.9258 20.6314L12.9231 20.6325C12.7016 20.7328 12.5906 20.7831 12.3389 20.8263C12.1795 20.8537 11.8215 20.8537 11.6621 20.8263C11.4094 20.7829 11.2972 20.7325 11.074 20.6314C8.9678 19.6781 4 16.7333 4 10.165V6.2002C4 5.08009 4 4.51962 4.21799 4.0918C4.40973 3.71547 4.71547 3.40973 5.0918 3.21799C5.51962 3 6.08009 3 7.2002 3H16.8002C17.9203 3 18.4796 3 18.9074 3.21799C19.2837 3.40973 19.5905 3.71547 19.7822 4.0918C20 4.5192 20 5.07899 20 6.19691V10.165ZM12.0498 15V15.1L11.9502 15.1002V15H12.0498Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const InfoIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47717 2 2 6.47711 2 12C2 17.5228 6.47717 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47711 17.5229 2 12 2ZM12 20C7.58881 20 4 16.4112 4 12C4 7.58881 7.58881 4 12 4C16.4112 4 20 7.58881 20 12C20 16.4112 16.4112 20 12 20ZM13.2522 8C13.2522 8.72504 12.7243 9.25 12.0102 9.25C11.2671 9.25 10.7522 8.72504 10.7522 7.98613C10.7522 7.27595 11.2811 6.75 12.0102 6.75C12.7243 6.75 13.2522 7.27595 13.2522 8ZM11.0022 11H13.0022V17H11.0022V11Z"
      fill="#303030"
    />
  </Svg>
);

const TrashIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_2470)">
      <Path
        d="M21 6.0004H16V4.3304C15.9765 3.69022 15.7002 3.08546 15.2316 2.64869C14.7629 2.21193 14.1402 1.97879 13.5 2.0004H10.5C9.85975 1.97879 9.23706 2.21193 8.76843 2.64869C8.2998 3.08546 8.02346 3.69022 8 4.3304V6.0004H3C2.73478 6.0004 2.48043 6.10576 2.29289 6.2933C2.10536 6.48083 2 6.73519 2 7.0004C2 7.26562 2.10536 7.51997 2.29289 7.70751C2.48043 7.89504 2.73478 8.0004 3 8.0004H4V19.0004C4 19.7961 4.31607 20.5591 4.87868 21.1217C5.44129 21.6843 6.20435 22.0004 7 22.0004H17C17.7956 22.0004 18.5587 21.6843 19.1213 21.1217C19.6839 20.5591 20 19.7961 20 19.0004V8.0004H21C21.2652 8.0004 21.5196 7.89504 21.7071 7.70751C21.8946 7.51997 22 7.26562 22 7.0004C22 6.73519 21.8946 6.48083 21.7071 6.2933C21.5196 6.10576 21.2652 6.0004 21 6.0004ZM10 4.3304C10 4.1704 10.21 4.0004 10.5 4.0004H13.5C13.79 4.0004 14 4.1704 14 4.3304V6.0004H10V4.3304ZM18 19.0004C18 19.2656 17.8946 19.52 17.7071 19.7075C17.5196 19.895 17.2652 20.0004 17 20.0004H7C6.73478 20.0004 6.48043 19.895 6.29289 19.7075C6.10536 19.52 6 19.2656 6 19.0004V8.0004H18V19.0004Z"
        fill="#FF0000"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2470">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ArrowRightIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_1_2446)">
      <Path
        d="M10.0001 18.9999C9.7664 19.0004 9.53996 18.919 9.36005 18.7699C9.25879 18.686 9.17509 18.5829 9.11374 18.4665C9.05239 18.3502 9.01459 18.2229 9.00251 18.0919C8.99044 17.9609 9.00432 17.8289 9.04337 17.7033C9.08241 17.5777 9.14585 17.461 9.23005 17.3599L13.7101 11.9999L9.39005 6.62994C9.30699 6.52765 9.24495 6.40996 9.20752 6.28362C9.17009 6.15728 9.158 6.02479 9.17194 5.89376C9.18587 5.76273 9.22557 5.63575 9.28875 5.52011C9.35192 5.40447 9.43732 5.30246 9.54005 5.21994C9.64352 5.1289 9.76468 5.06024 9.89595 5.01825C10.0272 4.97626 10.1657 4.96185 10.3028 4.97594C10.4399 4.99002 10.5726 5.03229 10.6926 5.1001C10.8126 5.1679 10.9173 5.25977 11.0001 5.36994L15.8301 11.3699C15.9771 11.5489 16.0575 11.7733 16.0575 12.0049C16.0575 12.2366 15.9771 12.461 15.8301 12.6399L10.8301 18.6399C10.7297 18.761 10.6023 18.8566 10.4581 18.9192C10.3139 18.9817 10.157 19.0094 10.0001 18.9999Z"
        fill="#303030"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_2446">
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

interface SettingsScreenProps {
  onNavigate?: (screen: string) => void;
  onDeleteAccount?: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  onNavigate,
  onDeleteAccount,
}) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleBack = () => {
    onNavigate?.("Profile");
  };

  const menuItems = [
    {
      id: "changePassword",
      icon: <LockIcon />,
      title: "Change Password",
      onPress: () => onNavigate?.("ChangePassword"),
    },
    {
      id: "termsConditions",
      icon: <GavelIcon />,
      title: "Terms & Conditions",
      onPress: () => onNavigate?.("TermsConditions"),
    },
    {
      id: "privacyPolicy",
      icon: <ShieldIcon />,
      title: "Privacy Policy",
      onPress: () => onNavigate?.("PrivacyPolicy"),
    },
    {
      id: "aboutUs",
      icon: <InfoIcon />,
      title: "About Us",
      onPress: () => onNavigate?.("AboutUs"),
    },
  ];

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
          }}
        >
          <TouchableOpacity onPress={handleBack}>
            <BackIcon />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              color: "#303030",
              fontFamily: "Inter",
              textAlign: "center",
              flex: 1,
              marginRight: 53,
            }}
          >
            Settings
          </Text>
        </View>

        {/* Menu Items */}
        <View style={{ paddingHorizontal: 24, gap: 20, marginTop: 36 }}>
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

        {/* Delete Account Button */}
        <View style={{ paddingHorizontal: 24, marginTop: 312 }}>
          <TouchableOpacity
            onPress={() => setDeleteModalVisible(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              height: 50,
              paddingHorizontal: 16,
              borderRadius: 8,
              backgroundColor: "#FFF3F3",
            }}
          >
            <TrashIcon />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                color: "#F00",
                fontFamily: "Inter",
                lineHeight: 24,
              }}
            >
              Delete Account
            </Text>
          </TouchableOpacity>
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

      {/* Delete Account Modal */}
      <DeleteAccountModal
        visible={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={() => {
          setDeleteModalVisible(false);
          onDeleteAccount?.();
        }}
      />
    </SafeAreaView>
  );
};
