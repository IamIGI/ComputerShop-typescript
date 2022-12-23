import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
    &.active {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const Home = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 4px 12px 6px 6px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    border-bottom-left-radius: 30px;
    border-bottom: 2px solid grey;
    border-left: 2px solid grey;

    margin-bottom: 5px;
    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        padding: 2px 6px 3px 3px;
        border-bottom-left-radius: 20px;
        margin-bottom: 12px;
    }

    :hover {
        border-color: ${({ theme }) => theme.colors.successDark};
        /* background-color: ${({ theme }) => theme.colors.grey}; */
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;
export const Title = styled.div`
    margin-left: 17px;
    color: black;
    @media screen and (max-width: 650px) {
        margin-left: 10px;
    }
`;

export const Icon = styled.div`
    border: 2px solid gray;
    border-radius: 50%;
    padding: 6px 8px 2px 8px;
    background-color: ${({ theme }) => theme.colors.lightPurple};
`;
