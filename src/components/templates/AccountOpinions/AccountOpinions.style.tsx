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

export const NoOpinions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    p {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 400px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const NoOpinionsIcon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
