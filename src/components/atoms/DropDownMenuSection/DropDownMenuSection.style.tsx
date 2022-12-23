import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    position: relative;

    font-size: ${({ theme }) => theme.fontSize.l_plus};
    transition: 0.5s ease;

    @media screen and (max-width: 1100px) {
        border: none;
        padding: 10px;
        justify-content: flex-start;
    }

    @media screen and (max-width: 650px) {
        padding: 10px;
        font-size: ${({ theme }) => theme.fontSize.xl};
        align-items: center;
    }

    &.active {
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const DivRelative = styled.div`
    position: relative;
`;

export const Icon = styled.div``;
export const BigIcon = styled.div`
    font-size: 25px;

    margin-right: 5px;
    padding: 3px 20px 3px 5px;
    position: relative;

    border-right: 1px solid gray;
`;

export const LinkDescription = styled.div`
    margin-left: 10px;
`;

interface DropDownMenuSectionStyledProps {
    display: string | undefined;
}

export const ActiveDropDown = styled.div<DropDownMenuSectionStyledProps>`
    width: fit-content;
    display: flex;
    flex-wrap: nowrap;
    padding: 6px 10px 13px 16px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: ${(props) => (props.display ? '1px solid grey' : '1px solid transparent')};
    border-right: ${(props) => (props.display ? '1px solid grey' : '1px solid transparent')};

    &:hover {
        cursor: pointer;
        span {
            color: ${({ theme }) => theme.colors.successDark};
        }
    }
`;

export const ProperMenu = styled.div<DropDownMenuSectionStyledProps>`
    position: absolute;
    top: 40px;
    right: 0px;
    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    background-color: white;
    z-index: 5;
    padding: 5px 10px 8px 2px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
    width: fit-content;
`;
