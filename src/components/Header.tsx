import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import BurgerIcon from "../svg/BurgerIcon";
import CloseIcon from "../img/icon-remove.svg";

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}

function Header(props: Props) {
  const { showMenu, setShowMenu, pathname } = props;

  return (
    <HeaderContainer>
      <Container>
        <Logo>The Planets</Logo>
        <BurgerButton onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <CloseImg src={CloseIcon} alt="close icon" />
          ) : (
            <BurgerIcon />
          )}
        </BurgerButton>
        <Navigation pathname={pathname} />
      </Container>
      <Line />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: #070724;

  @media screen and (min-width: 768px) {
    background: inherit;
    position: relative;
    z-index: 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 68px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding: 32px 50px 0 50px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.0499999523162842px;
  text-transform: uppercase;
  color: #ffffff;
  white-space: nowrap;
`;

const BurgerButton = styled.button`
  width: 24px;
  height: 17px;
  border: none;
  background: inherit;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const CloseImg = styled.img``;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
