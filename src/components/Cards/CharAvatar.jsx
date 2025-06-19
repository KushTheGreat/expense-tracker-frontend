import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({
  fullName,
  width = "w-12",
  height = "h-12",
  style = "",
  bgColor = "bg-gray-100",
  textColor = "text-gray-900",
  fontSize,
}) => {
  const fontSizeStyle = fontSize ? { fontSize } : {};

  return (
    <div
      role="img"
      aria-label={`Avatar for ${fullName}`}
      className={`${width} ${height} ${style} flex items-center justify-center rounded-full ${textColor} font-medium ${bgColor}`}
      style={fontSizeStyle}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;
