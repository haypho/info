import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, LinkProps } from "react-router-dom";
import Styled from "styled-components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "../theme";

const StyledLink = Styled(Link)`
  padding: 15px 10px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  opacity: 1;

  @media screen and (min-width: 600px) {
    &:hover, &:active {
      opacity: 0.3;
    }
  }
`;

const StyledIcon = Styled(FontAwesomeIcon)`
  margin: 0 3px 0 0;
`;

export interface NavItemProps extends LinkProps {
  icon?: IconProp;
  children?: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  children,
  ...props
}: NavItemProps) => {
  const theme = useTheme();

  return (
    <StyledLink {...props} theme={theme}>
      {icon !== undefined && <StyledIcon icon={icon} />}
      {children}
    </StyledLink>
  );
};

export default NavItem;
