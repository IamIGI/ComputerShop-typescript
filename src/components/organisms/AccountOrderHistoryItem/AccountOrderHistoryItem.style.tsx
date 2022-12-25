import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding-top: 3%;
    width: 90%;
    margin-left: 5%;
`;

export const OrderTitleSection = styled.div`
    width: 100%;
    justify-content: left;
    text-align: left;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

    @media screen and (max-width: 1050px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 600px) {
        padding-bottom: 5px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const HistorySection = styled.div`
    width: 100%;
    margin-bottom: 100px;

    @media screen and (max-width: 1050px) {
        margin-bottom: 50px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 20px;
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

export const ProductSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;

    @media screen and (max-width: 800px) {
        margin-top: 20px;
    }

    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
`;

export const Line = styled.div`
    width: 100%;
    margin-bottom: 3%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;
