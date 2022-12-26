import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 300px 1fr;

    @media screen and (max-width: 1210px) {
        grid-template-columns: 230px 1fr;
    }

    @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr;
        grid-template-rows: 55px 1fr;
    }
`;

export const LeftWrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 1050px) {
        grid-column: 1;
        grid-row: 1/2;
        padding-left: 20px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
        z-index: 2;
    }

    @media screen and (max-width: 700px) {
        align-items: center;
        justify-content: center;
    }
`;

export const RightWrapper = styled.div`
    border-left: 1px solid grey;
    height: 100%;
    width: 100%;
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    justify-content: left;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media screen and (max-width: 1050px) {
        grid-column: 1;
        grid-row: 2/2;
        border-left: 1px solid transparent;
    }
`;
