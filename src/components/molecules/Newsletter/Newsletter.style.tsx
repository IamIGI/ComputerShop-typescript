import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 200px;
    height: fit-content;
    width: fit-content;
    padding: 0px 10px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightPurple};

    @media screen and (max-width: 1100px) {
        justify-content: flex-start;
        width: 80%;
        align-items: center;
    }

    @media screen and (max-width: 750px) {
        justify-content: space-evenly;
        width: 90%;
        gap: 10px;
        padding: 10px 5px;
        min-height: 0;
    }
    @media screen and (max-width: 500px) {
        gap: 0;
    }
`;

export const LeftWrapper = styled.div`
    margin: 0 20px 0 0;
    width: 65%;

    @media screen and (max-width: 590px) {
        margin: 0;
        padding: 0;
    }
`;

export const RightWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    min-width: 135px;

    @media screen and (max-width: 590px) {
        min-width: 0px;
        margin: 0;
        padding: 0;
    }
`;

export const DescriptionContent = styled.div`
    text-align: left;
    justify-content: left;
    align-items: left;

    padding-left: 10px;
    width: fit-content;
    h2 {
        width: fit-content;
    }
    p {
        width: fit-content;
    }
    @media screen and (max-width: 1100px) {
        padding-left: 10px;
    }

    @media screen and (max-width: 590px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
        p {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
`;

export const Icon = styled.div`
    margin-top: 30px;
    max-height: 100px;
    font-size: ${({ theme }) => theme.fontSize.omegaBigBrother};

    @media screen and (max-width: 590px) {
        font-size: 40px;
    }
`;
