import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
    min-width: 240px;
`;

export const BottomRegister = styled.div`
    width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    :hover {
        cursor: pointer;
    }
`;

export const ButtonSection = styled.div`
    text-align: center;
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

export const ErrMsg = styled.div`
    width: 70%;
    text-align: center;
    margin-left: 14%;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
`;

export const UnValid = styled.span`
    color: ${({ theme }) => theme.colors.error};
`;

export const Instructions = styled.div`
    text-align: center;
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem;
    position: relative;
    bottom: -7px;
    margin-left: 20%;
`;
