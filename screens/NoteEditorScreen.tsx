import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

interface NoteEditorScreenProps {
  noteId?: string;
  noteName?: string;
  onBackPress: () => void;
  onSave?: (title: string, content: string) => void;
}

export const NoteEditorScreen: React.FC<NoteEditorScreenProps> = ({
  noteId,
  noteName = "Name here",
  onBackPress,
  onSave,
}) => {
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (onSave) {
      onSave(title, content);
    }
    onBackPress();
  };

  const renderMoreIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z"
        stroke="#303030"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
        stroke="#303030"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z"
        stroke="#303030"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      {/* Status Bar */}
      <View
        style={{
          width: "100%",
          height: 44,
          paddingHorizontal: 24,
          paddingTop: 13,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#181818",
            fontFamily: "Prompt",
          }}
        >
          5:13
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          {/* Mobile Signal */}
          <Svg width={17} height={12} viewBox="0 0 18 12" fill="none">
            <Path
              d="M9.771 3C9.771 2.44772 10.1971 2 10.7227 2H11.6744C12.2 2 12.6261 2.44772 12.6261 3V11C12.6261 11.5523 12.2 12 11.6744 12H10.7227C10.1971 12 9.771 11.5523 9.771 11V3Z"
              fill="#181818"
            />
            <Path
              d="M14.5295 1C14.5295 0.447715 14.9556 0 15.4813 0H16.433C16.9586 0 17.3847 0.447715 17.3847 1V11C17.3847 11.5523 16.9586 12 16.433 12H15.4813C14.9556 12 14.5295 11.5523 14.5295 11V1Z"
              fill="#181818"
            />
            <Path
              d="M5.01245 6.5C5.01245 5.94772 5.43855 5.5 5.96416 5.5H6.91587C7.44149 5.5 7.86758 5.94772 7.86758 6.5V11C7.86758 11.5523 7.44149 12 6.91587 12H5.96416C5.43855 12 5.01245 11.5523 5.01245 11V6.5Z"
              fill="#181818"
            />
            <Path
              d="M0.253906 9C0.253906 8.44772 0.680001 8 1.20562 8H2.15733C2.68294 8 3.10903 8.44772 3.10903 9V11C3.10903 11.5523 2.68294 12 2.15733 12H1.20562C0.680001 12 0.253906 11.5523 0.253906 11V9Z"
              fill="#181818"
            />
          </Svg>

          {/* WiFi */}
          <Svg width={16} height={11} viewBox="0 0 17 11" fill="none">
            <Path
              d="M6.2461 8.2905C7.59261 7.1513 9.56458 7.15139 10.9111 8.2905C10.9788 8.35175 11.0186 8.43847 11.0205 8.52976C11.0224 8.62112 10.9861 8.70891 10.9209 8.77292L8.81251 10.9018C8.75078 10.9643 8.66691 11.0004 8.57911 11.0005C8.49118 11.0005 8.40655 10.9644 8.34473 10.9018L6.23536 8.77292C6.1705 8.70891 6.1348 8.6209 6.13673 8.52976C6.13869 8.43844 6.17833 8.35172 6.2461 8.2905ZM3.39551 5.74265C6.2968 3.04291 10.7902 3.04282 13.6914 5.74265C13.7568 5.80585 13.7939 5.89293 13.7949 5.98386C13.7959 6.07496 13.7605 6.16337 13.6963 6.228L12.4766 7.45945C12.351 7.58519 12.1484 7.58857 12.0195 7.46628C11.0668 6.6032 9.8273 6.12441 8.542 6.12449C7.25756 6.12503 6.01948 6.60378 5.06739 7.46628C4.93853 7.58875 4.73499 7.58526 4.60938 7.45945L3.39063 6.228C3.32642 6.16357 3.29126 6.0758 3.292 5.98484C3.29286 5.8937 3.32998 5.80596 3.39551 5.74265ZM0.547858 3.19968C4.99771 -1.06659 12.0179 -1.06653 16.4678 3.19968C16.5322 3.26306 16.5688 3.34953 16.5693 3.43991C16.5699 3.53026 16.5343 3.617 16.4707 3.68113L15.25 4.91355C15.1243 5.03969 14.9206 5.04159 14.793 4.91745C13.0976 3.30495 10.8471 2.40486 8.50782 2.40476C6.16843 2.40487 3.91817 3.30495 2.22266 4.91745C2.09508 5.04171 1.89117 5.03995 1.76563 4.91355L0.544929 3.68113C0.481331 3.61696 0.445718 3.53027 0.446296 3.43991C0.44689 3.34954 0.483414 3.26301 0.547858 3.19968Z"
              fill="#181818"
            />
          </Svg>

          {/* Battery */}
          <Svg width={24} height={13} viewBox="0 0 25 13" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.630859 4C0.630859 1.79086 2.42172 0 4.63086 0H18.4838C20.693 0 22.4839 1.79086 22.4839 4V9C22.4839 11.2091 20.693 13 18.4839 13H4.63086C2.42173 13 0.630859 11.2091 0.630859 9V4Z"
              fill="#181818"
            />
            <Path
              d="M0.630859 4C0.630859 1.79086 2.42172 0 4.63086 0H16.5239V13H4.63086C2.42172 13 0.630859 11.2091 0.630859 9V4Z"
              fill="#181818"
            />
            <Path
              d="M23.4775 4.80762V8.86564C24.2885 8.52195 24.8158 7.72243 24.8158 6.83663C24.8158 5.95083 24.2885 5.15131 23.4775 4.80762Z"
              fill="#181818"
            />
          </Svg>
        </View>
      </View>

      {/* Header */}
      <View
        style={{
          width: "100%",
          height: 64,
          paddingHorizontal: 24,
          paddingVertical: 10,
          backgroundColor: "rgba(255, 255, 255, 0.50)",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            {/* Back Button */}
            <TouchableOpacity onPress={handleSave}>
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <G clipPath="url(#clip0_3_825)">
                  <Path
                    d="M13.8302 19C13.6808 19.0005 13.5332 18.9676 13.3982 18.9035C13.2632 18.8395 13.1443 18.7461 13.0502 18.63L8.22016 12.63C8.07308 12.4511 7.99268 12.2267 7.99268 11.995C7.99268 11.7634 8.07308 11.539 8.22016 11.36L13.2202 5.36003C13.3899 5.15581 13.6338 5.02739 13.8982 5.00301C14.1627 4.97863 14.4259 5.06029 14.6302 5.23003C14.8344 5.39977 14.9628 5.64368 14.9872 5.90811C15.0116 6.17253 14.9299 6.43581 14.7602 6.64003L10.2902 12L14.6102 17.36C14.7324 17.5068 14.8101 17.6856 14.834 17.8751C14.8579 18.0647 14.827 18.2571 14.7449 18.4296C14.6629 18.6021 14.5331 18.7475 14.371 18.8486C14.2089 18.9497 14.0212 19.0023 13.8302 19Z"
                    fill="#262626"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_3_825">
                    <Rect width="24" height="24" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </TouchableOpacity>

            {/* Note Name */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#303030",
                fontFamily: "Inter",
                lineHeight: 30,
              }}
            >
              {noteName}
            </Text>
          </View>

          <TouchableOpacity>{renderMoreIcon()}</TouchableOpacity>
        </View>
      </View>

      {/* Note Content */}
      <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 10 }}>
        {/* Title Input */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{
            fontSize: 24,
            fontWeight: "500",
            color: "#595959",
            fontFamily: "Inter",
            marginBottom: 10,
            paddingVertical: 0,
          }}
          placeholder="Title"
          placeholderTextColor="#595959"
        />

        {/* Content Input */}
        <TextInput
          value={content}
          onChangeText={setContent}
          style={{
            flex: 1,
            fontSize: 14,
            fontWeight: "300",
            color: "#747474",
            fontFamily: "Inter",
            lineHeight: 24,
            textAlignVertical: "top",
            paddingVertical: 0,
          }}
          placeholder="Add Note"
          placeholderTextColor="#747474"
          multiline
          autoFocus
        />
      </View>

      {/* Virtual Keyboard (showing only when focused) */}
      <View
        style={{
          height: 292,
          backgroundColor: "#313132",
          width: "100%",
        }}
      >
        {/* Keyboard Keys */}
        <View
          style={{
            paddingHorizontal: 3,
            paddingTop: 8,
            gap: 12,
          }}
        >
          {/* Top Row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 6,
            }}
          >
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
              (letter) => (
                <View
                  key={letter}
                  style={{
                    width: 33,
                    height: 42,
                    borderRadius: 5,
                    backgroundColor: "#6F6F70",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.3,
                    shadowRadius: 0,
                    elevation: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "400",
                      color: "#FFF",
                      fontFamily: "SF Pro Display",
                      letterSpacing: 0.35,
                    }}
                  >
                    {letter}
                  </Text>
                </View>
              ),
            )}
          </View>

          {/* Middle Row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 6,
              paddingHorizontal: 19,
            }}
          >
            {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
              <View
                key={letter}
                style={{
                  width: 33,
                  height: 42,
                  borderRadius: 5,
                  backgroundColor: "#6F6F70",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.3,
                  shadowRadius: 0,
                  elevation: 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "400",
                    color: "#FFF",
                    fontFamily: "SF Pro Display",
                    letterSpacing: 0.35,
                  }}
                >
                  {letter}
                </Text>
              </View>
            ))}
          </View>

          {/* Bottom Row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Shift Key */}
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 5,
                backgroundColor: "#D6D6D6",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 0,
                elevation: 1,
              }}
            >
              <Svg width={19} height={16} viewBox="0 0 20 17" fill="none">
                <Path
                  d="M5.78769 10.365H1.11586C0.671021 10.365 0.444666 9.82963 0.754383 9.50984L9.82286 0.145638C10.0207 -0.058637 10.3481 -0.058637 10.5459 0.145638L19.6144 9.50984C19.9241 9.82963 19.6978 10.365 19.2529 10.365H14.5805V15.9136C14.5805 16.1921 14.355 16.4178 14.0769 16.4178H6.2913C6.01318 16.4178 5.78769 16.1921 5.78769 15.9136V10.365Z"
                  fill="black"
                />
              </Svg>
            </View>

            {/* Letter Keys */}
            <View
              style={{
                flexDirection: "row",
                gap: 6,
                paddingHorizontal: 58,
              }}
            >
              {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
                <View
                  key={letter}
                  style={{
                    width: 33,
                    height: 42,
                    borderRadius: 5,
                    backgroundColor: "#6F6F70",
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.3,
                    shadowRadius: 0,
                    elevation: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "400",
                      color: "#FFF",
                      fontFamily: "SF Pro Display",
                      letterSpacing: 0.35,
                    }}
                  >
                    {letter}
                  </Text>
                </View>
              ))}
            </View>

            {/* Delete Key */}
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 5,
                backgroundColor: "#4B4B4C",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 0,
                elevation: 1,
              }}
            >
              <Svg width={23} height={17} viewBox="0 0 24 19" fill="none">
                <Path
                  d="M11.5199 7.05611C11.2248 6.76095 11.2248 6.28245 11.5199 5.98729C11.8151 5.69212 12.2936 5.69212 12.5887 5.98729L15.0828 8.48124L17.5767 5.98729C17.8717 5.69212 18.3503 5.69212 18.6455 5.98729C18.9406 6.28238 18.9406 6.76095 18.6455 7.05611L16.1515 9.55L18.6455 12.044C18.9406 12.3391 18.9406 12.8176 18.6455 13.1127C18.3503 13.4079 17.8717 13.4079 17.5767 13.1127L15.0828 10.6188L12.5887 13.1127C12.2936 13.4079 11.8151 13.4079 11.52 13.1127C11.2248 12.8176 11.2248 12.3391 11.52 12.0439L14.0139 9.55007L11.5199 7.05611Z"
                  fill="white"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.40311 1.87004L0.723145 9.55L8.40311 17.23C8.97006 17.7969 9.73899 18.1154 10.5408 18.1154H20.877C22.5466 18.1154 23.9001 16.7619 23.9001 15.0923V4.0077C23.9001 2.33809 22.5466 0.984619 20.877 0.984619H10.5408C9.73899 0.984619 8.97006 1.30315 8.40311 1.87004ZM20.877 16.8054H10.5408C10.0864 16.8054 9.65067 16.6249 9.32937 16.3036L2.57579 9.55L9.32937 2.79636C9.65067 2.47512 10.0864 2.29461 10.5408 2.29461H20.877C21.8231 2.29461 22.59 3.06157 22.59 4.0077V15.0923C22.59 16.0384 21.8231 16.8054 20.877 16.8054Z"
                  fill="white"
                />
              </Svg>
            </View>
          </View>

          {/* Space Bar Row */}
          <View
            style={{
              flexDirection: "row",
              gap: 6,
            }}
          >
            {/* 123 Key */}
            <View
              style={{
                width: 92,
                height: 42,
                borderRadius: 5,
                backgroundColor: "#4B4B4C",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 0,
                elevation: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#FFF",
                  fontFamily: "SF Pro Text",
                  letterSpacing: -0.32,
                }}
              >
                123
              </Text>
            </View>

            {/* Space Bar */}
            <View
              style={{
                flex: 1,
                height: 42,
                borderRadius: 5,
                backgroundColor: "#6F6F70",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 0,
                elevation: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#FFF",
                  fontFamily: "SF Pro Text",
                  letterSpacing: -0.32,
                }}
              >
                space
              </Text>
            </View>

            {/* Return Key */}
            <View
              style={{
                width: 92,
                height: 42,
                borderRadius: 5,
                backgroundColor: "#4B4B4C",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 0,
                elevation: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#FFF",
                  fontFamily: "SF Pro Text",
                  letterSpacing: -0.32,
                }}
              >
                return
              </Text>
            </View>
          </View>
        </View>

        {/* Emoji & Dictation */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 31,
            paddingTop: 24,
          }}
        >
          {/* Emoji */}
          <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.8421 0.807617C21.3553 0.807617 27.446 6.89827 27.446 14.4115C27.446 21.9247 21.3553 28.0153 13.8421 28.0153C6.32893 28.0153 0.238281 21.9247 0.238281 14.4115C0.238281 6.89827 6.32893 0.807617 13.8421 0.807617ZM13.8421 2.39247C20.4799 2.39322 25.8603 7.77464 25.8598 14.4124C25.8593 21.0501 20.478 26.4307 13.8403 26.4305C7.20258 26.4302 1.82177 21.0492 1.82177 14.4115C1.82186 11.2236 3.08836 8.16639 5.34263 5.91237C7.59691 3.65835 10.6543 2.39219 13.8421 2.39247ZM9.53855 8.5108C9.11807 8.50579 8.71315 8.6696 8.41443 8.96557C8.11571 9.26154 7.94816 9.66493 7.94928 10.0854C7.94928 10.9632 8.66082 11.6747 9.53855 11.6747C10.4163 11.6747 11.1278 10.9632 11.1278 10.0854C11.1289 9.66493 10.9614 9.26154 10.6627 8.96557C10.364 8.6696 9.95903 8.50579 9.53855 8.5108ZM22.9081 16.7547C22.1837 20.6692 18.4055 23.9376 13.8404 23.9376C9.31171 23.9376 5.55568 20.7168 4.78877 16.8466C4.63334 15.8807 5.42441 15.6528 6.16956 15.8331C8.66232 16.5538 11.2474 16.9045 13.8421 16.8738C16.431 16.9038 19.0102 16.5543 21.4977 15.8365C22.2221 15.6528 22.9979 15.8603 22.9081 16.7547ZM20.4488 17.2989C20.3781 17.3261 20.3063 17.3465 20.2339 17.3703C20.2264 17.3737 20.4658 17.2955 20.4587 17.2989C18.3077 17.891 16.0842 18.1784 13.8534 18.1525C11.1911 18.1525 8.81006 17.8566 7.17148 17.2683C5.98353 16.9146 6.21139 18.3124 7.04633 18.7409C9.18231 19.7133 11.5063 20.2033 13.853 20.1761C16.6445 20.1761 19.132 19.5265 20.775 18.6865C21.5524 18.1865 21.7062 16.8465 20.4488 17.2989ZM18.1545 8.5108C17.734 8.50579 17.3291 8.66959 17.0303 8.96555C16.7315 9.26151 16.5639 9.6649 16.5649 10.0854C16.5565 10.6588 16.8576 11.1923 17.3529 11.4814C17.8481 11.7706 18.4607 11.7706 18.9559 11.4814C19.4511 11.1923 19.7522 10.6588 19.7438 10.0854C19.7448 9.66496 19.5773 9.26162 19.2786 8.96567C18.9799 8.66973 18.575 8.50588 18.1545 8.5108Z"
              fill="white"
            />
          </Svg>

          {/* Dictation */}
          <Svg width={29} height={29} viewBox="0 0 29 29" fill="none">
            <Path
              d="M316.325 14.2693C316.325 17.3018 318.305 19.4377 321.195 19.4377C324.072 19.4377 326.052 17.3018 326.052 14.2693V5.97604C326.052 2.93036 324.072 0.807617 321.195 0.807617C318.305 0.807617 316.325 2.93036 316.325 5.97604V14.2693ZM318.345 14.2693V5.97604C318.345 4.0247 319.482 2.77215 321.195 2.77215C322.908 2.77215 324.031 4.0247 324.031 5.97604V14.2693C324.031 16.2206 322.908 17.4732 321.195 17.4732C319.482 17.4732 318.345 16.2206 318.345 14.2693ZM311.615 14.7439C311.615 19.9123 315.081 23.5381 320.178 23.9601V27.0321H315.214C314.652 27.0321 314.197 27.4804 314.197 28.0341C314.197 28.5879 314.652 29.023 315.214 29.023H327.162C327.724 29.023 328.179 28.5879 328.179 28.0341C328.179 27.4804 327.724 27.0321 327.162 27.0321H322.198V23.9601C327.309 23.5381 330.761 19.9123 330.761 14.7439V12.0674C330.761 11.5136 330.32 11.0785 329.758 11.0785C329.196 11.0785 328.741 11.5136 328.741 12.0674V14.6648C328.741 19.1608 325.771 22.1406 321.195 22.1406C316.606 22.1406 313.636 19.1608 313.636 14.6648V12.0674C313.636 11.5136 313.194 11.0785 312.619 11.0785C312.057 11.0785 311.615 11.5136 311.615 12.0674V14.7439Z"
              fill="white"
            />
          </Svg>
        </View>

        {/* Home Indicator */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 21,
            paddingBottom: 8,
          }}
        >
          <View
            style={{
              width: 135,
              height: 5,
              borderRadius: 100,
              backgroundColor: "#FFF",
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
