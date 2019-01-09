import styled from "styled-components";

export default styled.section`
  display: flex;
  height: 36px;
  min-width: 150px;
  align-items: center;
  cursor: pointer;

  p {
    color: ${props => (props.theme.width === "xs" ? "white" : "#474971")};
    text-align: end;
    margin-right: ${props => (props.theme.isSelected ? "12px" : "24px")};
    margin-left: 8px;
  }
`;
