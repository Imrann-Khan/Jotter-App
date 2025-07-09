import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

interface PinEntryScreenProps {
  onPinComplete: (pin: string) => void;
  onForgotPin: () => void;
}

export const PinEntryScreen: React.FC<PinEntryScreenProps> = ({
  onPinComplete,
  onForgotPin,
}) => {
  const [pin, setPin] = useState("");

  const handleNumberPress = (number: string) => {
    if (pin.length < 4) {
      const newPin = pin + number;
      setPin(newPin);
      if (newPin.length === 4) {
        onPinComplete(newPin);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const renderPinIndicators = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          marginTop: 46,
          marginBottom: 63,
        }}
      >
        {[0, 1, 2, 3].map((index) => (
          <View
            key={index}
            style={{
              width: 14,
              height: 14,
              borderRadius: 8,
              backgroundColor: "#747474",
            }}
          />
        ))}
      </View>
    );
  };

  const renderKeypadButton = (label: string, onPress: () => void) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.7}
      >
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Inter",
            fontWeight: "600",
            color: "#303030",
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderKeypad = () => {
    const rows = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      [",", "0", "⌫"],
    ];

    return (
      <View
        style={{
          width: 288,
          alignSelf: "center",
          marginTop: 17,
        }}
      >
        {rows.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            {row.map((item, index) => {
              let onPress;
              if (item === "⌫") {
                onPress = handleDelete;
              } else if (item === ",") {
                onPress = () => {}; // Empty function for comma button
              } else {
                onPress = () => handleNumberPress(item);
              }

              return renderKeypadButton(item, onPress);
            })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          borderRadius: 32,
          paddingHorizontal: 24,
          paddingTop: 50,
        }}
      >
        {/* Title */}
        <View
          style={{
            alignItems: "center",
            marginBottom: 46,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Inter",
              fontWeight: "500",
              color: "#303030",
              textAlign: "center",
            }}
          >
            Enter PIN
          </Text>
        </View>

        {/* PIN Indicators */}
        {renderPinIndicators()}

        {/* Keypad */}
        {renderKeypad()}

        {/* Forgot PIN Link */}
        <TouchableOpacity
          onPress={onForgotPin}
          style={{
            alignSelf: "center",
            marginTop: 53,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Archivo",
              fontWeight: "500",
              color: "#303030",
              opacity: 0.6,
              textAlign: "center",
              lineHeight: 24,
            }}
          >
            Forgot Your PIN Code?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
