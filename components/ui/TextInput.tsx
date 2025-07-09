import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  Text,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import Svg, { Path } from "react-native-svg";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  isPassword?: boolean;
  containerStyle?: any;
  inputStyle?: any;
  labelStyle?: any;
  error?: string;
}

export const TextInput: React.FC<CustomTextInputProps> = ({
  label,
  isPassword = false,
  containerStyle,
  inputStyle,
  labelStyle,
  error,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const EyeIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 25" fill="none">
      <Path
        d="M20.6191 11.2915L21.3831 10.6463L20.6191 11.2915ZM20.6191 13.3491L21.3831 13.9944L20.6191 13.3491ZM3.38088 11.2915L2.61691 10.6463L3.38088 11.2915ZM3.38088 13.3491L4.14485 12.7038L3.38088 13.3491ZM3.38088 11.2915L4.14485 11.9368C6.00829 9.73052 8.83199 8.32031 12 8.32031V7.32031V6.32031C8.22766 6.32031 4.85032 8.00198 2.61691 10.6463L3.38088 11.2915ZM12 7.32031V8.32031C15.168 8.32031 17.9917 9.73052 19.8552 11.9368L20.6191 11.2915L21.3831 10.6463C19.1497 8.00198 15.7723 6.32031 12 6.32031V7.32031ZM20.6191 13.3491L19.8552 12.7038C17.9917 14.9101 15.168 16.3203 12 16.3203V17.3203V18.3203C15.7723 18.3203 19.1497 16.6386 21.3831 13.9944L20.6191 13.3491ZM12 17.3203V16.3203C8.83199 16.3203 6.00829 14.9101 4.14485 12.7038L3.38088 13.3491L2.61692 13.9944C4.85032 16.6386 8.22766 18.3203 12 18.3203V17.3203ZM20.6191 11.2915L19.8552 11.9368C20.0483 12.1654 20.0483 12.4752 19.8552 12.7038L20.6191 13.3491L21.3831 13.9944C22.2056 13.0205 22.2056 11.6202 21.3831 10.6463L20.6191 11.2915ZM3.38088 11.2915L2.61691 10.6463C1.79436 11.6201 1.79436 13.0205 2.61692 13.9944L3.38088 13.3491L4.14485 12.7038C3.95172 12.4752 3.95172 12.1654 4.14485 11.9368L3.38088 11.2915ZM14.0866 12.3203H13.0866C13.0866 12.8331 12.6405 13.3203 12 13.3203V14.3203V15.3203C13.6643 15.3203 15.0866 14.0167 15.0866 12.3203H14.0866ZM12 14.3203V13.3203C11.3595 13.3203 10.9134 12.8331 10.9134 12.3203H9.91342H8.91342C8.91342 14.0167 10.3357 15.3203 12 15.3203V14.3203ZM9.91342 12.3203H10.9134C10.9134 11.8075 11.3595 11.3203 12 11.3203V10.3203V9.32031C10.3357 9.32031 8.91342 10.6239 8.91342 12.3203H9.91342ZM12 10.3203V11.3203C12.6405 11.3203 13.0866 11.8075 13.0866 12.3203H14.0866H15.0866C15.0866 10.6239 13.6643 9.32031 12 9.32031V10.3203Z"
        fill="black"
      />
    </Svg>
  );

  return (
    <View style={[{ position: "relative" }, containerStyle]}>
      {label && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 9,
            zIndex: 1,
            backgroundColor: "#FFF",
            paddingHorizontal: 10,
            paddingVertical: 0,
          }}
        >
          <Text
            style={[
              {
                fontSize: 10,
                fontFamily: "Archivo",
                color: "#000",
                lineHeight: 20,
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        </View>
      )}
      <View
        style={[
          {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: label ? "#303030" : "#EAEAEA",
            backgroundColor: label ? "#FFF" : "#F6F6F6",
            height: label ? 60 : 50,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingTop: label ? 10 : 0,
            marginTop: label ? 10 : 0,
          },
          inputStyle,
        ]}
      >
        <RNTextInput
          style={{
            flex: 1,
            fontSize: 14,
            fontFamily: "Inter",
            color: label ? "#303030" : "#595959",
            paddingVertical: 0,
          }}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor="#595959"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <EyeIcon />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            fontSize: 12,
            color: "#FF0000",
            marginTop: 4,
            marginLeft: 16,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};
