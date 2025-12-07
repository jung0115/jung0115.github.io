// 홈
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const Home = ({ }) => {
  return(
    <ContentFooter>
      <Container>
        
      </Container>

      {/* 푸터 */}
      <Footer/>
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
  border: 4px solid ${palette.lightGreen};
  outline: 6px solid ${palette.darkGreen};
  box-shadow: inset 0 0 0 6px ${palette.darkGreen};

  margin-top: 20px;
  padding: 62px 30px 38px 30px;
`;

export default Home;