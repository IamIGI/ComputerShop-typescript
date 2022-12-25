import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Category = styled.div`
    padding: 0px 0px 0px 20px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 500px) {
        h1 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }
    }
`;

export const ArticlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    gap: 20px;
`;
