import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-top: 12px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    width: 100%;
    min-width: 260px;
`;

export const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 700;
`;

export const Icon = styled.div`
    margin-top: 3px;
    margin-right: 10px;
    font-size: 35px;
`;

export const Title = styled.div``;

export const UserDescription = styled.div`
    p::first-letter {
        text-transform: capitalize;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    width: 85%;
    color: black;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
    div {
        margin-right: 10px;
    }
    border-bottom: 1px solid white;

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
`;

export const NavDescription = styled.div`
    padding-bottom: 4px;
`;
