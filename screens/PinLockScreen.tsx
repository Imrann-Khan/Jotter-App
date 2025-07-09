import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { StatusBar as CustomStatusBar } from "../components/dashboard";
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
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <SafeAreaView style={{ flex: 1 }}>
        <CustomStatusBar />

        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            justifyContent: "space-between",
            paddingBottom: 50,
          }}
        >
          {/* Title Section */}
          <View
            style={{
              alignItems: "center",
              marginTop: 50,
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
              alignItems: "center",
              marginTop: -100,
            }}
          >
            <PinIndicator pinLength={pinLength} currentLength={pin.length} />
          </View>

          {/* PIN Keypad */}
          <View
            style={{
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <PinKeypad
              onNumberPress={handleNumberPress}
              onDeletePress={handleDeletePress}
            />

            {/* Forgot PIN Link */}
            <TouchableOpacity
              onPress={handleForgotPin}
              style={{
                marginTop: 50,
                paddingVertical: 10,
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
        </View>
      </SafeAreaView>
    </View>
  );
};
