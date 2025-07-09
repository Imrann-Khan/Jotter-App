import React from "react";
import { View, Text, TouchableOpacity, Modal, Dimensions } from "react-native";

interface LogOutModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const LogOutModal: React.FC<LogOutModalProps> = ({
  visible,
  onCancel,
  onConfirm,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const modalWidth = Math.min(335, screenWidth - 40);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: modalWidth,
            height: 226,
            borderRadius: 15,
            backgroundColor: "#FFF",
            paddingHorizontal: 19,
            paddingTop: 37,
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              color: "#000",
              fontFamily: "Inter",
              marginBottom: 8,
            }}
          >
            Log Out
          </Text>

          {/* Description */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              color: "#262626",
              fontFamily: "Inter",
              lineHeight: 28,
              marginBottom: 33,
            }}
          >
            Do you want to log out your profile?
          </Text>

          {/* Buttons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 25,
            }}
          >
            {/* Cancel Button */}
            <TouchableOpacity
              onPress={onCancel}
              style={{
                paddingHorizontal: 22,
                paddingVertical: 12,
                borderRadius: 10,
                backgroundColor: "#EAEAEA",
                minWidth: 131,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#262626",
                  fontFamily: "Inter",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>

            {/* Log Out Button */}
            <TouchableOpacity
              onPress={onConfirm}
              style={{
                paddingHorizontal: 17,
                paddingVertical: 12,
                borderRadius: 10,
                backgroundColor: "#303030",
                minWidth: 130,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#F3F3F3",
                  fontFamily: "Inter",
                }}
              >
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
