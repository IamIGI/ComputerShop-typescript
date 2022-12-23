import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    width: fit-content;
`;

export const StarsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize.s_minus};
    margin-right: 1%;

    @media screen and (max-width: 860px) {
        padding-top: 3px;
        font-size: 9.5px;
    }

    @media screen and (max-width: 450px) {
        padding-top: 3px;
        font-size: 8px;
    }
`;

export const Date = styled.div`
    padding-top: 1px;
    margin-left: 1%;
    font-size: ${({ theme }) => theme.fontSize.l};

    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const Dot = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: grey;
`;
