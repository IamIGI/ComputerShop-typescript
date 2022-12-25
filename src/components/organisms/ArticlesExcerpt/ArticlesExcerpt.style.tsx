import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ArticleContainer = styled(NavLink)`
    max-width: 940px;
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7px 10px;
    height: fit-content;
    gap: 10px;
    width: fit-content;
    border-bottom: 1px solid grey;
    border-radius: 10px;

    :hover {
        cursor: pointer;
        border-bottom: 1px solid transparent;
        box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
        border-radius: 10px;
    }
`;

export const DescriptionContainer = styled.div`
    max-width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 70%;
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin: 0px;
        padding: 0px;
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }

    @media screen and (max-width: 450px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const PrevImage = styled.div`
    width: 30%;
    max-width: 300px;
    justify-content: center;
    align-self: center;
    img {
        width: 100%;
        max-height: 200px;
    }
`;
