import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 25%;
    justify-content: center;
    text-align: center;

    p {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const Icon = styled.div`
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.omegaBigBrother};
`;
