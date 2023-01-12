import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2%;
`;

export const TitleSection = styled.div`
    width: 100%;
    height: fit-content;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const UserOpinionSection = styled.div`
    width: 100%;
    height: fit-content;
`;
