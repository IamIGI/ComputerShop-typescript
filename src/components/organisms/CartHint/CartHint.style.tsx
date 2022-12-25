import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    width: 233px;
`;

export const TitleSection = styled.div`
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    padding: 6px 0;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
`;

export const Quantity = styled.div`
    position: absolute;
    border-radius: 50%;
    height: 33px;
    width: 33px;
    background-color: ${({ theme }) => theme.colors.successDark};
    color: white;
    font-weight: 700;
    padding-top: 6px;
    font-size: 17px;

    right: -10px;
    top: -10px;
`;

export const DeleteProduct = styled.div`
    position: absolute;

    bottom: -12px;
    right: -12px;

    color: gray;

    border-radius: 50%;
    height: 34px;
    width: 34px;
    background-color: white;
    border: 1px solid gray;
    padding-top: 6px;
    font-size: 19px;

    :hover {
        color: black;
        background-color: ${({ theme }) => theme.colors.error};
    }
`;

export const ProductQuantity = styled.div`
    border-radius: 50%;
    height: 28px;
    width: 28px;
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
    font-size: 15px;
    font-weight: 700;
    padding-top: 5px;
    position: absolute;
    right: -10px;
    top: -10px;
`;

export const ProductsSection = styled.div`
    width: 100%;
    padding: 8px 6%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Image = styled.div`
    position: relative;
    margin: 13px 0;
    /* margin: 3%; */
    height: 75px;
    width: auto;
    img {
        max-height: 100%;
        max-width: auto;
        border-radius: 20px;
    }
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey};
        box-shadow: 1px 1px 6px 1px ${({ theme }) => theme.colors.grey};
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
`;

export const RemoveBasket = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 12px 0;
    padding: 0 8px;
    padding-top: 7px;
    border: 2px solid transparent;
    border-radius: 50%;
    :hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.error};
        border: 2px solid ${({ theme }) => theme.colors.error};
        border-radius: 50%;
    }
`;
