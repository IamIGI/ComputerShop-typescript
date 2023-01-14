import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 90%;

    @media screen and (max-width: 800px) {
        width: 95%;
    }
`;

export const Section = styled.div`
    padding: 0 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.lightLightGrey};
    border-radius: 10px;
    gap: 10px;

    @media screen and (max-width: 470px) {
        gap: 7px;

        padding: 0 10px;
    }
`;

export const PrevImg = styled(NavLink)`
    text-decoration: none;
    color: black;
    width: 90px;
    justify-content: center;
    align-self: center;
    min-width: 80px;
    img {
        max-width: 100%;
        max-height: 100%;
    }

    @media screen and (max-width: 600px) {
        width: 80px;
    }

    @media screen and (max-width: 400px) {
        min-width: 65px;
    }
`;

export const Description = styled(NavLink)`
    text-decoration: none;
    color: black;
    width: 60%;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        margin: 0px;
    }
    p {
        margin: 0px;
    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
        p {
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }

    @media screen and (max-width: 470px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.s};
        }
        p {
            font-size: ${({ theme }) => theme.fontSize.s_minus};
        }
    }
`;

/** SetOpinion - button to display popUp element with new comment form */
export const SetOpinion = styled.button`
    border-radius: 15px;
    border: 1px solid gray;
    background-color: white;
    margin-left: 10%;

    min-width: 120px;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 5px 7px;

    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
    }

    @media screen and (max-width: 800px) {
        min-width: 120px;
        font-size: ${({ theme }) => theme.fontSize.s};
        padding: 5px 7px;
        margin-left: 0%;
    }

    @media screen and (max-width: 470px) {
        font-size: ${({ theme }) => theme.fontSize.s_minus};
        padding: 5px 7px;
        min-width: 90px;
    }

    @media screen and (max-width: 400px) {
        font-size: ${({ theme }) => theme.fontSize.s_minus};
        padding: 5px 0px;
        min-width: 70px;
    }
`;
