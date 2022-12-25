import styled from 'styled-components';

export const TopWrapper = styled.div`
    width: 630px;
    @media screen and (max-width: 1200px) {
        width: 800px;
    }

    @media screen and (max-width: 900px) {
        width: 90%;
        margin: auto;
        height: fit-content;
    }
`;

export const BottomWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: fit-content;
    @media screen and (max-width: 900px) {
        padding: 0px 20px;
    }

    @media screen and (max-width: 625px) {
        width: 100%;
    }
`;

export const CarouselBox = styled.div`
    width: 100%;
    height: fit-content;
`;

export const HandyMenuSmallScreen = styled.div`
    margin: auto;
    width: 90%;
    display: none;
    border-top: 1px solid gray;

    @media screen and (max-width: 1200px) {
        display: flex;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    @media screen and (max-width: 1100px) {
        padding-top: 10px;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const DataBuyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 20px;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    @media screen and (max-width: 1100px) {
        padding-top: 10px;
        gap: 5px;
    }

    @media screen and (max-width: 900px) {
        flex-direction: row;
        align-items: flex-start;
    }

    @media screen and (max-width: 625px) {
        width: 100%;
    }
`;
export const PrevData = styled.div`
    display: flex;
    order: 1;
    @media screen and (max-width: 1300px) {
        width: 400px;
        order: 2;
    }

    @media screen and (max-width: 1050px) {
        width: 300px;
    }

    @media screen and (max-width: 900px) {
        width: fit-content;
    }

    @media screen and (max-width: 625px) {
        display: none;
    }
`;

export const BuySelector = styled.div`
    order: 2;
    @media screen and (max-width: 1300px) {
        width: 400px;
        order: 1;
    }

    @media screen and (max-width: 1050px) {
        width: 300px;
    }

    @media screen and (max-width: 900px) {
        width: 400px;
    }

    @media screen and (max-width: 700px) {
        width: 300px;
    }

    @media screen and (max-width: 625px) {
        max-width: 500px;
        width: 100%;
    }
`;
