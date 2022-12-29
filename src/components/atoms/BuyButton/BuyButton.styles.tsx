import styled from 'styled-components';

// export const Test = styled.button`
//     position: absolute;
//     bottom: 10px;
//     right: 20px;
//     z-index: 1;
//     width: 40px;
//     height: 40px;
//     background-color: transparent;
//     font-size: ${({ theme }) => theme.fontSize.xxl};
//     color: ${({ theme }) => theme.colors.darkGrey};
//     color: black;
//     border-radius: 50%;
//     border: none;
//     cursor: pointer;

//     /* display: flex; */

//     &:hover {
//         background-color: ${({ theme }) => theme.colors.lightPurple};
//         color: ${({ theme }) => theme.colors.white};
//         border: 1px solid ${({ theme }) => theme.colors.error};
//     }

//     @media screen and (max-width: 1800px) {
//         bottom: 5px;
//         right: 15px;
//         width: 35px;
//         height: 35px;
//     }
// `;

export const StyledButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 20px;
    z-index: 1;
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 50%;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightPurple};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.error};
    }

    @media screen and (max-width: 1800px) {
        bottom: 5px;
        right: 15px;
        width: 35px;
        height: 35px;
    }
`;
