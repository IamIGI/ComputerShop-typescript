import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    -webkit-appearance: none;
    height: 6px;
    background: white;
    box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px, rgb(0 0 0 / 15%) 0px 0px 2px 1px;
    border-radius: 5px;
    background-image: linear-gradient(
        ${({ theme }) => theme.colors.successDark},
        ${({ theme }) => theme.colors.successDark}
    );
    background-repeat: no-repeat;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.successDark};
        cursor: pointer;
        box-shadow: 0 0 2px 0 #555;
    }

    ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    @media screen and (max-width: 1100px) {
        ::-webkit-slider-thumb {
            height: 25px;
            width: 25px;
        }
    }

    @media screen and (max-width: 950px) {
        ::-webkit-slider-thumb {
            height: 22px;
            width: 22px;
        }
    }
`;
