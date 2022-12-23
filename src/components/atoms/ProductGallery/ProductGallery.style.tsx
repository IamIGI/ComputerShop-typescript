import styled from 'styled-components';

interface Props {
    border: boolean;
}

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin: 10px 40px 40px 40px;

    @media screen and (max-width: 900px) {
        margin: 0px 40px 40px 40px;
    }

    @media screen and (max-width: 550px) {
        margin: 0px 10px 10px 10px;
    }
`;

export const ImageContainer = styled.div`
    border-radius: 20px;
    img {
        width: 100%;
    }

    :hover {
        cursor: pointer;
    }
`;

export const SmallImageWrapper = styled.div`
    position: relative;
    max-width: 500px;
    width: 100%;
    @media screen and (max-width: 600px) {
        max-width: 350px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SmallImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 80px;
    width: fit-content;
    padding: 0 10px;
    justify-content: flex-start;
    align-items: center;

    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
`;

export const SmallImage = styled.img<Props>`
    border-radius: 8px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    border: 1px solid ${(props) => (props.border ? 'green' : 'gray')};
    transform: scale(${(props) => (props.border ? 1.1 : 1)}, ${(props) => (props.border ? 1.1 : 1)});
    transition: transform 0.5s ease;
`;
