import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
    width: 100%;
    min-width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.div`
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    text-align: left;
    padding-left: 6%;
    color: red;
    padding-top: 3px;

    font-size: ${({ theme }) => theme.fontSize.m_plus};

    @media screen and (max-width: 520px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        h3 {
            margin: 10px 0px;
        }
    }
`;

export const OuterFormWrapper = styled.div`
    width: fit-content;

    @media screen and (max-width: 520px) {
        width: 250px;
    }
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

    @media screen and (max-width: 520px) {
        p {
            margin: 7px 0px 0px 0px;
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const InputLocal = styled(Input)``;

export const ButtonLocal = styled(Button)`
    background-color: red;
    color: white;

    :hover {
        background-color: ${({ theme }) => theme.colors.warning};
    }
`;
