import React, { useState } from "react";
import Styled from "styled-components";
import NavItem from "./NavItem";
import { faBars, faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledNav = Styled.nav`
  display: flex;
  box-shadow: 0 0 3px black;
  padding: 0 5%;

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

const NavBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <StyledNav>
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
        <NavItem to="projects" icon={faCode}>
          Projects
        </NavItem>
      </MenuArea>
    </StyledNav>
  );
};

export default NavBar;
