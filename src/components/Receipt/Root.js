import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${props => (props.theme.width === "xs" ? "white" : "#474971")};
  }
`;
