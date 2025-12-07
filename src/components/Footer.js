// 푸터
import styled from "styled-components";
import palette from "../styles/colorPalette";

const Footer = () => {
  return (
    <Container>
      <Since>since. 2025.12.07</Since>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

const Since = styled.div`
  font-size: 1rem;
  font-family: 'omyu_pretty';
  color: ${palette.grayBF};
  cursor: default;
`;

export default Footer;