import styled from 'styled-components';

export const InfoSection = styled.div`
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap; //change later for wrap, first you have to set width od children components
    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap; //change later for wrap, first you have to set width od children components
    align-items: center;
    margin-top: 40px;
`;

export const IconInfo = styled.div`
    font-size: 70px;
    margin-left: 1%;
    margin-right: 40px;

    @media screen and (max-width: 730px) {
        font-size: 50px;
        margin-right: 30px;
    }

    @media screen and (max-width: 500px) {
        font-size: 45px;
        margin-right: 10px;
    }
`;

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const TitleInfo = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    margin-bottom: 13px;

    @media screen and (max-width: 730px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const DescInfo = styled.div``;
