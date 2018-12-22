import styled from "styled-components";
import pxToRem from "utils/pxToRem";

export default styled.div`
  display: flex;
  margin-top: ${pxToRem(4)};

  p {
    margin-left: 6px;
  }

  p:first-child {
    margin-left: 0px;
  }
`;
