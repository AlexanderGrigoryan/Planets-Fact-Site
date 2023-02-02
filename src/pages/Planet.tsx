import React from "react";
import styled, { css } from "styled-components";
import { useParams } from "react-router";
import data from "../data.json";

interface Props {
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  pathname: string;
}

function Planet(props: Props) {
  const { info, setInfo, pathname } = props;

  const params = useParams();
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
      <Container pathname={pathname}>
        <Content pathname={pathname}>
          <ImageBlock pathname={pathname}>
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
              <GeologyBlock>
                <Image
                  pathname={pathname}
                  src={planet?.images.planet}
                  alt="planet image"
                />
                <ImageGeology
                  pathname={pathname}
                  src={planet?.images.geology}
                  alt="planet image"
                />
              </GeologyBlock>
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
    margin-top: 17px;
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
  `
);

const NavigationResp = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding-left: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
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

    @media screen and (min-width: 1024px) {
      width: 350px;
      height: 48px;
    }
  `
);

const Span = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

interface ContainerProps {
  pathname: string;
}

const Container = styled.div(
  (props: ContainerProps) => css`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    margin-top: ${props.pathname === "/mercury"
      ? "95px"
      : props.pathname === "/venus"
      ? "74px"
      : props.pathname === "/earth"
      ? "64px"
      : props.pathname === "/mars"
      ? "87px"
      : props.pathname === "/jupiter"
      ? "39px"
      : props.pathname === "/saturn"
      ? "24px"
      : props.pathname === "/uranus"
      ? "63px"
      : "64px"};

    @media screen and (min-width: 768px) {
      padding: 0 40px;
      margin-top: ${props.pathname === "/mercury"
        ? "146px"
        : props.pathname === "/venus"
        ? "112px"
        : props.pathname === "/earth"
        ? "96px"
        : props.pathname === "/mars"
        ? "132px"
        : props.pathname === "/jupiter"
        ? "54px"
        : props.pathname === "/saturn"
        ? "27px"
        : props.pathname === "/uranus"
        ? "93px"
        : "96px"};
    }

    @media screen and (min-width: 1440px) {
      padding: 0 165px;
      margin-top: ${props.pathname === "/mercury"
        ? "126px"
        : props.pathname === "/venus"
        ? "126px"
        : props.pathname === "/earth"
        ? "126px"
        : props.pathname === "/mars"
        ? "126px"
        : props.pathname === "/jupiter"
        ? "96px"
        : props.pathname === "/saturn"
        ? "70px"
        : props.pathname === "/uranus"
        ? "126px"
        : "126px"};
    }
  `
);

interface ContentProps {
  pathname: string;
}

const Content = styled.div(
  (props: ContentProps) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: flex-end;
      column-gap: ${props.pathname === "/mercury"
        ? "300px"
        : props.pathname === "/venus"
        ? "245px"
        : props.pathname === "/earth"
        ? "220px"
        : props.pathname === "/mars"
        ? "277px"
        : props.pathname === "/jupiter"
        ? "154px"
        : props.pathname === "/saturn"
        ? "112px"
        : props.pathname === "/uranus"
        ? "216px"
        : "220px"};
    }
  `
);

interface ImageProps {
  pathname: string;
}

const ImageBlock = styled.div(
  (props: ImageProps) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${props.pathname === "/mercury"
      ? "98px"
      : props.pathname === "/venus"
      ? "76px"
      : props.pathname === "/earth"
      ? "67px"
      : props.pathname === "/mars"
      ? "88px"
      : props.pathname === "/jupiter"
      ? "41px"
      : props.pathname === "/saturn"
      ? "24px"
      : props.pathname === "/uranus"
      ? "65px"
      : "67px"};

    @media screen and (min-width: 768px) {
      margin-bottom: ${props.pathname === "/mercury"
        ? "130px"
        : props.pathname === "/venus"
        ? "95px"
        : props.pathname === "/earth"
        ? "79px"
        : props.pathname === "/mars"
        ? "115px"
        : props.pathname === "/jupiter"
        ? "37px"
        : props.pathname === "/saturn"
        ? "11px"
        : props.pathname === "/uranus"
        ? "77px"
        : "79px"};
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  `
);

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
      ? "256px"
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
      ? "256px"
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
        ? "422px"
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
        ? "422px"
        : props.pathname === "/uranus"
        ? "290px"
        : "285px"};
    }

    @media screen and (min-width: 1024px) {
      width: ${props.pathname === "/mercury"
        ? "290px"
        : props.pathname === "/venus"
        ? "400px"
        : props.pathname === "/earth"
        ? "450px"
        : props.pathname === "/mars"
        ? "336px"
        : props.pathname === "/jupiter"
        ? "582px"
        : props.pathname === "/saturn"
        ? "666px"
        : props.pathname === "/uranus"
        ? "458px"
        : "450px"};

      height: ${props.pathname === "/mercury"
        ? "290px"
        : props.pathname === "/venus"
        ? "400px"
        : props.pathname === "/earth"
        ? "450px"
        : props.pathname === "/mars"
        ? "336px"
        : props.pathname === "/jupiter"
        ? "582px"
        : props.pathname === "/saturn"
        ? "666px"
        : props.pathname === "/uranus"
        ? "458px"
        : "450px"};
    }
  `
);

const GeologyBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ImageGeologyProps {
  pathname: string;
}

const ImageGeology = styled.img(
  (props: ImageGeologyProps) => css`
    width: 60px;
    height: 60px;
    margin-top: ${[props.pathname === "/saturn" ? "-70px" : "-20px"]};

    @media screen and (min-width: 768px) {
      width: 113px;
      height: 149px;
      margin-top: ${[props.pathname === "/saturn" ? "-120px" : "-45px"]};
    }

    @media screen and (min-width: 1024px) {
      width: 163px;
      height: 199px;
      margin-top: ${[props.pathname === "/saturn" ? "-195px" : "-75px"]};
    }
  `
);

const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    max-width: 350px;
    align-items: flex-start;
  }
`;

const InfoContainer = styled.div`
  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 339px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

const Name = styled.h2`
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 62px;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 23px 0;
    font-size: 80px;
    line-height: 103.52px;
  }
`;

const Description = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 32px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 25px;
  }
`;

const Source = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

const SourceLink = styled.a`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    line-height: 25px;
  }
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
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 30px;
    margin: 78px 0 56px;
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

  @media screen and (min-width: 1024px) {
    width: 255px;
    height: 128px;
    row-gap: 4px;
    padding: 20px 0 0 23px;
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

  @media screen and (min-width: 1024px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
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

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    line-height: 51.76px;
    letter-spacing: -1.5px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    margin-top: 93px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 27px;
  }
`;
