import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    userComments: boolean;
}

export const InsideWrapper = styled.div`
    position: relative;
`;

export const CommentSection = styled.div`
    z-index: 1;
    position: relative;
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

export const ContentSection = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.userComments ? 'space-between' : 'flex-start')};
    flex-wrap: nowrap;

    width: ${(props) => (props.userComments ? '95%' : '80%')};

    padding-left: ${(props) => (props.userComments ? '2%' : '5%')};
    min-width: 200px;

    @media screen and (max-width: 450px) {
        padding-left: 2%;
        width: 95%;
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

export const BigScreen = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    width: ${(props) => (props.userComments ? '300px' : 'fit-content')};

    @media screen and (max-width: 700px) {
        width: ${(props) => (props.userComments ? '200px' : 'fit-content')};
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const SmallScreen = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: flex;
        width: fit-content;

        flex-direction: row;
        justify-content: flex-start;
    }
`;

export const UserDataWhenSmallScreen = styled.div<Props>`
    display: flex;
    flex-direction: ${(props) => (props.userComments ? 'column' : 'row')};
    justify-content: flex-start;
    align-items: ${(props) => (props.userComments ? 'flex-start' : 'center')};
`;

export const ProductImage = styled.div`
    margin: auto;

    width: 75%;
    justify-content: center;
    align-self: center;
    min-width: 90px;

    img {
        width: 100%;
        max-height: auto;
    }
    @media screen and (max-width: 500px) {
        margin-right: 10px;
        width: 25%;
        margin: 0px;
        margin-right: 10px;
    }
`;

export const ProductWrapper = styled(NavLink)`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    p {
        font-size: ${({ theme }) => theme.fontSize.m};
        font-weight: 700;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
    }
`;
