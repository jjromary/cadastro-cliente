import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    border-bottom: 1px solid ${props => props.theme.DefaultBorderColor};
`;
