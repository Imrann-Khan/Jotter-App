import React from "react";
import { View, Text } from "react-native";
import { StorageIcon } from "./Icons";

export const StorageCard: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 88,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: "center",
        gap: 16,
      }}
    >
      <StorageIcon />

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#303030",
              fontFamily: "System",
              fontWeight: "400",
            }}
          >
            Your storage:
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#303030",
              fontFamily: "System",
              fontWeight: "700",
              marginLeft: 4,
            }}
          >
            15.00 GB
          </Text>
        </View>

        <View style={{ gap: 2 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 10,
                color: "#303030",
                fontFamily: "System",
                fontWeight: "400",
              }}
            >
              Usages storage:
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#303030",
                fontFamily: "System",
                fontWeight: "400",
              }}
            >
              5.00GB
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 10,
                color: "#303030",
                fontFamily: "System",
                fontWeight: "400",
              }}
            >
              Available Storage:
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#303030",
                fontFamily: "System",
                fontWeight: "400",
              }}
            >
              5.30GB
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
