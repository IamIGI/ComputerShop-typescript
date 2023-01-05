import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid red;
    width: 95%;
    height: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};

    img {
        width: 100%;
    }
`;
