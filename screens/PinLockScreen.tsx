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
        borderRadius: 32,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <SafeAreaView style={{ flex: 1 }}>
        <CustomStatusBar />

        <View
          style={{
            flex: 1,
            position: "relative",
          }}
        >
          {/* Title Section */}
          <View
            style={{
              display: "flex",
              width: 345,
              height: 64,
              justifyContent: "center",
              alignItems: "center",
              gap: 53,
              flexShrink: 0,
              position: "absolute",
              left: 24,
              top: 50,
            }}
          >
            <View
              style={{
                display: "flex",
                width: 192,
                height: 45,
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
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
          </View>

          {/* PIN Indicators */}
          <View
            style={{
              position: "absolute",
              left: 133,
              top: 160,
              width: 128,
              height: 14,
            }}
          >
            <PinIndicator pinLength={pinLength} currentLength={pin.length} />
          </View>

          {/* PIN Keypad */}
          <View
            style={{
              position: "absolute",
              left: 59,
              top: 237,
              width: 288,
              height: 392,
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
              left: 125,
              top: 682,
              width: 145,
              height: 24,
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
