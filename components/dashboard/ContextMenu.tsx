import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

interface MenuItemProps {
  label: string;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 10,
          color: "#000000",
          fontFamily: "System",
          fontWeight: "400",
          lineHeight: 20,
          width: 50,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface ContextMenuProps {
  visible: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  fileName?: string | null;
  isFavoritesScreen?: boolean;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  visible,
  position,
  onClose,
  fileName,
  isFavoritesScreen = false,
}) => {
  const menuItems = [
    isFavoritesScreen ? "Un-favorite" : "Favorite",
    "Copy",
    "Rename",
    "Duplicate",
    "Delete",
    "Share",
  ];

  const handleMenuItemPress = (action: string) => {
    console.log(`${action} pressed for ${fileName}`);
    onClose();
  };

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: Math.max(10, Math.min(position.x - 40, 300)), // Adjust position to stay in screen
              top: Math.max(10, position.y - 60),
              width: 81,
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                label={item}
                onPress={() => handleMenuItemPress(item)}
              />
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
