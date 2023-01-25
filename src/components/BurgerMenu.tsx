import React from "react";
import styled from "styled-components";
import ArrowLogo from "../img/arrow.png";
import { Link } from "react-router-dom";

function BurgerMenu() {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <ItemBlock>
            <Circle></Circle>
            <Link to="/mercury" style={{ textDecoration: "none" }}>
              <Links>Mercury</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleVenus></CircleVenus>
            <Link to="/venus" style={{ textDecoration: "none" }}>
              <Links>Venus</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleEarth></CircleEarth>
            <Link to="/earth" style={{ textDecoration: "none" }}>
              <Links>Earth</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleMars></CircleMars>
            <Link to="/mars" style={{ textDecoration: "none" }}>
              <Links>Mars</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleJupiter></CircleJupiter>
            <Link to="/jupiter" style={{ textDecoration: "none" }}>
              <Links>Jupiter</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleSaturn></CircleSaturn>
            <Link to="/saturn" style={{ textDecoration: "none" }}>
              <Links>Saturn</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleUranus></CircleUranus>
            <Link to="/uranus" style={{ textDecoration: "none" }}>
              <Links>Uranus</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
        <BurgerLine></BurgerLine>
        <MenuItem>
          <ItemBlock>
            <CircleNeptune></CircleNeptune>
            <Link to="/neptune" style={{ textDecoration: "none" }}>
              <Links>Neptune</Links>
            </Link>
          </ItemBlock>
          <ArrowButton>
            <ArrowImg src={ArrowLogo} alt="arrow logo" />
          </ArrowButton>
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default BurgerMenu;

const Container = styled.div`
  background: #070724;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 110px;
  left: 0;
`;

const Menu = styled.div`
  padding: 0 32px 0 24px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #def4fc;
`;

const CircleVenus = styled(Circle)`
  background: #f7cc7f;
`;

const CircleEarth = styled(Circle)`
  background: #545bfe;
`;

const CircleMars = styled(Circle)`
  background: #ff6a45;
`;

const CircleJupiter = styled(Circle)`
  background: #ecad7a;
`;

const CircleSaturn = styled(Circle)`
  background: #fccb6b;
`;

const CircleUranus = styled(Circle)`
  background: #65f0d5;
`;

const CircleNeptune = styled(Circle)`
  background: #497efa;
`;

const Links = styled.a`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.3636363744735718px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
`;

const ArrowButton = styled.button`
  height: 8px;
  width: 4px;
  background: inherit;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BurgerLine = styled.div`
  width: 100%;
  height: 1px;
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.1);
`;
