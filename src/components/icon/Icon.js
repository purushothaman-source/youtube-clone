import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faBars,
  faSearch,
  faUser,
  faMicrophone,
  faBell,
  faVideoSlash
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  video: faVideo,
  menu: faBars,
  search: faSearch,
  profile: faUser,
  mic: faMicrophone,
  notification: faBell,
  AddVideo: faVideoSlash
};

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${props => props.$color} !important;
  cursor: pointer;
`;

/** Plain svg icon with optional color. */
const Icon = ({
  "data-testid": dataTestId,
  name = "icons",
  fontSize,
  color,
  ...props
}) => {
  const getColor = color => {
    if (typeof color === "object") {
      return `rgb(${color?.red}, ${color?.green}, ${color?.blue}, ${color?.alpha})`;
    } else {
      return color;
    }
  };

  return (
    <StyledIcon
      {...props}
      data-testid={dataTestId}
      className={`core icon${props.className ? " " + props.className : ""}`}
      icon={icons[name]}
      fontSize={fontSize}
      $color={getColor(color)}
    />
  );
};

Icon.propTypes = {
  /** Name of the icon, as mapped out in `icons` object. */
  name: PropTypes.oneOf(Object.keys(icons)),
  /** Optional font size for the icon. */
  fontSize: PropTypes.string,
  /** Optional color for the icon. */
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      red: PropTypes.number,
      green: PropTypes.number,
      blue: PropTypes.number,
      alpha: PropTypes.number
    })
  ])
};

export default memo(Icon);
