import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
    margin: 10px 7%;
    padding-bottom: 25px;

    @media screen and (max-width: 1050px) {
        margin: 10px 5%;
    }

    @media screen and (max-width: 1050px) {
        margin: 10px 2%;
    }

    @media screen and (max-width: 450px) {
        padding-bottom: 0px;
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const CommentSection = styled.div`
    width: 91%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 15px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;

    @media screen and (max-width: 950px) {
        width: 100%;
    }
`;

export const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 80%;
    padding-left: 5%;
    min-width: 200px;

    @media screen and (max-width: 450px) {
        padding-left: 2%;
        width: 95%;
    }
`;

export const NoOpinionsLeft = styled.div`
    text-align: center;
    margin: 20px 0;
    @media screen and (max-width: 450px) {
        margin: 10px 0;
    }
`;

export const LoadCommentsButton = styled(Button)`
    width: 80%;
    padding: 11px 0px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 20px;

    :hover {
        background-color: #f5f5f5;
    }
`;

export const NoOpinionsLeftSection = styled.div`
    margin-top: 40px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;

    @media screen and (max-width: 500px) {
        margin-top: 20px;
        gap: 10px;
    }
`;

export const IconNoOpinionsLeft = styled.div`
    color: green;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const DescriptionNoOpinionsLeft = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ImagesSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    height: fit-content;
    width: fit-content;
`;

export const Image = styled.img`
    border-radius: 20px;
    min-height: 80px;
    max-height: 80px;
    width: 85px;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        min-height: 70px;
        max-height: 70px;
        width: 75px;
        border-radius: 15px;
    }

    @media screen and (max-width: 500px) {
        min-height: 60px;
        max-height: 60px;
        width: 65px;
        border-radius: 10px;
    }
`;

export const BigScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const SmallScreen = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        width: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
`;

export const UserDataWhenSmallScreen = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
