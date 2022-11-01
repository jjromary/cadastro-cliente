import styled from "styled-components";

export const FormContainer = styled.main`
    width: 1040px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const FormContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    gap: 0.8rem;
    margin-right: 1rem;

    input {
        width: 100%;
        height: 2.5rem;
        padding: 0 0.5rem;
        flex: 1;
    }
`;

export const RegisterButton = styled.button`
    width: 100%;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.DefaultButtonColor};
    color: ${props => props.theme.DefaultFieldTextColor};

    &:not(:disabled)&:hover {
        background-color: ${props => props.theme.DefaultHoverColor};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
`;
