import React, { ReactNode, useCallback, useState } from "react";
import Styled from "styled-components";
import { useTheme } from "../theme";

const Container = Styled.div`
  display: flex;
  margin: 5px 5px;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
`;

const SwitchWrapper = Styled.div`
  width: 50px;
  height: 28px;
  display: flex;
  border-radius: 27px;
  background: ${(props) =>
    props.hidden ? props.theme.colors.text : props.theme.colors.success};
  justify-content: ${(props) => (props.hidden ? "flex-end" : "flex-start")};
  align-items: center;
  margin: 0 5px;
`;

const SwitchButton = Styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  margin: 2px 2px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background};
`;

export interface SwitchProps {
  left?: ReactNode;
  onChange?(enabled: boolean): void;
}

const Switch: React.FC<SwitchProps> = ({ onChange, left }: SwitchProps) => {
  const theme = useTheme();
  const [disabled, setDisabled] = useState<boolean>(true);

  const toggleEnabled = useCallback((): void => {
    if (onChange) {
      onChange(!disabled);
    }
    setDisabled(!disabled);
  }, [onChange, disabled, setDisabled]);

  return (
    <Container theme={theme}>
      {left}
      <SwitchWrapper theme={theme} hidden={disabled} onClick={toggleEnabled}>
        <SwitchButton theme={theme} />
      </SwitchWrapper>
    </Container>
  );
};

export default Switch;
