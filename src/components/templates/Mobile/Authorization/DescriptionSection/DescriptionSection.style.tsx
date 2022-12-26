import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    p {
        margin: 0px;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 670px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.l};
            height: 50px;
            padding-bottom: 10px;
        }
    }

    @media screen and (max-width: 420px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.successDark};
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;
