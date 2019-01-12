import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  p {
    color: ${props => (props.theme.width === "xs" ? "white" : "#474971")};
    font-weight: bold;
  }
`;
