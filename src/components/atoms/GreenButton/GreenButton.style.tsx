import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const GreenButton = styled(Button)`
    margin: 0px;
    color: white;
    background-color: green;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    font-weight: 400;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
        /* background-color: ${({ theme }) => theme.colors.success}; */
        background-color: ${({ disabled }) => (disabled ? 'green' : '#8FCB81')};
    }

    @media screen and (max-width: 1400px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 1000px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        width: 100%;
    }
`;
