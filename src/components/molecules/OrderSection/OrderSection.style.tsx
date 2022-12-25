import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        height: 120px;
    }

    @media screen and (max-width: 600px) {
        height: fit-content;

        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 10px;
    }
`;

export const OrderSectionDescription = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
    padding-left: 3%;

    @media screen and (max-width: 800px) {
        height: 80px;
    }

    @media screen and (max-width: 600px) {
        height: 70px;
    }

    @media screen and (max-width: 500px) {
        height: 60px;
    }

    @media screen and (max-width: 430px) {
        height: 50px;
    }
`;

export const Icon = styled.div`
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin-right: 14px;
    }
`;

export const Desc = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-right: 6px;

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
