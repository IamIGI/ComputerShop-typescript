import styled from 'styled-components';

export const SearchSection = styled.div`
    position: relative;
`;

export const SearchField = styled.input`
    margin: 10px 0;
    height: 40px;
    width: 250px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;

    &:hover {
        border: 1px solid grey;
    }

    &:focus {
        outline-width: 0;
        border: 1px solid grey;
    }
`;

export const SearchButton = styled.div`
    position: absolute;
    top: 10px;
    right: 0px;
    background-color: white;
    padding: 0 5px;
    width: 50px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;

    :hover {
        color: green;
        cursor: pointer;
        border: 1px solid grey;
    }
`;

export const SearchDescription = styled.div`
    position: absolute;
    top: 1px;
    right: 5px;
    background-color: white;
    padding: 0 5px;
    font-size: 15px;
`;
