import styled from "styled-components";

export default styled.div`
  min-width: 320px;
  max-width: ${props => (props.theme.width === "xs" ? "unset" : "320px")};
`;
