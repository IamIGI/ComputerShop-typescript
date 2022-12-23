import styled from 'styled-components';

export const WrapperTop = styled.div`
    padding: 1% 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        padding: 1% 5%;
    }

    @media screen and (max-width: 550px) {
        padding: 1% 9% 1% 5%;
    }
`;

export const WrapperBottom = styled.div`
    margin-left: 4.5%;
    margin-right: 1%;
    padding: 0% 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        padding: 0%;
    }
`;

export const CircleCheck = styled.div`
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const Description = styled.div`
    margin-top: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 600px) {
        margin-top: 8px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 500px) {
        margin-top: 6px;
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media screen and (max-width: 400px) {
        margin-top: 6px;
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const Line = styled.div`
    margin: 0% 1%;
    width: 20%;
    margin-bottom: 3%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
