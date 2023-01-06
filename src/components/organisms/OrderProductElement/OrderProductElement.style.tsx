import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: black;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 800px) {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ProductImage = styled.div`
    position: relative;
    height: 120px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }

    @media screen and (max-width: 810px) {
        height: 110px;
    }

    @media screen and (max-width: 600px) {
        height: 90px;
    }

    @media screen and (max-width: 450px) {
        height: 80px;
    }
`;

export const DiscountMark = styled.div`
    position: absolute;
    right: -10px;
    top: 10px;
    font-size: 25px;
`;

export const ProductDescription = styled.div`
    width: 70%;
    padding-top: 1%;
    justify-content: center;
    text-align: left;
    padding-left: 5%;
    padding-right: 10px;
    p {
        span {
            text-decoration: line-through;
            font-weight: 400;
        }
    }

    p:last-child {
        font-weight: 700;
    }

    @media screen and (max-width: 450px) {
        padding-left: 2%;
        padding-top: 0%;
        p {
            margin: 3px;
        }

        p:first-child {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
`;

export const ProductQuantity = styled.div`
    margin: 20px 0;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
    height: 80%;
    width: 65px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        width: 60px;
    }
`;
