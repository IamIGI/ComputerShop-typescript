import styled from 'styled-components';

export const Wrapper = styled.div`
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
