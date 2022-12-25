import styled from 'styled-components';

export const DataShortSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 5px;
    flex-wrap: wrap;

    @media screen and (max-width: 650px) {
        gap: 0px;
    }
`;

export const Data = styled.div`
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin-top: 25px;

    @media screen and (max-width: 650px) {
        width: 110px;
        margin-top: 10px;
    }
`;

export const Icon = styled.div`
    font-size: 70px;
    margin-bottom: 20px;

    @media screen and (max-width: 650px) {
        font-size: 50px;
        margin-bottom: 10px;
    }
`;

export const Numbers = styled.div`
    font-size: 27px;
    color: ${({ theme }) => theme.colors.successDark};
    margin-bottom: 10px;

    @media screen and (max-width: 650px) {
        font-size: 17px;
        margin-bottom: 4px;
    }
`;

export const Desc = styled.div`
    line-height: 20px;
    font-weight: 700;
`;
