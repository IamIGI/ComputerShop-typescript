import styled from 'styled-components';

export const PromoCodeAlertSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const PromoCodeIcon = styled.div`
    color: ${({ theme }) => theme.colors.successDark};
    font-size: ${({ theme }) => theme.fontSize.l_plus};
`;

export const PromoCodeAlert = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    padding-bottom: 2px;
`;

export const PromoSection = styled.div`
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 15px;
    padding-bottom: 10px;
`;

export const PromoDescription = styled.div`
    font-weight: 700;
    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const CustomPromoForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 440px) {
        margin-top: 10px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
`;

export const PromoInput = styled.input`
    padding: 6px 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px 0px, rgb(0 0 0 / 8%) 0px 0px 4px 2px;
    border-radius: 10px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;

    :focus {
        outline: none !important;
        border: 1px solid grey;
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 440px) {
        width: 80%;
    }
`;

export const PromoButton = styled.button`
    margin: 15px 0;
    padding: 8px 25px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: 10px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    min-width: 115px;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
        background-color: ${({ disabled }) => (disabled ? '8FCB81' : '#0f9922')};
        color: ${({ disabled }) => (disabled ? '#737C8E' : 'black')};
    }

    @media screen and (max-width: 1510px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 550px) {
        min-width: 100px;
        font-size: ${({ theme }) => theme.fontSize.m};
        margin: 9px 0;
        padding: 5px 15px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 440px) {
        min-width: 90px;
        font-size: 12px;
        margin: 9px 0;
        padding: 5px 13px;
        width: 80%;
    }
`;
