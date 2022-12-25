import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const ArticleWrapper = styled(NavLink)`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    height: fit-content;
    width: 300px;
    height: 400px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 5px;

    transform: scale(1, 1);
    transition: transform 0.5s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.02, 1.02);
    }

    @media screen and (max-width: 685px) {
        width: fit-content;
        height: fit-content;
        margin: 5px 15px 7px 15px;
    }

    @media screen and (max-width: 475px) {
        &:hover {
            transform: scale(1, 1);
        }

        width: 300px;
        height: 400px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    height: 100%;
    max-height: 350px;

    @media screen and (max-width: 685px) {
        flex-direction: row;
        align-items: flex-start;
    }

    @media screen and (max-width: 475px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Image = styled.div`
    width: 100%;
    max-width: 300px;
    min-height: 215px;

    justify-content: center;
    align-content: center;

    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
    padding: 5px;
    img {
        width: 100%;

        max-height: 200px;
    }
`;

export const Description = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    h1 {
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin: 0px;
        padding: 0px;
    }
    p {
        width: 100%;
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
