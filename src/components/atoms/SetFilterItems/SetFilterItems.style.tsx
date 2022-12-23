import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 10px 0;
`;

export const InputSection = styled.div`
    position: relative;
`;
export const InputDescription = styled.div`
    position: absolute;
    top: -10px;
    right: 10px;
    background-color: white;
    padding: 0 5px;
`;

interface InputFiledProps {
    display: string | undefined;
}

export const InputField = styled.input<InputFiledProps>`
    caret-color: transparent;
    height: 25px;
    width: ${(props) => props.width};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    padding-left: 20px;
    text-align: left;
    height: 30px;
    border-bottom-left-radius: ${(props) => (props.display ? '0px' : '10px')};
    border-bottom-right-radius: ${(props) => (props.display ? '0px' : '10px')};

    &:hover {
        border: 1px solid grey;
        cursor: pointer;
    }

    &:focus {
        outline-width: 0;
        border: 1px solid grey;
    }
`;

interface FilterOptions {
    display: string | undefined;
    width: number;
}

export const FilterOptions = styled.div<FilterOptions>`
    display: ${(props) => (props.display ? 'flex' : 'none')};
    width: ${(props) => props.width};
    height: fit-content;
    gap: 5px;
    position: absolute;
    top: 30px;
    right: 0px;
    background-color: white;
    padding-bottom: 5px;
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: white;
    z-index: 5;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

interface FilterOptionsProps {
    selectOptionsInCenter: boolean;
    activeChoice: boolean;
}

export const FilterOption = styled.div<FilterOptionsProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.selectOptionsInCenter ? 'center' : 'flex-start')};
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    width: 100%;
    padding: 4px 0px 4px 0px;
    padding-left: ${(props) => (props.selectOptionsInCenter ? '0px' : '10px')};
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: ${(props) => (props.activeChoice ? '#ededed' : 'white')};

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
        cursor: pointer;
    }
`;

export const Checkbox = styled.input`
    transform: scale(1.2);
    height: 15px;
    width: auto;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
    padding-right: 10px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
`;

export const OptionDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

interface SmallScreenProps {
    showConfirmButtonOnSmallScreen: boolean;
}

export const SmallScreen = styled.div<SmallScreenProps>`
    display: none;
    background-color: ${({ theme }) => theme.colors.lightLightGrey};
    @media screen and (max-width: 500px) {
        display: ${(props) => (props.showConfirmButtonOnSmallScreen ? 'flex' : 'none')};
        border-radius: 10px;
        margin-top: 10px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        width: 100%;
        padding: 3px;
    }
`;

export const ApproveButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    width: 100%;
    padding: 2px 0;
    border-radius: 3px;
    border: 1px solid transparent;
    font-weight: 700;

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightLightGrey};
        cursor: pointer;
    }
`;
