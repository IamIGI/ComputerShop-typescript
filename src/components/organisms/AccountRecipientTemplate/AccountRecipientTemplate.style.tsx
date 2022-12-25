import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
`;

export const NoTemplates = styled.div`
    margin-left: 10px;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const FormWrapper = styled.div`
    margin-left: 10px;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
