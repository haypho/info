import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useTheme } from "./theme";

const Container = styled.footer`
  width: 86%;
  box-shadow: 0 0 3px black;
  flex-shrink: 0;
  padding: 1% 7%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Copyright = styled.em`
  align-self: center;
  margin: 1vh 0 0 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  padding: 0.5vh 1vw;
`;

const Text = styled.span`
  margin: 0 0.3vw;
`;

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Wrapper>
        <Content>
          <Column>
            <Row>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="lg"
                color={theme.colors.text}
              />
              <Text>United Stated</Text>
            </Row>
            <Row>
              <Link theme={theme} href="mailto:hphothong@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  color={theme.colors.text}
                />
                <Text>hphothong@gmail.com</Text>
              </Link>
            </Row>
          </Column>
          <Column>
            <Row>
              <Link
                theme={theme}
                href="https://www.github.com/hphothong"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  color={theme.colors.text}
                />
              </Link>
              <Link
                theme={theme}
                href="https://www.linkedin.com/in/hayden-phothong-a2393312"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  color={theme.colors.text}
                />
              </Link>
            </Row>
          </Column>
          <Column>
            <Link
              theme={theme}
              href={`${process.env.PUBLIC_URL}/Resume_Hayden_Phothong.pdf`}
              target="_blank"
            >
              <Button>View Résumé</Button>
            </Link>
          </Column>
        </Content>
        <Copyright>Hayden Phothong &copy; 2020</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
