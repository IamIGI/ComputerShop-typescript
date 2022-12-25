import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
    width: 100%;
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
    padding-left: 10%;

    span {
        font-weight: 400;
    }

    @media screen and (max-width: 520px) {
        h3 {
            font-size: ${({ theme }) => theme.fontSize.l};
            margin-bottom: 10px;
        }
    }
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const InputLocal = styled(Input)`
    width: 90%;
    font-size: ${({ theme }) => theme.fontSize.m};
`;

export const ButtonLocal = styled(Button)`
    margin: 10px 0px 8px 0px;
`;

export const OuterFormWrapper = styled.div`
    width: fit-content;

    @media screen and (max-width: 520px) {
        width: 250px;
    }
`;
