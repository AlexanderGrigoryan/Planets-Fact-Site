import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../data.json";
import ArrowLogo from "../img/arrow.png";

interface Props {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  colors: string[];
}

function BurgerMenu(props: Props) {
  const { setShowMenu, colors } = props;

  return (
    <Container>
      <Menu>
        {data.map((item: any, index: number) => {
          return (
            <>
              <MenuItem key={index}>
                <ItemBlock>
                  <Circle color={colors[index]}></Circle>
                  <Link
                    to={`${item.name.toLowerCase()}`}
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={() => setShowMenu(false)}
                  >
                    <ItemName>{item.name}</ItemName>
                  </Link>
                </ItemBlock>
                <ArrowButton>
                  <ArrowImg src={ArrowLogo} alt="arrow Logo" />
                </ArrowButton>
              </MenuItem>
              <BurgerLine></BurgerLine>
            </>
          );
        })}
      </Menu>
    </Container>
  );
}

export default BurgerMenu;

const Container = styled.div`
  background: #070724;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  position: fixed;
  top: 69px;
  left: 0;
  z-index: 100;
  padding-top: 44px;
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

const Circle = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const ItemName = styled.p`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.3636363744735718px;
  text-transform: uppercase;
  text-decoration: none;
  height: 100%;
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
