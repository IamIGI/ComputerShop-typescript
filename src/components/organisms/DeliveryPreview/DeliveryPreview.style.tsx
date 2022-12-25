import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 7%;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-top: 1px solid grey;
    gap: 5px;
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
    }

    @media screen and (max-width: 1510px) {
        padding-left: 3%;
    }

    @media screen and (max-width: 960px) {
        margin-bottom: 5px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1510px) {
        padding-left: 3%;
    }
`;

export const LineSeparator = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        border-bottom: 1px solid gray;
        width: 80%;
        margin: auto;
    }
`;

export const Icon = styled.div`
    margin-right: 20px;
    padding-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const Description = styled.div`
    h5 {
        color: ${({ theme }) => theme.colors.darkGrey};
        line-height: 2px;
    }
    p {
        line-height: 2px;
    }

    @media screen and (max-width: 550px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;
