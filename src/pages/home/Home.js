// 홈
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

const Home = ({ }) => {
  return(
    <ContentFooter>
      <Container>
        
      </Container>
    </ContentFooter>
  );
}

const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid ${palette.mainColor};
  margin-top: 20px;
  padding: 62px 30px 38px 30px;
`;

export default Home;