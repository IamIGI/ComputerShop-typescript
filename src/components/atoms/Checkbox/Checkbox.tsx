import styled from 'styled-components';

//change type='checkbox'
export const Checkbox = styled.input`
    margin: 0 10px;
    height: 20px;
    width: auto;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
`;
