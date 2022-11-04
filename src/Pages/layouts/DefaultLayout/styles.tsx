import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: auto;
  margin: 1rem auto;
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.DefaultBackgroundColor2};
`;
