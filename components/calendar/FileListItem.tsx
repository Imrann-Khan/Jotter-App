import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { CalendarFile } from "../../types/calendar";
import { CalendarUtils } from "../../utils/calendarUtils";

interface FileListItemProps {
  file: CalendarFile;
  onMenuPress: (fileName: string, position: { x: number; y: number }) => void;
  onFilePress?: (file: CalendarFile) => void;
}

const FileIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "image":
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <G clipPath="url(#clip0_image)">
            <Path
              d="M6.24954 17.5469C4.64862 17.5469 3.22462 16.5219 2.70748 14.9958L2.67251 14.8808C2.55054 14.4767 2.49944 14.1368 2.49944 13.7968V6.97852L0.0734135 15.0768C-0.238594 16.2679 0.472424 17.5028 1.66538 17.8318L17.1289 21.973C17.317 22.022 17.5105 22.0469 17.7049 22.047C18.7008 22.047 19.6109 21.386 19.866 20.4118L20.7669 17.5469H6.24954Z"
              fill="#ECEFF1"
            />
            <Path
              d="M24.0001 2.29644V13.7969C24.0001 15.0369 22.99 16.0469 21.75 16.0469H6.24954C6.14955 16.0469 6.04961 16.0368 5.95952 16.0268C4.90954 15.8969 4.08962 15.0369 4.00956 13.9769C3.99948 13.9168 3.99948 13.8567 3.99948 13.7969V2.29644C3.99948 1.05643 5.00952 0.0463867 6.24954 0.0463867H21.75C22.99 0.0463867 24.0001 1.05643 24.0001 2.29644Z"
              fill="#ECEFF1"
            />
            <Path
              d="M10.9996 5.0465C10.9996 6.15104 10.1042 7.04661 8.99969 7.04661C7.895 7.04661 6.99957 6.15104 6.99957 5.0465C6.99957 3.94196 7.895 3.04639 8.99969 3.04639C10.1042 3.04639 10.9996 3.942 10.9996 5.0465Z"
              fill="#FFC107"
            />
            <Path
              d="M24 10.9869V13.7971C24 15.0371 22.99 16.0472 21.75 16.0472H6.24953C6.14954 16.0472 6.0496 16.037 5.9595 16.027L16.2598 5.72686C16.9399 5.04678 18.0598 5.04678 18.7398 5.72686L24 10.9869Z"
              fill="#388E3C"
            />
            <Path
              d="M18.0598 16.047H6.24953C6.14959 16.047 6.0496 16.0369 5.95951 16.0269C4.90953 15.897 4.08962 15.037 4.00955 13.977L8.75961 9.22672C9.43969 8.54682 10.5596 8.54682 11.2396 9.22672L18.0598 16.047Z"
              fill="#4CAF50"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_image">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case "folder":
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M22.125 3.75H9.15C9.07937 3.75004 9.01019 3.77003 8.95042 3.80767C8.89066 3.8453 8.84273 3.89905 8.81217 3.96273C8.7816 4.0264 8.76964 4.09741 8.77766 4.16759C8.78568 4.23776 8.81336 4.30424 8.8575 4.35938L10.5075 6.42188C10.6826 6.64169 10.905 6.8191 11.1583 6.94085C11.4115 7.06261 11.689 7.12556 11.97 7.125H23.625C23.7245 7.125 23.8198 7.08549 23.8902 7.01517C23.9605 6.94484 24 6.84946 24 6.75V5.625C23.9994 5.1279 23.8017 4.65133 23.4502 4.29983C23.0987 3.94833 22.6221 3.7506 22.125 3.75Z"
            fill="#FFB125"
          />
          <Path
            d="M24 6.375H11.97C11.8016 6.37497 11.6354 6.33706 11.4836 6.2641C11.3319 6.19114 11.1984 6.08499 11.0933 5.9535L9.2175 3.609C8.97227 3.30148 8.66078 3.05327 8.30626 2.8829C7.95174 2.71252 7.56333 2.62436 7.17 2.625H1.875C1.37772 2.625 0.900805 2.82255 0.549175 3.17418C0.197544 3.52581 0 4.00272 0 4.5L0 19.5C0 19.9973 0.197544 20.4742 0.549175 20.8258C0.900805 21.1775 1.37772 21.375 1.875 21.375H22.125C22.6223 21.375 23.0992 21.1775 23.4508 20.8258C23.8025 20.4742 24 19.9973 24 19.5V6.375Z"
            fill="#FCD354"
          />
        </Svg>
      );
    case "link":
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <G clipPath="url(#clip0_link)">
            <Path
              d="M22.3523 1.6477C24.5493 3.84413 24.5493 7.40564 22.3523 9.60258L17.7174 14.238C17.0934 14.862 16.3596 15.3083 15.578 15.5778C14.3867 15.9877 13.0927 15.9877 11.9015 15.5778C11.1197 15.3083 10.386 14.862 9.76204 14.238C9.13855 13.614 8.69179 12.8803 8.42226 12.0986L8.52088 12C8.42226 12.0986 10.2593 10.2258 10.2593 10.2258L12.0001 12C12.9591 12.9595 14.5199 12.9595 15.4794 12L15.578 11.9014L20.1149 7.36453C21.0738 6.40556 21.0738 4.84477 20.1149 3.88528C19.1554 2.92631 17.5946 2.92631 16.6356 3.88528L12.0988 8.42213L10.2605 9.16969L8.42221 8.42208C8.69174 7.64091 9.13799 6.90666 9.76199 6.28266L14.3975 1.6477C16.5944 -0.549234 20.1559 -0.549234 22.3523 1.6477Z"
              fill="#A3E1FF"
            />
            <Path
              d="M12.0987 8.42209C12.8799 8.69162 13.6136 9.13839 14.2376 9.76239C14.8616 10.3859 15.3084 11.1201 15.5779 11.9013L15.4793 11.9999C14.5198 12.9594 12.959 12.9594 12.0001 11.9999C11.0406 11.0409 9.47977 11.0409 8.5208 11.9999L8.42218 12.0985L3.88533 16.6354C2.92585 17.5949 2.92585 19.1557 3.88533 20.1146C4.8443 21.0741 6.4051 21.0741 7.36458 20.1146L11.9014 15.5778C13.0927 15.9876 14.3867 15.9876 15.5779 15.5778C15.3084 16.3595 14.8616 17.0932 14.2376 17.7172L9.60268 22.3527C7.40574 24.5491 3.84422 24.5491 1.64729 22.3527C-0.549136 20.1557 -0.549136 16.5942 1.64729 14.3973L6.28275 9.76234C6.90675 9.13834 7.64049 8.69157 8.42218 8.42204C9.61116 8.01231 10.9098 8.01231 12.0987 8.42209Z"
              fill="#4AAEE2"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_link">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    case "document":
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M20.6297 6.62812V21.1078C20.6297 22.7062 19.3359 24 17.7375 24H6.26249C4.66405 24 3.3703 22.7062 3.3703 21.1078V2.89219C3.3703 1.29375 4.66405 0 6.26249 0H14.0016L20.6297 6.62812Z"
            fill="#F15642"
          />
          <Path
            d="M20.6297 6.62812H15.1969C14.5359 6.62812 14.0016 6.09375 14.0016 5.43281V0L20.6297 6.62812Z"
            fill="#FF9587"
          />
          <Path
            d="M10.2141 12.9374C10.2141 13.9358 9.68436 14.489 8.75155 14.489H8.17968V16.1624H7.4953V11.3999H8.75155C9.68436 11.3999 10.2141 11.9671 10.2141 12.9374ZM9.51093 12.9374C9.51093 12.3515 9.2578 12.0515 8.74218 12.0515H8.17968V13.8327H8.74218C9.26249 13.8374 9.51093 13.5515 9.51093 12.9374ZM10.7953 11.3999H11.9766C12.9 11.3999 13.4437 11.9437 13.4437 12.8812V14.6624C13.4437 15.6046 12.9 16.1577 11.9812 16.1577H10.7906V11.3999H10.7953ZM11.9859 15.5062C12.4734 15.5062 12.7547 15.2155 12.7547 14.6483V12.8952C12.7547 12.3374 12.4828 12.0515 11.9859 12.0515H11.4844V15.5062H11.9859ZM14.9484 12.0468V13.4671H16.3828V14.0905H14.9484V16.1577H14.264V11.3999H16.5094V12.0468H14.9484Z"
            fill="white"
          />
        </Svg>
      );
    default:
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Rect width="24" height="24" fill="#CCCCCC" />
        </Svg>
      );
  }
};

const MenuIcon: React.FC = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z"
      stroke="#303030"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FileListItem: React.FC<FileListItemProps> = ({
  file,
  onMenuPress,
  onFilePress,
}) => {
  const handleMenuPress = () => {
    // Calculate position for context menu - simplified for now
    onMenuPress(file.name, { x: 0, y: 0 });
  };

  const handleFilePress = () => {
    if (onFilePress) {
      onFilePress(file);
    }
  };

  const formattedSize = CalendarUtils.formatFileSize(file.size);
  const displayDate = CalendarUtils.formatDisplayDate(file.uploadDate);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 55,
        alignSelf: "stretch",
      }}
    >
      <TouchableOpacity
        onPress={handleFilePress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          flex: 1,
        }}
        activeOpacity={0.7}
      >
        <FileIcon type={file.type} />
        <View
          style={{
            width: 231,
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <View
            style={{
              height: 14,
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#303030",
                fontFamily: "Archivo",
                lineHeight: 20,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {file.name}
            </Text>
          </View>
          <View
            style={{
              height: 9,
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
            <Text
              style={{
                fontSize: 8,
                fontWeight: "500",
                color: "#747474",
                fontFamily: "Archivo",
                lineHeight: 20,
              }}
            >
              {displayDate}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleMenuPress}
        style={{ padding: 4 }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <MenuIcon />
      </TouchableOpacity>
    </View>
  );
};
