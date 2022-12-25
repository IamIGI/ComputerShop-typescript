import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: fit-content;

    @media screen and (max-width: 450px) {
        max-width: 320px;
        width: 100%;
    }
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 15px 0 12px 0;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    border-bottom: 1px solid gray;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    color: ${({ theme }) => theme.colors.successDark};

    @media screen and (max-width: 450px) {
        font-size: 15px;
        padding: 13px 0 10px 0;
    }
`;

export const TitleDescription = styled.div`
    margin-left: 15px;
`;

export const InsideWrapper = styled.div`
    padding: 0 5px 0 10px;
    display: flex;
    flex-direction: column;
`;

export const ListOfProducts = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin: auto;
    font-size: ${({ theme }) => theme.fontSize.l};
    p {
        font-weight: 700;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        p {
            margin: 5px 0 4px 0;
        }
    }
`;

export const Product = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 80px;
    margin-bottom: 10px;
`;

export const Description = styled.div`
    min-width: 300px;
    grid-column: 1/2;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    span {
        font-weight: 700;
        margin-right: 20px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        min-width: 240px;
        max-width: 240px;

        span {
            margin-right: 6px;
        }
    }
`;

export const Quantity = styled.div`
    grid-column: 2/2;
    padding-left: 20px;
    border-left: 1px solid gray;

    @media screen and (max-width: 450px) {
        padding-left: 13px;
    }
`;

export const BottomSection = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
`;
