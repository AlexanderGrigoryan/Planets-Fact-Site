import React from "react";
import { useLocation, useParams } from "react-router";
import styled, { css } from "styled-components";
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
          <ImageBlock>
            {info === "overview" ? (
              <Image
                pathname={pathname}
                src={planet?.images.planet}
                alt="planet image"
              />
            ) : info === "structure" ? (
              <Image
                pathname={pathname}
                src={planet?.images.internal}
                alt="planet image"
              />
            ) : (
              <>
                <Image
                  pathname={pathname}
                  src={planet?.images.planet}
                  alt="planet image"
                />
                <ImageGeology src={planet?.images.geology} alt="planet image" />
              </>
            )}
          </ImageBlock>
          <FlexContainer>
            <InfoContainer>
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
            </InfoContainer>
            <NavigationResp>
              <LinksResp
                pathname={pathname}
                active={info === "overview"}
                onClick={() => setInfo("overview")}
              >
                <Span>01</Span> Overview
              </LinksResp>
              <LinksResp
                pathname={pathname}
                active={info === "structure"}
                onClick={() => setInfo("structure")}
              >
                <Span>02</Span> Internal Structure
              </LinksResp>
              <LinksResp
                pathname={pathname}
                active={info === "surface"}
                onClick={() => setInfo("surface")}
              >
                <Span>03</Span> Surface Geology
              </LinksResp>
            </NavigationResp>
          </FlexContainer>
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

  @media screen and (min-width: 768px) {
    display: none;
  }
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

const NavigationResp = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    padding: 20px 24px 0 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 69px;
  }
`;

interface LinksRespProps {
  active: boolean;
  pathname: string;
}

const LinksResp = styled.button(
  (props: LinksRespProps) => css`
    width: 281px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: ${props.pathname === "/mercury" && props.active
      ? "#419EBB"
      : props.pathname === "/venus" && props.active
      ? "#EDA249"
      : props.pathname === "/earth" && props.active
      ? "#6D2ED5"
      : props.pathname === "/mars" && props.active
      ? "#D14C32"
      : props.pathname === "/jupiter" && props.active
      ? "#D83A34"
      : props.pathname === "/saturn" && props.active
      ? "#CD5120"
      : props.pathname === "/uranus" && props.active
      ? "#1EC1A2"
      : props.pathname === "/neptune" && props.active
      ? "#2D68F0"
      : "rgba(255, 255, 255, 0.2)"};

    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.5714285373687744px;
    text-transform: uppercase;
    padding-left: 20px;
    text-align: left;
    cursor: pointer;
    color: #ffffff;

    &:hover {
      background: ${props.pathname === "/mercury" && props.active
        ? "#419EBB"
        : props.pathname === "/venus" && props.active
        ? "#EDA249"
        : props.pathname === "/earth" && props.active
        ? "#6D2ED5"
        : props.pathname === "/mars" && props.active
        ? "#D14C32"
        : props.pathname === "/jupiter" && props.active
        ? "#D83A34"
        : props.pathname === "/saturn" && props.active
        ? "#CD5120"
        : props.pathname === "/uranus" && props.active
        ? "#1EC1A2"
        : props.pathname === "/neptune" && props.active
        ? "#2D68F0"
        : "rgba(216, 216, 216, 0.2)"};
    }
  `
);

const Span = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
  padding: 0 24px;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 54px;
    padding: 0 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ImageProps {
  pathname: string;
}

const Image = styled.img(
  (props: ImageProps) => css`
    width: ${props.pathname === "/mercury"
      ? "111px"
      : props.pathname === "/venus"
      ? "154px"
      : props.pathname === "/earth"
      ? "173px"
      : props.pathname === "/mars"
      ? "129px"
      : props.pathname === "/jupiter"
      ? "224px"
      : props.pathname === "/saturn"
      ? "305px"
      : props.pathname === "/uranus"
      ? "176px"
      : "173px"};

    height: ${props.pathname === "/mercury"
      ? "111px"
      : props.pathname === "/venus"
      ? "154px"
      : props.pathname === "/earth"
      ? "173px"
      : props.pathname === "/mars"
      ? "129px"
      : props.pathname === "/jupiter"
      ? "224px"
      : props.pathname === "/saturn"
      ? "305px"
      : props.pathname === "/uranus"
      ? "176px"
      : "173px"};

    @media screen and (min-width: 768px) {
      width: ${props.pathname === "/mercury"
        ? "184px"
        : props.pathname === "/venus"
        ? "253px"
        : props.pathname === "/earth"
        ? "285px"
        : props.pathname === "/mars"
        ? "213px"
        : props.pathname === "/jupiter"
        ? "369px"
        : props.pathname === "/saturn"
        ? "503px"
        : props.pathname === "/uranus"
        ? "290px"
        : "285px"};

      height: ${props.pathname === "/mercury"
        ? "184px"
        : props.pathname === "/venus"
        ? "253px"
        : props.pathname === "/earth"
        ? "285px"
        : props.pathname === "/mars"
        ? "213px"
        : props.pathname === "/jupiter"
        ? "369px"
        : props.pathname === "/saturn"
        ? "503px"
        : props.pathname === "/uranus"
        ? "290px"
        : "285px"};
    }
  `
);

const ImageGeology = styled.img`
  width: 60px;
  height: 60px;
  margin-top: -25px;
  margin-right: 25px;

  @media screen and (min-width: 768px) {
    width: 113px;
    height: 149px;
  }

  @media screen and (min-width: 1024px) {
    width: 163px;
    height: 199px;
  }
`;

const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 69px;
  }
`;

const InfoContainer = styled.div`
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Name = styled.h2`
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  text-transform: uppercase;
  margin: 98px 0 16px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 62px;
  }
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
  width: 480px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 11px;
    justify-content: center;
    align-items: center;
  }
`;

const InfoBlock = styled.div`
  width: 480px;
  width: 100%;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 164px;
    height: 88px;
    justify-content: flex-start;
    row-gap: 6px;
    padding: 15px 0 0 15px;
  }
`;

const Category = styled.p`
  font-size: 8px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.7272727489471436px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;

const CategoryAnswer = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
    font-size: 24px;
    line-height: 31.05px;
    letter-spacing: -0.9px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    margin-top: 93px;
  }
`;
