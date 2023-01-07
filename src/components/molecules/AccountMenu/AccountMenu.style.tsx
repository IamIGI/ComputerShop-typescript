import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 2%;
    width: 100%;
    z-index: 3;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 1210px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }
    }

    @media screen and (max-width: 1050px) {
        h2 {
            display: none;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;

    @media screen and (max-width: 1050px) {
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }

    @media screen and (max-width: 850px) {
        gap: 15px;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 625px) {
        gap: 8px;
    }

    @media screen and (max-width: 600px) {
        justify-content: space-evenly;
        align-items: flex-start;
    }
`;

export const StyledLink = styled(NavLink)`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    width: 91%;
    margin-right: 5%;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid transparent;

    div {
        margin-right: 10px;
    }

    :hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
        span {
            color: ${({ theme }) => theme.colors.success};
        }
    }

    &.active {
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
        span {
            color: ${({ theme }) => theme.colors.success};
        }
    }

    @media screen and (max-width: 1210px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 1050px) {
        width: 160px;
        margin-right: 0%;
    }

    @media screen and (max-width: 850px) {
        width: 150px;
        justify-content: center;
    }

    @media screen and (max-width: 700px) {
        width: 135px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 600px) {
        align-items: center;
        height: 40px;
        width: 100%;
        margin-right: 0%;
        width: 50px;
        div {
            margin-right: 0px;
        }
        span {
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
    }

    @media screen and (max-width: 470px) {
        width: fit-content;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const Description = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
