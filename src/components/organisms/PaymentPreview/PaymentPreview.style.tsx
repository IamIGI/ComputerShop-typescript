import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border-top: 1px solid gray;
`;

export const Section = styled.div`
    margin-left: 5%;
    width: 80%;

    @media screen and (max-width: 1510px) {
        width: 90%;
    }
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const List = styled.ul`
    padding: 0px;

    list-style: none;
    li {
        width: 100%;

        margin-bottom: 15px;
    }

    li:last-child {
        padding-top: 30px;
        border-top: 1px solid grey;
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
    }

    @media screen and (max-width: 500px) {
        li {
            margin-bottom: 10px;
        }

        li:last-child {
            padding-top: 15px;
        }
    }
`;

export const Name = styled.div`
    text-align: left;
    padding-left: 20px;

    @media screen and (max-width: 500px) {
        padding-left: 10px;
    }
`;

export const Price = styled.div`
    padding-right: 20px;
`;

export const FinishSection = styled.div`
    width: 100%;
`;

export const LocalButton = styled.button`
    margin: 15px 0;
    padding: 8px 25px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: 10px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    min-width: 115px;
    width: 80%;
    margin-left: 10%;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
        background-color: ${({ disabled }) => (disabled ? '8FCB81' : '#0f9922')};
        color: ${({ disabled }) => (disabled ? '#737C8E' : 'black')};
    }

    @media screen and (max-width: 1510px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const AlertDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 60%;
`;

export const NoUserAlert = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const AlertIcon = styled.div`
    margin-right: 14px;
    color: red;
`;
