import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 5px;
`;

export const DiscountSize = styled.div`
    margin-left: auto; //that could be problem
    text-align: right;
    justify-content: right;
    align-items: right;
`;

export const PriceSection = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    margin-left: auto;

    @media screen and (max-width: 1100px) {
        margin-top: 5px;
    }
`;

export const OldPrice = styled.div`
    text-decoration: line-through;
`;

export const CurrentPrice = styled.div`
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 1400px) {
        font-size: 22px;
    }
`;

export const BuySection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;

    @media screen and (max-width: 1300px) {
        width: 100%;
        justify-content: center;
    }

    @media screen and (max-width: 1100px) {
        margin-bottom: 5px;
    }
`;

export const BuyButtonMargin = styled.div`
    margin-left: 10px;
`;

export const BuyButton = styled(Button)`
    color: white;
    background-color: green;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 400;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }

    @media screen and (max-width: 625px) {
        width: 100%;
    }
`;

export const BuyIcon = styled.div`
    font-size: 25px;
    margin-right: 10px;

    @media screen and (max-width: 1400px) {
        font-size: 22px;
    }
`;

export const Separator = styled.hr`
    width: 80%;
`;

export const ArticleLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    color: black;
    text-decoration: none;
`;
