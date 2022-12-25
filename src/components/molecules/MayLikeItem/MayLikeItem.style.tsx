import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    position: relative;
    a,
    a:hover,
    a:visited,
    a:active {
        color: inherit;
        text-decoration: none;
    }

    margin: 10px 0;
    max-width: 290px;
    width: 100%;
    height: 240px;
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    transform: scale(1, 1);
    transition: transform 0.5s ease;

    &:hover {
        z-index: 5;
        transform: scale(1.03, 1.03);
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;

        button {
            color: ${({ theme }) => theme.colors.success};
            border: 1px solid ${({ theme }) => theme.colors.success};
        }
    }
`;
export const Link = styled(NavLink)`
    text-decoration: none;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    height: 100%;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    img {
        max-width: 164px;
    }

    h1 {
        height: fit-content;
        width: 95%;
        margin-left: 2.5%;
        color: red;

        font-size: ${({ theme }) => theme.fontSize.m};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }

    @media screen and (max-width: 1800px) {
        img {
            max-height: auto;
            max-width: 150px;
        }
    }

    @media screen and (max-width: 1600px) {
        min-height: 200px;
        img {
            max-height: auto;
            max-width: 140px;
        }

        h1 {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 1100px) {
        h1 {
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }

    @media screen and (max-width: 650px) {
        min-height: 180px;
        img {
            max-height: auto;
            max-width: 120px;
        }

        h1 {
            margin: 0px;
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }

    @media screen and (max-width: 1100px) {
        min-height: 190px;
    }
`;

export const ItemName = styled.div``;

export const ItemImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px) {
        min-height: 150px;
    }

    @media screen and (max-width: 650px) {
        min-height: 120px;
    }
`;

export const ProductInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Bottom = styled.div`
    height: 100%;
    padding-left: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    span {
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSize.l};
        color: black;
    }

    @media screen and (max-width: 1100px) {
        padding-left: 5%;
    }

    @media screen and (max-width: 650px) {
        span {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const PriceSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
`;
export const PriceOldValue = styled.div`
    text-decoration: line-through;
    margin-right: 10px;

    color: ${({ theme }) => theme.colors.darkGrey};

    @media screen and (max-width: 1800px) {
        span {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 1100px) {
        margin-right: 5px;
        span {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }

    @media screen and (max-width: 650px) {
        margin-right: 5px;
        span {
            font-size: 12px;
        }
    }
`;

export const PriceValue = styled.div`
    span {
        color: ${({ theme }) => theme.colors.successDark};
        font-weight: 700;
    }

    @media screen and (max-width: 1100px) {
        span {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 650px) {
        span {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
`;

export const NormalScreen = styled.div`
    display: flex;

    @media screen and (max-width: 1600px) {
        display: none;
    }
`;
