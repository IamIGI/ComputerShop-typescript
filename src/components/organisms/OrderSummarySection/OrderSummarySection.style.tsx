import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 40%;
    margin-left: 60%;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    ul {
        margin-top: 10px;
        padding-left: 10px;
    }

    li {
        list-style: none;
        padding: 7px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    li:last-child {
        font-weight: 700;
    }

    @media screen and (max-width: 950px) {
        width: 50%;
        margin-left: 50%;
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 60px;
    }

    @media screen and (max-width: 650px) {
        width: 60%;
        margin-left: 40%;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 450px) {
        width: 70%;
        margin-left: 30%;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 370px) {
        width: 75%;
        margin-left: 25%;
    }
`;
