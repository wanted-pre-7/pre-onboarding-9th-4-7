import styled from "@emotion/styled";
import type { ReactNode } from "react";

type IChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: IChildrenProps) => {
  return (
    <Wrapper>
      <>{children}</>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6vh 35px 6vh 30px;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 30px 0;
`;

export const MainWrapper = styled.main`
  margin-bottom: 6vh;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
