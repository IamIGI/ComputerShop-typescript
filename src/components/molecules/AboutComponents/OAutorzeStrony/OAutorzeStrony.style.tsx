import styled from 'styled-components';

export const StackSection = styled.div`
    margin: 10px 10% 0 10%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;

export const UsePopUp = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: ${({ theme }) => theme.fontSize.l};

    :hover {
        color: green;
    }

    @media screen and (max-width: 580px) {
        top: 5px;
        right: 5px;
    }
`;
export const PopUp = styled.div`
    position: absolute;
    border: 1px solid gray;
    padding-right: 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    top: 50px;
    right: -60px;
    z-index: 1;
    background-color: white;

    @media screen and (max-width: 580px) {
        width: fit-content;
        top: 5px;
        left: 0px;
        border-radius: 10px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        padding-right: 10px;
    }
`;

export const Stack = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 30px;
    padding-top: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    position: relative;

    @media screen and (max-width: 730px) {
        width: 200px;
    }

    @media screen and (max-width: 580px) {
        width: 120px;
        border-radius: 15px;
    }

    :hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 30px;
    }
`;

export const StackImage = styled.div`
    img {
        max-height: 100px;
        max-width: auto;
    }

    @media screen and (max-width: 730px) {
        img {
            max-height: 70px;
            max-width: auto;
        }
    }

    @media screen and (max-width: 580px) {
        img {
            max-height: 50px;
            max-width: auto;
        }
    }
`;

export const StackTitle = styled.div``;
export const StackLibrarySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: fit-content;
    ul {
        padding: 0%;
        padding-left: 25px;
        margin: 0;
    }
`;

export const StackLibrary = styled.div`
    @media screen and (max-width: 580px) {
        max-width: 100px;
        margin: 0;
        padding: 0;
    }
`;
export const StackStars = styled.div`
    font-size: 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: 730px) {
        font-size: 11.5px;
    }

    @media screen and (max-width: 580px) {
        font-size: 8px;
    }
`;
