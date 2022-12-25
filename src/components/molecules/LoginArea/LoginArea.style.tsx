import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 240px;
`;

export const BottomLogin = styled.div`
    width: 240px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`;

export const WrapButton = styled.button`
    margin: 15px 0px 15px 10px;
    padding: 9px 10px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkPurple};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        margin: 15px 0px 15px 19px;
        padding: 5px 15px;
    }
`;

export const ErrMsgContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ErrMsg = styled.div`
    width: 70%;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const Instructions = styled.div`
    justify-content: center;
    text-align: center;
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem;
    position: relative;
    margin-left: 10%;
    margin-top: 7px;
`;
