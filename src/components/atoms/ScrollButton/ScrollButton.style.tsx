import styled from 'styled-components';

interface Props {
    direction?: string;
    childWidth: number;
    parentWidth: number; // may throw error
}

export const ScrollButton = styled.div<Props>`
    position: absolute;
    z-index: 3;
    width: 40px;
    height: 40px;
    background-color: rgba(189, 195, 199, 0.6);
    color: black;
    border-radius: 25%;

    top: 25%;
    ${(props) => (props.direction === 'right' ? 'right: 0;' : 'left: 0;')}

    display: ${(props) => (props.childWidth > props.parentWidth ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 25px;
    font-weight: 700;

    transform: scale(1, 1);
    transition: transform 0.5s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.2, 1.2);
        background-color: rgba(189, 195, 199, 0.7);
    }

    @media screen and (max-width: 515px) {
        top: 21px;
        width: 35px;
        height: 35px;
    }
`;
