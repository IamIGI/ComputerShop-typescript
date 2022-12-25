import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    a,
    a:hover,
    a:visited,
    a:active {
        color: inherit;
        text-decoration: none;
    }
    max-width: 380px;
    margin: 20px;
    height: fit-content;
    padding: 20px 20px 30px 20px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 30px;
    text-align: center;
    transform: scale(1, 1);
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.015, 1.015);
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 30px;
        cursor: pointer;

        h2 {
            color: red;
        }
    }

    @media screen and (max-width: 1100px) {
        max-width: 1000px;
    }

    @media screen and (max-width: 500px) {
        margin: 10px auto;
        &:hover {
            transform: scale(1, 1);
        }
    }
`;

export const InsideWrapper = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    text-decoration: none;

    @media screen and (max-width: 1100px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 650px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const ProductDescription = styled.div`
    width: 100%;
`;

export const PromoDescription = styled.div`
    width: 100%;
    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 20px;
        padding-bottom: 20px;
    }

    @media screen and (max-width: 1100px) {
        gap: 5px;
        padding-bottom: 10px;
    }
`;

export const Title = styled.div`
    margin-top: -10px;
    margin-left: 20px;
    text-align: left;

    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        margin-bottom: 10px;
    }
`;

export const Image = styled.div`
    margin-top: -20px;
    img {
        min-width: 300px;
        width: 95%;
    }

    @media screen and (max-width: 1100px) {
        img {
            min-width: 0;
            max-width: 290px;
        }
    }

    @media screen and (max-width: 650px) {
        margin-top: -10px;
        img {
            width: 200px;
        }
    }
`;

export const Description = styled.div`
    margin: 5px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Price = styled.div`
    margin-top: -10px;
    span {
        text-decoration: line-through;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    h3 {
        margin-top: -10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 650px) {
        h3 {
            margin-bottom: 25px;
        }
    }
`;
export const DescTimer = styled.div`
    h3 {
        margin-top: -10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
        span {
            color: red;
        }
    }

    @media screen and (max-width: 650px) {
        h3 {
            margin-top: -30px;
            margin-bottom: 10px;
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }
    }
`;
export const Timer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;
export const GivenTime = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-bottom: 5px;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 730px) {
        width: 60px;
        height: 60px;
    }
`;

export const Colon = styled.div`
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 730px) {
        margin-top: 8px;
    }
`;
