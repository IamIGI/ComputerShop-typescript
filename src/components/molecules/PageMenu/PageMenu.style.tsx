import styled from 'styled-components';

interface Props {
    currentPage?: boolean;
}

export const PageButton = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: ${(props) => (props.currentPage ? '#bfbfbf' : '#ededed')};
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.black};
        box-shadow: 1px 1px 12px 1px ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }

    @media screen and (max-width: 470px) {
        height: 40px;
        width: 40px;
    }
`;
