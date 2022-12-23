import styled from 'styled-components';

export const OutsideWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    @media screen and (max-width: 625px) {
        top: 45%;
    }

    @media screen and (max-width: 450px) {
        top: 40%;
    }
`;

export const InsideWrapper = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    background-color: white;
    border: 1px solid grey;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
`;

export const ButtonWrap = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Close = styled.div`
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 50%;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    top: 10px;
    right: 10px;
    z-index: 5;

    &:hover {
        cursor: pointer;
        color: black;
        background-color: ${({ theme }) => theme.colors.grey};
    }

    @media screen and (max-width: 900px) {
        height: 40px;
        width: 40px;
    }

    @media screen and (max-width: 520px) {
        height: 35px;
        width: 35px;
        top: 8px;
        right: 8px;
    }

    /* @media screen and (max-width: 450px) {
        height: 35px;
        width: 35px;
        top: 8px;
        right: 8px;
    } */
`;
