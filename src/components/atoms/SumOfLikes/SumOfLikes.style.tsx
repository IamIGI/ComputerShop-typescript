import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const Icon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const Description = styled.div`
    p {
        margin: 0px;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;
