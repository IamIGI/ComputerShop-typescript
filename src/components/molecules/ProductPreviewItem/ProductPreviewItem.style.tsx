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

    margin: 15px 0;
    max-width: 290px;
    width: 100%;
    height: fit-content;
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    transform: scale(1, 1);
    transition: transform 0.3s ease;

    &:hover {
        z-index: 5;
        transform: scale(1.02, 1.02);
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;

        button {
            color: ${({ theme }) => theme.colors.success};
            border: 1px solid ${({ theme }) => theme.colors.success};
        }
    }

    @media screen and (max-width: 685px) {
        max-width: 550px;
        margin: 2px 0;

        &:hover {
            box-shadow: 3px 3px 5px 1px ${({ theme }) => theme.colors.grey};
        }
    }

    @media screen and (max-width: 500px) {
        &:hover {
            transform: scale(1, 1);
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

    @media screen and (max-width: 685px) {
        flex-direction: row;
        max-width: 550px;
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    width: 100%;
    img {
        max-height: auto;
        max-width: 164px;
    }

    h1 {
        height: fit-content;
        width: 100%;

        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
    }

    @media screen and (max-width: 685px) {
        max-width: 200px;
        padding-left: 5px;
        img {
            max-height: auto;
            max-width: 120px;
        }
        h1 {
            height: fit-content;
            width: 95%;
            font-size: ${({ theme }) => theme.fontSize.m_plus};
            font-weight: 700;
            text-align: left;
            color: ${({ theme }) => theme.colors.black};
        }
    }

    @media screen and (max-width: 480px) {
        max-width: 140px;
        justify-content: space-between;

        img {
            max-height: auto;
            max-width: 100px;
        }
        h1 {
            /* max-width: 50px; */
            margin: 0px;
            padding: 0px;
            height: 80px;
            font-size: ${({ theme }) => theme.fontSize.s_minus};
        }
    }
`;

export const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 685px) {
        max-width: 350px;
    }
`;

export const ProductOpinionsShort = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
    padding-top: 5px;
    /* margin: 0 3%; */
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    @media screen and (max-width: 685px) {
        border-top: 0px solid ${({ theme }) => theme.colors.grey};
    }
`;

export const Rating = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.micro_plus};

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.micro};
    }
`;

export const Opinions = styled.div`
    color: black;
    padding-top: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 5px;
`;

export const StyledRecord = styled.li`
    height: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    position: relative;

    font-size: ${({ theme }) => theme.fontSize.s_minus};
    color: ${({ theme }) => theme.colors.black};

    &:not(:last-child)::after {
        //every element without last
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
    }

    @media screen and (max-width: 550px) {
        height: 30px;
    }

    @media screen and (max-width: 440px) {
        width: 100%;
    }
`;

export const Bottom = styled.div`
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
    padding-bottom: 10px;

    @media screen and (max-width: 685px) {
        padding-left: 10px;
    }

    @media screen and (max-width: 440px) {
        span {
            font-size: ${({ theme }) => theme.fontSize.m};
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
`;

export const PriceValue = styled.div`
    span {
        color: ${({ theme }) => theme.colors.successDark};
        font-weight: 700;
    }
`;

export const NormalScreen = styled.div`
    display: flex;

    @media screen and (max-width: 550px) {
        display: none;
    }
`;

export const SmallScreen = styled.div`
    display: none;

    @media screen and (max-width: 550px) {
        display: flex;
    }
`;
