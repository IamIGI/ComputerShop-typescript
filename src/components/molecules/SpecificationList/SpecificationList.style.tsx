import styled from 'styled-components';

export const List = styled.ul`
    li {
        border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
        list-style: none;
    }

    li:nth-child(2n) {
        background-color: ${({ theme }) => theme.colors.lightPurple};
    }

    li:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
    }
    line-height: 20px;

    @media screen and (max-width: 900px) {
        padding: 0px;
    }

    @media screen and (max-width: 500px) {
        line-height: 18px;
    }
`;

export const LiWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 7px 0;

    @media screen and (max-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.s};
        padding: 5px 0;
    }
`;

export const LiName = styled.div`
    width: 35%;
    min-width: 100px;
    padding-left: 7%;
    margin-right: 15px;

    @media screen and (max-width: 700px) {
        padding-left: 3%;
    }
`;
export const LiDesc = styled.div`
    width: 40%;
    p {
        line-height: 15px;
    }

    @media screen and (max-width: 1000px) {
        width: 60%;
    }

    @media screen and (max-width: 700px) {
        p {
            margin: 8px 0;
        }
    }

    @media screen and (max-width: 500px) {
        p {
            margin: 6px 0;
        }
    }
`;
