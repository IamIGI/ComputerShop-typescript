import styled from 'styled-components';

interface Props {
    position: string;
    MenuInitPosition: string;
}

export const Wrapper = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    margin-top: 10px;
    padding: 10px 0px 0px 0px;
    padding-right: 3%;
`;

export const InsideWrapper = styled.div`
    position: relative;
    margin: auto;
    max-width: 2100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 5%;

    min-height: fit-content;

    a {
        color: black;
        text-decoration: none;
    }

    @media screen and (max-width: 1100px) {
        padding-left: 60px;
    }
`;

export const NormalScreenSection = styled.div`
    margin-right: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 1100px) {
        display: none;
    }
`;

//-------------MEDIUM SCREEN--------------
export const MediumScreenSection = styled.div`
    position: relative;
    display: none;
    @media screen and (max-width: 1370px) {
        display: flex;
        flex-direction: row;
        transition: 0.5s ease;
    }
`;

export const SmallScreenMenuPreview = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const QuantityOfProductSmallScreen = styled.div`
    position: absolute;
    top: -6px;
    right: 20px;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    background-color: ${({ theme }) => theme.colors.successDark};
    color: white;
    font-weight: 700;
    padding-top: 3px;
    font-size: 15px;
`;

export const QuantityOfProductMediumScreen = styled.div`
    position: absolute;
    top: -5px;
    left: 5px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.successDark};
    color: white;
    font-weight: 700;
    padding-top: 2px;
    font-size: 13px;
`;

export const SmallScreenSection = styled.div`
    display: none;
    margin-right: 2%;

    @media screen and (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        transition: 0.5s ease;
    }
`;

export const HamburgerMenu = styled.div`
    margin: 5px 0 0 20px;
    padding: 5px;
    font-size: 35px;
    transition: 0.5s ease;
    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.successDark};
    }
`;

//-------------SMALL SCREEN--------------
export const StyledLinksSmallScreenSection = styled.div<Props>`
    padding: 10px 20px 10px 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: left;
    position: fixed;
    top: 40px;
    transition: 0.5s ease;
    right: ${(props) => props.position};
    width: 230px;
    height: fit-content;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid gray;

    background-color: white;
    z-index: 8;
    gap: 10px;

    @media screen and (max-width: 650px) {
        gap: 20px;
        align-items: center;
        top: 0px;
        padding: 20px 0;
        height: 100%;
        right: 0px;
        display: ${(props) => (props.position === props.MenuInitPosition ? 'none' : 'flex')};

        width: 100%;
        flex-direction: column;
    }
`;

export const XmarkLink = styled.div`
    display: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 650px) {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        align-items: center;
    }
`;

export const XmarkIcon = styled.div`
    line-height: 20px;
    font-size: 42px;
    margin-right: 10px;
    padding: 3px 3px;
    transition: 0.5s ease;

    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.successDark};
    }
`;
