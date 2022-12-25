import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 15px;

    @media screen and (max-width: 650px) {
        top: 12px;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 30px;
    color: red;
    padding: 2px 4px 0 4px;
    border: 2px solid transparent;
    border-radius: 100%;

    :hover {
        cursor: pointer;
        border: 2px solid red;
        border-radius: 50%;
    }
`;

export const Icon = styled.div`
    font-size: 30px;
    color: red;
    padding: 2px 4px 0 4px;
    border: 2px solid transparent;
    border-radius: 100%;

    :hover {
        cursor: pointer;
        border: 2px solid red;
        border-radius: 50%;
    }
`;

export const Alert = styled.div`
    z-index: 5;
    position: absolute;
    top: 0px;
    left: 5px;
    border: 2px solid gray;
    background-color: white;
    border-radius: 30px;
    padding: 7px;
    min-width: 200px;
    width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: left; */
    text-align: left;
`;
