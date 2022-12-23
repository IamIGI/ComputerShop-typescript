import styled from 'styled-components';

export const Input = styled.input`
    margin: 10px 10px 0 10px;
    height: 32px;
    max-width: 200px;
    border-radius: 16px;
    border: 1px solid lightgrey;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;

    :hover {
        border: 1px solid grey;
    }
    :focus {
        outline: none !important;
        border: 1px solid grey;
    }
`;
