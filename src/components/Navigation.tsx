import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

function Navigation() {
  return (
    <Container>
      <ListMenu>
        {data.map((item) => {
          return (
            <List>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={`${item.name.toLowerCase()}`}
              >
                <LinkName>{item.name}</LinkName>
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
`;

const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

const List = styled.li``;

const LinkName = styled.p`
  font-size: 11px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;
