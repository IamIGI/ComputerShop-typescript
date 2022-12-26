import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20px;

        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        scroll-behavior: smooth;
    }
`;

export const Main = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 10px 0 10px;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media screen and (max-width: 960px) {
        order: 2;
        width: 90%;
        margin: auto;
        overflow-y: visible;
        height: fit-content;
    }

    @media screen and (max-width: 800px) {
        width: 95%;
    }
`;

export const Prev = styled.div`
    padding-top: 20px;
    border-left: 1px solid grey;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    width: 100%;
    height: 100%;
    max-width: 500px;

    @media screen and (max-width: 1510px) {
        max-width: 430px;
    }

    @media screen and (max-width: 960px) {
        padding-top: 5px;
        order: 1;
        width: 90%;
        margin: auto;
        max-width: 1000px;
        overflow-y: visible;
        border-left: 0px;
        height: fit-content;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const PrevWrapper = styled.div`
    width: 460px;
    height: auto;
    border: 1px solid grey;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: auto;
    margin-bottom: 15px;

    @media screen and (max-width: 1510px) {
        width: 410px;
    }

    @media screen and (max-width: 960px) {
        width: 90%;
    }
`;
