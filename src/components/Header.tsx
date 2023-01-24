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
    <>
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
    </>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 16px;
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
