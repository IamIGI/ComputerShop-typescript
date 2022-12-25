import styled from 'styled-components';
import { Checkbox } from 'components/atoms/Checkbox/Checkbox';

export const Wrapper = styled.div`
    margin: 10px;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50px;

    @media screen and (max-width: 1100px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 450px) {
        gap: 5px;
    }
`;

export const Section = styled.div`
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    :hover {
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.colors.successDark};
    }

    @media screen and (max-width: 1510px) {
        padding: 0 10px;
    }
`;

export const CheckboxLocal = styled(Checkbox)`
    color: black;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 3%;
    cursor: pointer;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    }

    @media screen and (max-width: 1100px) {
        width: 25px;
        height: 25px;
        margin-left: 12px;
    }

    @media screen and (max-width: 450px) {
        width: 22px;
        height: 22px;
        margin-left: 10px;
    }
`;

export const Description = styled.div`
    width: 70%;
    border-left: 1px solid grey;
    text-align: left;
    justify-content: center;
    margin: 10px 0;
    padding-left: 5%;
    padding-right: 10px;

    @media screen and (max-width: 1510px) {
        width: 75%;
        padding-left: 3%;
    }

    @media screen and (max-width: 1100px) {
        h4 {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 450px) {
        h4 {
            font-size: ${({ theme }) => theme.fontSize.m};
            margin: 0px;
        }
        p {
            font-size: 12px;
            margin: 5px 0 0 0;
        }
    }
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
    @media screen and (max-width: 500px) {
        margin-left: 20px;
    }
`;

export const Icon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.omegaBig};

    @media screen and (max-width: 1100px) {
        font-size: 40px;
    }

    @media screen and (max-width: 550px) {
        font-size: 30px;
    }
`;
