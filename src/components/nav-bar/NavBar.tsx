import React, { useState } from "react";
import Styled from "styled-components";
import NavItem from "./NavItem";
import {
  faBars,
  faCode,
  faHome,
  faMoon,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../theme";
import Switch from "../Switch";

const StyledNav = Styled.nav`
  display: flex;
  box-shadow: 0 0 3px ${(props) => props.theme.colors.foreground};
  padding: 0 5%;
  background-color: ${(props) => props.theme.colors.background};

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const TitleArea = Styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = Styled(FontAwesomeIcon)`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const MenuArea = Styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    display: ${(props) => (props.hidden ? "none" : "")}
  }
`;

export interface NavBarProps {
  onChangeTheme?(): void;
}

const NavBar: React.FC<NavBarProps> = ({ onChangeTheme }: NavBarProps) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <StyledNav theme={theme}>
      <TitleArea>
        <NavItem to="/">Hayden Phothong</NavItem>
        <MenuButton
          icon={faBars}
          onClick={(): void => setIsExpanded(!isExpanded)}
        />
      </TitleArea>
      <MenuArea hidden={!isExpanded} onClick={(): void => setIsExpanded(false)}>
        <NavItem to="/" icon={faHome}>
          Home
        </NavItem>
        <NavItem to="projects" icon={faProjectDiagram}>
          Projects
        </NavItem>
        <NavItem to="coding-challenges" icon={faCode}>
          Coding Challenges
        </NavItem>
      </MenuArea>
      <Switch
        left={<FontAwesomeIcon icon={faMoon} />}
        onChange={onChangeTheme}
      />
    </StyledNav>
  );
};

export default NavBar;
