import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 960px) {
        padding-bottom: 10px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 20px;
`;

export const ItemSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top-left-radius: 20px;
    padding-left: 10px;
    padding-right: 3px;
`;

export const ImageArea = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    img {
        margin-top: 10px;
        margin-left: 5px;
        height: 80px;
        width: 95px;
        margin: auto;
    }

    @media screen and (max-width: 1510px) {
        img {
            margin-top: 0px;
            height: 75px;
            width: 85px;
        }
    }

    @media screen and (max-width: 960px) {
        img {
            margin-top: 10px;
            height: 80px;
            width: 95px;
        }
    }

    @media screen and (max-width: 550px) {
        img {
            margin-top: 0px;
            height: 75px;
            width: 85px;
        }
    }

    @media screen and (max-width: 450px) {
        img {
            margin-top: 5px;
            height: 70px;
            width: 80px;
        }
    }
`;

export const DescriptionArea = styled.div`
    margin-left: 10px;
    width: 100%;
    max-width: 220px;

    @media screen and (max-width: 1510px) {
        max-width: 200px;
    }

    @media screen and (max-width: 960px) {
        max-width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    @media screen and (max-width: 710px) {
        max-width: 60%;
    }

    @media screen and (max-width: 610px) {
        max-width: 55%;
    }

    @media screen and (max-width: 500px) {
        max-width: 50%;
    }
    @media screen and (max-width: 450px) {
        max-width: 45%;
        margin-left: 5px;
    }
`;

export const PriceArea = styled.div`
    width: 110px;
    padding: 0 5px;
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Title = styled.div`
    font-size: 15px;
    width: fit-content;
    margin-top: 10px;
    font-weight: 700;

    @media screen and (max-width: 1510px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
    }
`;

export const DescriptionBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 960px) {
        width: 100%;
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const OldPrice = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    span {
        text-decoration: line-through;
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const CurrentPrice = styled.div`
    font-size: 15px;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const List = styled.div`
    list-style: none;

    li:not(:last-child) {
        border-bottom: 1px solid grey;
    }
`;

export const Icon = styled.div`
    justify-content: center;
    text-align: center;
    margin: 25px 44px;
    font-size: ${({ theme }) => theme.fontSize.xxl};

    @media screen and (max-width: 450px) {
        margin: 25px 20px 10px 44px;
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const DescriptionAreaMissing = styled.div`
    margin-right: 20px;
    margin-top: 12px;
    p {
        color: ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 50%;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple};

        border: 1px solid ${({ theme }) => theme.colors.grey};
    }

    @media screen and (max-width: 1510px) {
        width: 35px;
        height: 35px;
    }

    @media screen and (max-width: 450px) {
        width: 30px;
        height: 30px;
    }
`;
