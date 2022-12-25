import styled from 'styled-components';

export const OutsideWrapper = styled.div`
    position: relative;
    max-width: 1220px;
    width: 100%;
    margin-left: 4%;
    margin-right: 20px;
    margin: left;
    margin-bottom: 27px;

    @media screen and (max-width: 1375px) {
        max-width: 1000px;
    }

    @media screen and (max-width: 1150px) {
        max-width: 670px;
        margin: auto;
    }

    @media screen and (max-width: 800px) {
        max-width: 450px;
    }

    @media screen and (max-width: 515px) {
        max-width: 350px;
    }

    @media screen and (max-width: 420px) {
        max-width: 280px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    padding: 3px 15px 3px 15px;
    margin-bottom: 23px;
    margin: auto;
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
`;

export const Image = styled.img`
    height: 90px;
    max-width: 90px;
    width: 100%;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
        cursor: pointer;
    }

    @media screen and (max-width: 515px) {
        height: 70px;
        max-width: 70px;
    }
`;
