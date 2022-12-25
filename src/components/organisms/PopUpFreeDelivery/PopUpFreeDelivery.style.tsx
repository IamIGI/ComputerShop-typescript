import styled from 'styled-components';

export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 650px;
    min-width: 600px;

    @media screen and (max-width: 950px) {
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
    font-size: 20px;

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

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 950px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 600px) {
        gap: 10px;
        flex-direction: column;
    }
`;

export const InfoDescription = styled.div``;

export const InfoCode = styled.div`
    padding: 7px 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px 0px, rgb(0 0 0 / 8%) 0px 0px 4px 2px;
    border-radius: 10px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    margin-left: 20px;

    :hover {
        cursor: pointer;
        box-shadow: rgb(0 100 0 / 30%) 0px 4px 8px 0px, rgb(0 100 0 / 30%) 0px 0px 4px 2px;
    }

    @media screen and (max-width: 950px) {
        margin-left: 10px;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 600px) {
        margin-left: 0px;
    }

    @media screen and (max-width: 400px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
