import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Svg, { Path } from "react-native-svg";

interface BackButtonProps extends TouchableOpacityProps {
  size?: number;
  color?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  size = 24,
  color = "black",
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
        <Path
          d="M15 19.6406L8 12.6406L15 5.64062"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};
