import styled from "styled-components";

function Line() {
  return <LineBlock></LineBlock>;
}

export default Line;

const LineBlock = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;
