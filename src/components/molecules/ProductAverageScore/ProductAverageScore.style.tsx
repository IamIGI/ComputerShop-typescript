import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
`;

export const Score = styled.div`
    font-size: ${({ theme }) => theme.fontSize.omegaBig};

    span {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        color: ${({ theme }) => theme.colors.darkGrey};
    }

    @media screen and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        span {
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
        span {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }
    }
`;
export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    @media screen and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    @media screen and (max-width: 400px) {
        font-size: ${({ theme }) => theme.fontSize.s_minus};
    }
`;

export const NumberOfOpinions = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: ${({ theme }) => theme.colors.darkGrey};

    @media screen and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;
