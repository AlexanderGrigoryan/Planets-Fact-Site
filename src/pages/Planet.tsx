import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Line from "../components/Line";
import data from "../data.json";



function Planet() {
  

  const params = useParams();

  const planet = data.find(
    (element) => element.name.toLowerCase() === params.name
  );

  return (
    <>
      <Navigation>
        <Links>Overview</Links>
        <Links>Structure</Links>
        <Links>Surface</Links>
      </Navigation>
      <Line></Line>
      <Container>
        <Content>
          <Image src={planet?.images.planet} alt="planet image" />
          <Name>{planet?.name}</Name>
          <Description>{planet?.overview.content}</Description>
          <Source>
            Source :{" "}
            <SourceLink target="_blank" href={planet?.overview.source}>
              Wikipedia
            </SourceLink>
          </Source>
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
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Links = styled.a`
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.9285714626312256px;
  text-transform: uppercase;
  color: #ffffff;
`;

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
