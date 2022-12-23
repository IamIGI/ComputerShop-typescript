import styled from 'styled-components';

export const HintSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom-right-radius: 20px;

    :hover {
        cursor: pointer;
        color: green;
    }
`;

export const HintIcon = styled.div`
    font-size: 30px;
    padding-top: 10px;
    margin-right: 20px;

    @media screen and (max-width: 1400px) {
        font-size: 25px;
    }

    @media screen and (max-width: 1100px) {
        padding-top: 5px;
    }
`;

export const HintDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: left;
`;

export const HintTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 24px;
    color: black;

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const HintAsk = styled.div`
    color: gray;
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;
