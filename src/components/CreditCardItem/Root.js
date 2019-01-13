import styled from "styled-components";

export default styled.section`
  display: flex;
  height: 36px;
  background-color: ${props =>
    props.theme.isSelected ? "rgba(125, 230, 198, 0.24)" : "transparent"};
  justify-content: center;
  width: 100%;
  cursor: pointer;

  :hover {
    background-color: rgba(125, 230, 198, 0.15);
  }

  div {
    color: ${props => (props.theme.width === "xs" ? "white" : "#474971")};
    flex: 1;
    margin-right: ${props => (props.theme.isSelected ? "12px" : "24px")};
    margin-left: 8px;
    font-weight: bold;
    display: flex;
  }
`;
