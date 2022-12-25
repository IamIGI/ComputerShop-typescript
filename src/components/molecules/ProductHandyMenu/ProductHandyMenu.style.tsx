import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding-right: 5%;
    margin: 15px 0 0 0;
    align-items: center;

    a,
    a:hover,
    a:visited,
    a:active {
        color: inherit;
        text-decoration: none;
    }
`;

export const OptionSection = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l};
    padding-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 20px;

    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.lightPurple};
        border: 1px solid ${({ theme }) => theme.colors.lightPurple};
    }
`;

export const OptionIcon = styled.div`
    font-weight: 700;
    padding-top: 1px;
`;

export const OptionDescription = styled.div`
    margin-left: 10px;
`;
