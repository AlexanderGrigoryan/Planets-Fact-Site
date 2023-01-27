import React from "react";
import { useLocation, useParams } from "react-router";
import styled, { css } from "styled-components";
import Line from "../components/Line";
import data from "../data.json";

interface Props {
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
}

function Planet(props: Props) {
  const { info, setInfo } = props;

  const location = useLocation();
  const params = useParams();
  const pathname = location.pathname;

  console.log(pathname);

  const planet = data.find(
    (element) => element.name.toLowerCase() === params.name
  );

  return (
    <>
      <Navigation>
        <NavLink>
          <Links onClick={() => setInfo("overview")}>Overview</Links>
          <NavLine pathname={pathname} active={info === "overview"}></NavLine>
        </NavLink>
        <NavLink>
          <Links onClick={() => setInfo("structure")}>Structure</Links>
          <NavLine pathname={pathname} active={info === "structure"}></NavLine>
        </NavLink>
        <NavLink>
          <Links onClick={() => setInfo("surface")}>Surface</Links>
          <NavLine pathname={pathname} active={info === "surface"}></NavLine>
        </NavLink>
      </Navigation>
      <Line></Line>
      <Container>
        <Content>
          {info === "overview" ? (
            <Image src={planet?.images.planet} alt="planet image" />
          ) : info === "structure" ? (
            <Image src={planet?.images.internal} alt="planet image" />
          ) : (
            <>
              <Image src={planet?.images.planet} alt="planet image" />
              <ImageGeology src={planet?.images.geology} alt="planet image" />
            </>
          )}
          <Name>{planet?.name}</Name>
          {info === "overview" ? (
            <Description>{planet?.overview.content}</Description>
          ) : info === "structure" ? (
            <Description>{planet?.structure.content}</Description>
          ) : (
            <Description>{planet?.geology.content}</Description>
          )}

          {info === "overview" ? (
            <Source>
              Source :{" "}
              <SourceLink target="_blank" href={planet?.overview.source}>
                Wikipedia
              </SourceLink>
            </Source>
          ) : info === "structure" ? (
            <Source>
              Source :{" "}
              <SourceLink target="_blank" href={planet?.structure.source}>
                Wikipedia
              </SourceLink>
            </Source>
          ) : (
            <Source>
              Source :{" "}
              <SourceLink target="_blank" href={planet?.geology.source}>
                Wikipedia
              </SourceLink>
            </Source>
          )}
        </Content>
        <Details>
          <InfoBlock>
            <Category>Rotation Time</Category>
            <CategoryAnswer>{planet?.rotation}</CategoryAnswer>
          </InfoBlock>
          <InfoBlock>
            <Category>Revolution Time</Category>
            <CategoryAnswer>{planet?.revolution}</CategoryAnswer>
          </InfoBlock>
          <InfoBlock>
            <Category>Radius</Category>
            <CategoryAnswer>{planet?.radius}</CategoryAnswer>
          </InfoBlock>
          <InfoBlock>
            <Category>Average Temp.</Category>
            <CategoryAnswer>{planet?.temperature}</CategoryAnswer>
          </InfoBlock>
        </Details>
      </Container>
    </>
  );
}

export default Planet;

const Navigation = styled.div`
  padding: 20px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 69px;
`;

const NavLink = styled.div``;

const Links = styled.button`
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.9285714626312256px;
  text-transform: uppercase;
  color: #ffffff;
  background: inherit;
  border: none;
  cursor: pointer;
`;

interface NavLineProps {
  active: boolean;
  pathname: string;
}

const NavLine = styled.div(
  (props: NavLineProps) => css`
    width: ${props.active ? "100%" : "0"};
    height: 4px;
    background: ${props.pathname === "/mercury"
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
    margin-top: 17px;
  `
);

const Container = styled.div`
  padding: 0 24px;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 111px;
  height: 111px;
`;

const ImageGeology = styled.img`
  width: 60px;
  height: 60px;
  margin-top: -25px;
`;

const Name = styled.h2`
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  text-transform: uppercase;
  margin: 98px 0 16px;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 32px;
  color: #ffffff;
`;

const Source = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.5);
`;

const SourceLink = styled.a`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.5); ;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin: 28px 0 47px;
`;

const InfoBlock = styled.div`
  width: 327px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled.p`
  font-size: 8px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.7272727489471436px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

const CategoryAnswer = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  color: #ffffff;
`;
