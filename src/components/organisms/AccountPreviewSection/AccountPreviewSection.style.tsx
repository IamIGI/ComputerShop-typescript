import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    padding-top: 20px;
    border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;

    @media (max-width: 1370px) {
        display: none;
    }
`;

export const InsideWrapper = styled.div``;

export const Separator = styled.hr`
    width: 70%;
`;
