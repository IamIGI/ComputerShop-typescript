import styled from 'styled-components';

export const Wrapper = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 2;
`;
