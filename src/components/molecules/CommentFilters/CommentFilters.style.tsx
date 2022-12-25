import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    @media screen and (max-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 1050px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        padding: 10px 0;
    }
    @media screen and (max-width: 920px) {
        justify-content: flex-start;
        padding-left: 9%;
        box-shadow: white 0px 0px 0px 0px;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        /* padding-left: 20px; */
        gap: 2px;
        padding: 10px 0 2px 20px;
    }
`;

export const NumberOfComments = styled.div`
    font-weight: 400;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const Filters = styled.div`
    width: fit-content;
    display: flex;
    height: fit-content;
`;

export const Confirmed = styled.div`
    margin: 0 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1050px) {
        margin: 0 1%;
    }

    @media screen and (max-width: 920px) {
        margin-bottom: 10px;
    }
`;

export const ConfirmedDesc = styled.div`
    font-weight: 400;

    :hover {
        cursor: pointer;
    }
`;

export const Checkbox = styled.input`
    transform: scale(1.8);
    margin: 0 10px;
    height: 20px;
    width: auto;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }

    @media screen and (max-width: 1050px) {
        height: 15px;
        transform: scale(1.5);
    }
`;

export const Sort = styled.div`
    width: fit-content;
    display: flex;
    height: fit-content;
`;

export const BigScreen = styled.div`
    width: 270px;
    display: flex;
    @media screen and (max-width: 1150px) {
        width: 245px;
    }
    @media screen and (max-width: 1050px) {
        width: 200px;
    }
    @media screen and (max-width: 920px) {
        display: none;
    }
`;

export const SmallScreen = styled.div`
    width: 200px;
    display: none;
    @media screen and (max-width: 920px) {
        width: 100%;
        padding: 5px 0 5px 7%;
        display: flex;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
    }

    @media screen and (max-width: 600px) {
        padding: 5px 0 5px 9px;
        display: flex;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;
