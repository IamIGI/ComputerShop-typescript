import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
    margin: 0px;
`;

export const TitleWhenSmallScreen = styled.div`
    display: none;
    @media screen and (max-width: 900px) {
        margin: 25px 0 10px 5%;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        margin: 25px 0 5px 0;
    }
`;

export const HandyMenuBigScreen = styled.div`
    display: flex;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const TopWrapper = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 30px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const MidWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const BottomWrapper = styled.div`
    height: fit-content;
    width: 100%;
`;
