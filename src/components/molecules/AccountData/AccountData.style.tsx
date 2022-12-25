import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 70%;
    margin-left: 10%;
    padding-left: 30px;
    display: inline-grid;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;

    @media screen and (max-width: 520px) {
        margin-left: 5%;
        width: 90%;
        gap: 12px;
        h3 {
            margin: 5px 0px 5px 30px;
        }
    }

    @media screen and (max-width: 450px) {
        margin-left: 3%;
        width: 97%;
        h3 {
            margin: 3px 0px 1px 20px;
        }
    }

    @media screen and (max-width: 400px) {
        margin-left: 1%;
        width: 97%;
        h3 {
            margin: 3px 0px 1px 15px;
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
`;

export const SectionChange = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 520px) {
        h3 {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 400px) {
        h3 {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
`;

export const LabelArea = styled.div`
    width: 100px;
    border-right: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 520px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        width: 90px;
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        width: 80px;
    }
`;

export const InputLocal = styled(Input)`
    color: black;
    margin: 0px;
    margin-left: 10px;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.success};
    }

    @media screen and (max-width: 520px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        height: 25px;
        width: 150px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        height: 25px;
        width: 120px;
    }

    @media screen and (max-width: 400px) {
        font-size: 12px;
        height: 25px;
        width: 115px;
    }
`;

export const PopUpTitle = styled.div;

export const ButtonLocal = styled(Button)`
    margin: 0px 0px 0px 10px;
`;
