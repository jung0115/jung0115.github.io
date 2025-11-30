import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import styled from "styled-components";
import './styles/App.css';
import palette from "./styles/colorPalette";

import Home from "./pages/home/Home";

function App() {

  return (
    <Container>
      <Router>

        <MainContent>
          {/* 컨텐츠 내용 */}
          <Contents>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Contents>


        </MainContent>

      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  background: ${palette.background};
  user-select: none;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  position: relative;
  margin: 0vh 40px;
  top: -20px;
`;

const Contents = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  min-height: 100%;
  margin-top: 20px;
`;

export default App;
