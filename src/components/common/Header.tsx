import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  height: auto;
`;

const HeaderContents = styled.div`
  padding: 15px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, Orange, Orange, yellow);
`;

const YellowSpan = styled.span`
  color: #ff5500;
`;

const Header = () => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <h1>
            switch<YellowSpan>won</YellowSpan>
          </h1>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </Positioner>
  );
};

export default Header;
