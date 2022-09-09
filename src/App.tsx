import styled, { ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { darktheme, lighttheme } from "./theme";

const ToggleWrapper = styled.div`
  top: 40px;
  position: absolute;
  width: 100%;
  display: flex;
  left: 150px;
  justify-content: center;
`;
const Toggle = styled.button``;

function App() {
  const [isDark, setIsDark] = useState(false); // 테마 모드 세팅
  const theme = isDark ? darktheme : lighttheme; // 테마 환경에 맞는 테마 컬러 가져오기.
  const toggleTheme = () => setIsDark(!isDark); // 테마 변경하기 이벤트
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToggleWrapper>
          <Toggle onClick={toggleTheme}>toggle</Toggle>
        </ToggleWrapper>

        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
