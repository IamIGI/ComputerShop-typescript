import styled from 'styled-components';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';

export const Wrapper = styled.div`
    width: 70%;
    margin-left: 17%;
    display: inline-grid;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    input {
        display: block;
        box-sizing: border-box;
    }
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;

export const SectionChange = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

    @media screen and (max-width: 520px) {
        margin-bottom: 12px;
    }
`;

export const CheckboxLocal = styled(Checkbox)`
    color: black;
    margin: 0px;
    margin-right: 10px;
    transform: scale(1.4);
    cursor: pointer;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    }

    @media screen and (max-width: 520px) {
        transform: scale(1.2);
    }
`;

export const LabelArea = styled.div`
    width: 80%;
    border-left: 1px solid grey;
    text-align: left;
    justify-content: center;
    padding-left: 5%;

    @media screen and (max-width: 520px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 400px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        width: 100%;
    }
`;

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 400px) {
        height: 30px;
    }
`;

export const SavedInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: baseline;
    color: ${({ theme }) => theme.colors.successDark};
    font-weight: 700;

    @media screen and (max-width: 400px) {
        align-items: center;
    }
`;

export const SavedIcon = styled.div`
    margin: 0 10px;
    @media screen and (max-width: 400px) {
        margin-top: 5px;
    }
`;
export const SavedDescription = styled.div`
    @media screen and (max-width: 400px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
