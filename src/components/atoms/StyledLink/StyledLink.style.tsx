import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    padding: 6px 10px 13px 10px;
    transition: 0.5s ease;

    @media screen and (max-width: 1100px) {
        border: none;
        padding: 10px;
        justify-content: flex-start;
    }

    @media screen and (max-width: 650px) {
        padding: 10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
        align-items: center;
    }

    &:hover {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }

    &.active {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const Icon = styled.div``;
export const BigIcon = styled.div`
    font-size: 25px;

    margin-right: 5px;
    padding: 3px 20px 3px 5px;
    position: relative;

    border-right: 1px solid gray;
`;

export const LinkDescription = styled.div`
    margin-left: 10px;
`;
