import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 30px;
    width: 95%;
    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
        line-height: 30px;
        margin: 0px;
        padding: 0px;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.l};
        color: grey;
    }

    span {
        color: black;
        font-weight: 700;
    }

    @media screen and (max-width: 1400px) {
        h1 {
            font-size: 21px;
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 1100px) {
        h1 {
            line-height: 22px;
        }
    }

    @media screen and (max-width: 450px) {
        padding-left: 15px;
        h1 {
            line-height: 20px;
            font-size: ${({ theme }) => theme.fontSize.l};
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }
`;
