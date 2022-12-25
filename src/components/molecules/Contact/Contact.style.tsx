import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 200px;
    height: 100%;
    height: fit-content;
    width: fit-content;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightPurple};

    @media screen and (max-width: 1100px) {
        justify-content: flex-start;
        width: 80%;
    }
    @media screen and (max-width: 750px) {
        width: 90%;
        min-height: 150px;
    }

    @media screen and (max-width: 500px) {
        padding: 0 10px;
        width: 90%;
    }
`;
export const Title = styled.div`
    text-align: left;
    justify-content: left;

    @media screen and (max-width: 590px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }
`;

export const Info1 = styled.div`
    border-right: 1px solid grey;
    width: fit-content;
`;
export const Info2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DayDesc = styled.div`
    text-align: left;
    width: 100px;
    @media screen and (max-width: 590px) {
        width: 80px;
    }
`;
export const HourDesc = styled.div`
    width: 100px;
    @media screen and (max-width: 590px) {
        width: 75px;
    }
`;

export const Section = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media screen and (max-width: 590px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const Icon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightPurple};

    :hover {
        color: ${({ theme }) => theme.colors.success};
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: 650px) {
        display: none;
    }

    @media screen and (max-width: 590px) {
        font-size: 10px;
    }
`;

export const Desc = styled.div``;

export const Media = styled.div`
    width: 100%;
    margin-top: 20px;
    gap: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 590px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const MediaIcon = styled.div`
    border-bottom: 1px solid transparent;

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.success};
        border-bottom: 1px solid ${({ theme }) => theme.colors.success};
    }
`;
