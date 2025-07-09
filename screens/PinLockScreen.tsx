import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { PinIndicator } from "../components/ui/PinIndicator";
import { PinKeypad } from "../components/ui/PinKeypad";

interface PinLockScreenProps {
  onPinEntered?: (pin: string) => void;
  onForgotPin?: () => void;
  title?: string;
  pinLength?: number;
}

export const PinLockScreen: React.FC<PinLockScreenProps> = ({
  onPinEntered,
  onForgotPin,
  title = "Enter PIN",
  pinLength = 4,
}) => {
  const [pin, setPin] = useState("");

  const handleNumberPress = (number: string) => {
    if (pin.length < pinLength) {
      const newPin = pin + number;
      setPin(newPin);

      if (newPin.length === pinLength) {
        // PIN is complete, trigger callback
        setTimeout(() => {
          onPinEntered?.(newPin);
        }, 200);
      }
    }
  };

  const handleDeletePress = () => {
    setPin(pin.slice(0, -1));
  };

  const handleForgotPin = () => {
    onForgotPin?.();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 32,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 24,
          }}
        >
          {/* Title Section */}
          <View
            style={{
              position: "absolute",
              top: 94,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                color: "#303030",
                fontFamily: "Inter",
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          </View>

          {/* PIN Indicators */}
          <View
            style={{
              position: "absolute",
              top: 204,
              alignItems: "center",
            }}
          >
            <PinIndicator pinLength={pinLength} currentLength={pin.length} />
          </View>

          {/* PIN Keypad */}
          <View
            style={{
              position: "absolute",
              top: 281,
              alignItems: "center",
            }}
          >
            <PinKeypad
              onNumberPress={handleNumberPress}
              onDeletePress={handleDeletePress}
            />
          </View>

          {/* Forgot PIN Link */}
          <TouchableOpacity
            onPress={handleForgotPin}
            style={{
              position: "absolute",
              bottom: 170,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "#303030",
                fontFamily: "Archivo",
                textAlign: "center",
                opacity: 0.6,
                lineHeight: 24,
              }}
            >
              Forgot Your PIN Code?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
