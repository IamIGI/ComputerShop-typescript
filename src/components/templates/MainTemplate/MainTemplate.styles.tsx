import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const InsideWrapper = styled.div`
    max-width: 2100px;
    width: 100%;
    padding: 0 3%;
    height: 83vh;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;

    @media (max-width: 650px) {
        padding: 0 10px;
    }

    @media (min-height: 1200px) {
        height: 87vh;
    }
`;
