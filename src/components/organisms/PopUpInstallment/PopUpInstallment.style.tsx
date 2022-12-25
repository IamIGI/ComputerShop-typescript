import styled from 'styled-components';

export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 650px;
    min-width: 360px;

    @media screen and (max-width: 800px) {
        min-width: 500px;
    }

    @media screen and (max-width: 600px) {
        min-width: 450px;
    }

    @media screen and (max-width: 500px) {
        min-width: 400px;
    }

    @media screen and (max-width: 440px) {
        min-width: 360px;
    }
`;

export const InsideWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 10px 25px 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    text-align: center;
`;

export const Title = styled.div`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    padding: 20px 0px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    border-bottom: 1px solid grey;

    @media screen and (max-width: 1100px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 900px) {
        padding: 15px 0px 15px 7%;
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ProductSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 25px;
    align-items: center;
`;

export const Image = styled.div`
    margin: 10px 0px 0px 0px;
    img {
        max-width: 140px;
        width: 100%;
    }
`;

export const ProductName = styled.div`
    width: 100%;
    font-size: 22px;

    @media screen and (max-width: 1100px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 950px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 950px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 440px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const InstallmentSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 950px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const InstallmentDescription = styled.div``;

export const PriceField = styled.div`
    padding: 7px 25px 7px 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px 0px, rgb(0 0 0 / 8%) 0px 0px 4px 2px;
    border-radius: 10px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const InstallmentField = styled.div`
    padding: 7px 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px 0px, rgb(0 0 0 / 8%) 0px 0px 4px 2px;
    border-radius: 10px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 950px) {
        width: 100px;
    }
`;

export const InstallmentCurrency = styled.div`
    position: absolute;
    color: grey;
    top: 7px;
    right: 15px;

    @media screen and (max-width: 950px) {
        right: 12px;
    }
`;

export const SliderSection = styled.div`
    width: 80%;
    margin: auto;
`;

export const SumUp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 950px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const SumUpDescription = styled.div``;

export const SumUpAmount = styled.div`
    width: 110px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 950px) {
        width: 100px;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const Currency = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 950px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const Info = styled.div`
    color: grey;
    p {
        margin: 0px;
    }
    @media screen and (max-width: 1100px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 750px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;
