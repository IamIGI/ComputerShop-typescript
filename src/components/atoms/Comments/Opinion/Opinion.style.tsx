import styled from 'styled-components';

export const Wrapper = styled.div`
    line-height: 26px;
    padding: 1% 0;

    @media screen and (max-width: 860px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 23px;
    }
`;

export const UnWrap = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    :hover {
        color: black;
        cursor: pointer;
    }
`;
