import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import data from "../data.json";

interface NavigationProps {
  pathname: string;
}

function Navigation(props: NavigationProps) {
  const { pathname } = props;

  const [activePlanet, setActivePlanet] = useState<string>("");

  return (
    <Container>
      <ListMenu>
        {data.map((item) => {
          return (
            <List>
              {activePlanet === item.name ? (
                <LinkLine pathname={pathname}></LinkLine>
              ) : null}
              <Link
                onClick={() => setActivePlanet(item.name)}
                style={{
                  textDecoration: "none",
                }}
                to={`${item.name.toLowerCase()}`}
              >
                <LinkName activePlanet={activePlanet === item.name}>
                  {item.name}
                </LinkName>
              </Link>
            </List>
          );
        })}
      </ListMenu>
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  width: 100%;
  margin: 39px 0 27px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;

const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    column-gap: 33px;
  }
`;

interface LinkLineProps {
  pathname: string;
}

const LinkLine = styled.div(
  (props: LinkLineProps) => css`
    @media screen and (min-width: 1024px) {
      border: 4px solid;
      border-color: ${props.pathname === "/mercury"
        ? "#419EBB"
        : props.pathname === "/venus"
        ? "#EDA249"
        : props.pathname === "/earth"
        ? "#6D2ED5"
        : props.pathname === "/mars"
        ? "#D14C32"
        : props.pathname === "/jupiter"
        ? "#D83A34"
        : props.pathname === "/saturn"
        ? "#CD5120"
        : props.pathname === "/uranus"
        ? "#1EC1A2 "
        : "#2D68F0"};
      width: 100%;
      position: absolute;
      top: -38px;
      left: 0;
    }
  `
);

const List = styled.li`
  position: relative;
`;

interface LinkNameProps {
  activePlanet: boolean;
}

const LinkName = styled.p(
  (props: LinkNameProps) => css`
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props.activePlanet
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0.75)"};
    transition: all ease 0.3s;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  `
);
