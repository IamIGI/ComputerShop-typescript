import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const InsideWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 64%;
    gap: 10px;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const NoComments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-left: 10%;

    div {
        font-size: ${({ theme }) => theme.fontSize.omegaBig};
    }

    @media screen and (max-width: 895px) {
        display: none;
    }
`;
