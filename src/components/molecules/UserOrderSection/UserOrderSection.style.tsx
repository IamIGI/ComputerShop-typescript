import styled from 'styled-components';

export const OrderSection = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        height: 120px;
    }

    @media screen and (max-width: 600px) {
        height: fit-content;

        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 10px;
    }
`;

export const OrderSectionTitle = styled.div`
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
    justify-content: left;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin-bottom: 0px;
        height: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 0px;
        height: 30px;
    }

    @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.fontSize.l};
        margin-bottom: 0px;
        height: 25px;
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
