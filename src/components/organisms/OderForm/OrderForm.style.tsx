import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    width: 47%;
    @media screen and (max-width: 550px) {
        width: 90%;
        margin: auto;
    }
`;

export const InputLocal = styled.input`
    margin: 10px 10px 20px 10px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid lightgrey;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    display: block;
    width: 90%;
    font-size: 16px;

    @media screen and (max-width: 1000px) {
        font-size: 14px;
    }

    @media screen and (max-width: 960px) {
        margin: 10px 10px 15px 10px;
    }

    @media screen and (max-width: 450px) {
        font-size: 14px;
        margin: 10px 10px 10px 10px;
    }
`;

export const ButtonWrapper = styled.div`
    justify-content: left;
    margin-left: 4%;
`;

export const Error = styled.div`
    margin-left: 5%;

    @media screen and (max-width: 450px) {
        font-size: 13px;
    }
`;
