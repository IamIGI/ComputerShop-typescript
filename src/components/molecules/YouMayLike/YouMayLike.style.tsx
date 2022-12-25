import styled from 'styled-components';

export const Slider = styled.div`
    height: 300px;
    overflow: hidden;
    position: relative;
    width: 1400px;
    padding-top: 17px;

    @media screen and (max-width: 1800px) {
        width: 1200px;
    }

    @media screen and (max-width: 1600px) {
        width: 1000px;
    }

    @media screen and (max-width: 1100px) {
        width: 800px;
        padding-top: 10px;
    }

    @media screen and (max-width: 900px) {
        padding-top: 7px;
        width: 600px;
    }

    @media screen and (max-width: 650px) {
        padding-top: 2px;
        width: 360px;
    }
`;

export const SlideTrack = styled.div`
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        45% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-33.3%);
        }
        95% {
            transform: translateX(-33.3%);
        }
        100% {
            transform: translateX(-66.6%);
        }
    }

    animation: scroll 15s linear infinite;
    display: flex;
    width: calc(1400px * 3); // for 2 slides
    gap: 15px;

    :hover {
        animation-play-state: paused;
    }

    @media screen and (max-width: 1800px) {
        width: calc(1200px * 3); // for 2 slides
    }

    @media screen and (max-width: 1600px) {
        width: calc(1000px * 3); // for 2 slides
    }

    @media screen and (max-width: 1100px) {
        width: calc(800px * 3); // for 2 slides
    }

    @media screen and (max-width: 900px) {
        width: calc(600px * 3); // for 2 slides
    }

    @media screen and (max-width: 650px) {
        width: calc(360px * 3); // for 2 slides
    }
`;

export const Slide = styled.div`
    height: 100%;
    width: 100%;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    padding: 0 50px;

    @media screen and (max-width: 1100px) {
        padding: 0 10px;
    }
`;
