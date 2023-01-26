import React, { useState } from "react";
import styled from "styled-components";
import BurgerIcon from "../svg/BurgerIcon";
import CloseIcon from "../img/icon-remove.svg";
import Line from "./Line";

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header(props: Props) {
  const { showMenu, setShowMenu } = props;
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
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 68px;
`;

const Logo = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.0499999523162842px;
  text-transform: uppercase;
  color: #ffffff;
`;

const BurgerButton = styled.button`
  width: 24px;
  height: 17px;
  border: none;
  background: inherit;
  cursor: pointer;
`;

const CloseImg = styled.img``;
