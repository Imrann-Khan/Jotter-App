import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "outline" | "google";
  icon?: React.ReactNode;
  containerStyle?: any;
  textStyle?: any;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  icon,
  containerStyle,
  textStyle,
  disabled,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = {
      height: 50,
      borderRadius: variant === "google" ? 15 : 100,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row" as const,
      paddingHorizontal: variant === "google" ? 75 : 10,
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          backgroundColor: disabled ? "#CCCCCC" : "#303030",
          shadowColor: "rgba(0, 0, 0, 0.15)",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 4,
          elevation: 4,
        };
      case "outline":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#747474",
        };
      case "google":
        return {
          ...baseStyle,
          backgroundColor: "#FFF",
          borderWidth: 1,
          borderColor: "#747474",
          shadowColor: "rgba(0, 0, 0, 0.25)",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 1,
          shadowRadius: 13,
          elevation: 8,
        };
      default:
        return baseStyle;
    }
  };

  const getTextStyle = () => {
    const baseStyle = {
      fontSize: variant === "google" ? 14 : 20,
      fontFamily: "Inter",
      fontWeight: variant === "google" ? "300" : "500",
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyle,
          color: "#FFF",
        };
      case "outline":
        return {
          ...baseStyle,
          color: "#303030",
        };
      case "google":
        return {
          ...baseStyle,
          color: "#303030",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), containerStyle]}
      disabled={disabled}
      {...props}
    >
      {icon && <View style={{ marginRight: icon ? 13 : 0 }}>{icon}</View>}
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
