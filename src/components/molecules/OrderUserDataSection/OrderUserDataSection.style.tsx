import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 2%;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media screen and (max-width: 750px) {
        justify-content: space-between;
        height: fit-content;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 450px) {
        flex-direction: column;
        height: fit-content;
        margin-bottom: 10px;
        gap: 10px;
    }
`;

export const DeliveryData = styled.div`
    height: 100%;
    width: 45%;
    margin-right: 10%;

    @media screen and (max-width: 750px) {
        width: 48%;
        margin-right: 0%;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const UserData = styled.div`
    height: 100%;
    width: 45%;

    @media screen and (max-width: 750px) {
        width: 48%;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const UserDataDescription = styled.div`
    padding-left: 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};

    ul {
        margin-top: 10px;
        padding-left: 10px;
    }

    li {
        list-style: none;
        padding: 3px 0;

        a {
            text-decoration: none;
        }
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        padding-left: 5px;
    }

    @media screen and (max-width: 450px) {
        padding-left: 0px;
    }
`;
