import styled from "styled-components";

export const StyledApp = styled.div`
  text-align: center;
  h1 {
    color: ${(props) => props.color};
    &:hover {
      color: red;
    }
  }
`;