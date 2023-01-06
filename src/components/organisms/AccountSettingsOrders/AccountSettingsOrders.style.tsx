import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NumberLocale } from 'yup/lib/locale';

interface Props {
    width: number;
    height: number;
}

export const Wrapper = styled.div`
    a,
    a:hover,
    a:visited,
    a:active {
        color: inherit;
        text-decoration: none;
    }

    width: 100%;
    height: 100%;
    padding-top: 20px;
    display: grid;
    grid-template-rows: 70px 1fr 1px 100px;

    @media screen and (max-width: 1050px) {
        grid-template-rows: 0px 1fr 1px 100px;
    }

    @media screen and (max-width: 700px) {
        grid-template-rows: 0px 1fr 1px 70px;
    }
`;

export const BodySection = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 2/3;
    justify-content: center;
    text-align: center;
`;

export const TitleSection = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    grid-row: 1/2;
    justify-content: left;
    text-align: left;
    padding-left: 5%;

    @media screen and (max-width: 1050px) {
        display: none;
        height: 0%;
    }
`;

export const Line = styled.div`
    grid-row: 3/4;
    width: 80%;
    margin-left: 10%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const InsideWrapper = styled.div`
    position: relative;
`;

export const OrderContent = styled(NavLink)`
    z-index: 1;
    position: relative;
    text-decoration: none;
    height: 175px;
    width: 90%;
    margin: 10px 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    transform: scale(1, 1);
    transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.015, 1.015);
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 7px 7px 12px 1px ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        height: 250px;
    }

    @media screen and (max-width: 440px) {
        &:hover {
            transform: scale(1, 1);
        }
        height: 220px;
    }
`;

export const OrderDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    min-width: 320px;
    width: fit-content;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    text-align: left;
    padding-left: 4%;
    h4 {
        padding: 7px 0;
        margin: 0;
    }

    @media screen and (max-width: 1400px) {
        min-width: 300px;
    }

    @media screen and (max-width: 1370px) {
        min-width: 320px;
    }

    @media screen and (max-width: 1100px) {
        min-width: 300px;
    }

    @media screen and (max-width: 800px) {
        min-width: 260px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        h4 {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        height: 85%;
    }

    @media screen and (max-width: 440px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        h4 {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
        height: 80%;
    }
`;

export const DateDecorator = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 600;
    margin-bottom: 5px;
`;

export const OrderProducts = styled.div`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 100%;
    width: 100%;
    padding-left: 4%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1440px) {
        padding-left: 3%;
    }
`;

export const ProductImage = styled.div`
    position: relative;
    height: 120px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }

    @media screen and (max-width: 1460px) {
        height: 100px;
    }

    @media screen and (max-width: 1370px) {
        height: 120px;
    }

    @media screen and (max-width: 1100px) {
        height: 100px;
    }

    @media screen and (max-width: 440px) {
        height: 85px;
    }
`;
export const ProductImageSmall = styled.div`
    position: relative;
    margin-left: 3%;
    height: 70px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
    }
    @media screen and (max-width: 440px) {
        height: 65px;
    }
`;

export const ProductDescription = styled.div`
    text-align: left;
    padding: 0 10px;
    width: 100%;
    p {
        margin: 0px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 1440px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 1370px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 800px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const NoOrders = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 100%;
    padding: 15px;
`;

export const NoOrderIcon = styled.div`
    font-size: 4vw;
`;

export const NoOrderDescription = styled.div`
    font-size: 30px;

    @media screen and (max-width: 800px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media screen and (max-width: 600px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;

export const Quantity = styled.div<Props>`
    position: absolute;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    height: ${({ height }) => `${height}px`};
    width: ${({ width }) => `${width}px`};
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
    font-size: 15px;
    font-weight: 700;
    padding-top: 5px;
`;

export const DiscountMark = styled.div`
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 25px;
`;

export const GetPDF = styled.div`
    z-index: 2;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 11px 6px 11px;
    border: 1px solid transparent;
    border-radius: 50%;

    :hover {
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
    }
`;

export const HandyMenu = styled.div`
    z-index: 100;
    position: absolute;
    top: 50px;
    right: 5%;
    padding: 15px 10px;
    width: fit-content;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
    box-shadow: 4px 4px 8px 1px ${({ theme }) => theme.colors.grey};
    transform: scale(1, 1);
    transition: transform, 0.5s ease;
    :hover {
        transform: scale(1.05, 1.05);
    }
`;

export const IconPDF = styled.div``;

export const DescriptionPDF = styled.div`
    margin-left: 5px;
`;

export const FooterSection = styled.div`
    height: 100%;
    width: 100%;
    grid-row: 4/4;

    padding-right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 1100px) {
        justify-content: center;
        padding-right: 0%;
    }
`;
