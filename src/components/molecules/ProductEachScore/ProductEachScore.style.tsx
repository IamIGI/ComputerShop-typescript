import styled from 'styled-components';

interface Props {
    percentage: number;
}

export const Wrapper = styled.div`
    height: fit-content;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const QuantityOfGivenScore = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 30px;
    justify-content: center;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    color: grey;
    font-weight: 500;
    :hover {
        color: orange;
    }

    @media screen and (max-width: 1000px) {
        margin-top: 5px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 500px) {
        margin-top: 5px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ScoreStar = styled.div`
    grid-column: 1/2;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Icon = styled.div``;

export const Bar = styled.div<Props>`
    grid-column: 2/3;
    width: 95%;
    margin-left: 2.5%;
    height: 15px;
    border-radius: 40px;
    background-color: lightgrey;
    margin-top: 3px;

    div {
        width: ${({ percentage }) => `${percentage}%`};
        transition: width 1s;
        height: 100%;
        background-color: orange;
        border-radius: 40px;
    }

    @media screen and (max-width: 1000px) {
        height: 10px;
        margin-top: 5px;
    }

    @media screen and (max-width: 500px) {
        height: 7px;
        margin-top: 5px;
    }
`;

export const Number = styled.div`
    grid-column: 3/3;
    text-align: center;
`;
