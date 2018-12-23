import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-grow: 1;
  height: 40px;
  box-shadow: 0 0.5px 0 0 #ffffff, 0 -0.5px 0 0 #ffffff;
  background-image: linear-gradient(264deg, #3c3e64, #1d1e2a);
  padding: 10px 20px;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;
