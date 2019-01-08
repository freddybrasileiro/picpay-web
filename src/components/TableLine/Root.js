import styled from "styled-components";

export default styled.section`
  padding: 10px 0px 2px 0px;
  border-bottom: solid 0.5px #d8d8d8;
  display: flex;
  min-width: 140px;

  p {
    color: ${props => (props.theme.width === "xs" ? "white" : "#474971")};

    :first-child {
      flex: 1;
    }
    :last-child {
      font-weight: bold;
      color: #7de6c6;
    }
  }
`;
