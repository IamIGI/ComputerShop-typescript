import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GreenButtonLink = styled(NavLink)`
    margin: 0px;
    color: white;
    background-color: green;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 400;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    color: white;
    text-decoration: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        width: 100%;
    }
`;
