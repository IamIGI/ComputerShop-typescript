import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0px 30px 0px 30px;
    margin: 50px 15px 15px 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 1000px;

    @media screen and (max-width: 1980px) {
        height: 850px;
    }

    @media screen and (max-width: 1050px) {
        height: 600px;
    }

    @media screen and (max-width: 850px) {
        height: 500px;
    }

    @media screen and (max-width: 650px) {
        height: 525px;
        padding: 0px 10px 0px 10px;
    }

    @media screen and (max-width: 510px) {
        height: 490px;
    }

    @media screen and (max-width: 450px) {
        height: 450px;
        margin: 50px 0px 15px 0px;
    }
`;

export const ImageContainer = styled.div`
    border-radius: 20px;
    width: fit-content;
    min-height: 850px;
    max-height: 850px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
        max-height: 800px;
        height: 100%;
        width: 1000px;
    }

    @media screen and (max-width: 1980px) {
        min-height: 700px;
        max-height: 700px;
        margin-bottom: 10px;
        img {
            width: 850px;
            max-height: 700px;
        }
    }

    @media screen and (max-width: 1050px) {
        min-height: 500px;
        max-height: 500px;
        img {
            width: 700px;
            max-height: 500px;
        }
    }

    @media screen and (max-width: 850px) {
        min-height: 400px;
        max-height: 400px;
        img {
            width: 500px;
            max-height: 400px;
        }
    }

    @media screen and (max-width: 650px) {
        min-height: 425px;
        max-height: 425px;
        img {
            width: 450px;
            max-height: 425px;
        }
    }

    @media screen and (max-width: 510px) {
        min-height: 380px;
        max-height: 380px;
        img {
            width: 400px;
            max-height: 380px;
        }
    }

    @media screen and (max-width: 450px) {
        min-height: 350px;
        max-height: 350px;
        img {
            width: 350px;
            max-height: 350px;
        }
    }
`;

export const SmallImageWrapper = styled.div`
    position: relative;
    min-width: 350px;
    max-width: 1220px;
    width: 100%;
    //leave it, so you know how to calculated with props

    height: 130px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1980px) {
        max-width: 850px;
    }
    @media screen and (max-width: 1050px) {
        max-width: 700px;
    }

    @media screen and (max-width: 850px) {
        max-width: 500px;
    }

    @media screen and (max-width: 650px) {
        max-width: 450px;
    }

    @media screen and (max-width: 510px) {
        max-width: 400px;
    }

    @media screen and (max-width: 450px) {
        max-width: 350px;
    }
`;

export const SmallImagesContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: fit-content;
    padding: 0 15px;

    height: 100%;

    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    @media screen and (max-width: 650px) {
        gap: 14px;
    }
    @media screen and (max-width: 450px) {
        gap: 10px;
    }
`;

interface Props {
    border: boolean;
}

export const SmallImage = styled.img<Props>`
    border-radius: 8px;
    height: 90px;
    min-width: 90px;
    max-width: 90px;
    width: 100%;
    cursor: pointer;
    border: 1px solid ${(props) => (props.border ? 'green' : 'gray')};
    transform: scale(${(props) => (props.border ? 1.1 : 1)}, ${(props) => (props.border ? 1.1 : 1)});
    transition: transform 0.5s ease;

    @media screen and (max-width: 1050px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (max-width: 650px) {
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 450px) {
        width: 50px;
        height: 50px;
    }
`;
