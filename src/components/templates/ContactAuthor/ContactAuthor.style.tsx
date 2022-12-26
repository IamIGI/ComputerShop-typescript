import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const TopWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;

    @media screen and (max-width: 830px) {
        flex-direction: column;
    }
`;

export const Instructions = styled.div`
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const DescriptionSection = styled.div`
    padding: 2%;
    border-left: 1px solid lightgray;
    width: 40%;
    min-width: 300px;
    line-height: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 830px) {
        border-top: 1px solid lightgray;
        border-left: 0;
        width: 90%;
    }
`;

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    min-width: 350px;
    @media screen and (max-width: 830px) {
        width: 90%;
    }
`;

export const EmailSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const InputSection = styled.div`
    position: relative;
    width: fit-content;

    margin-bottom: 10px;
`;

export const SelectSection = styled.div`
    margin-left: 10px;
    width: fit-content;
    margin-bottom: 10px;
`;

export const TextAreaSection = styled.div`
    position: relative;

    padding: 0 8px;
`;

export const InputDescription = styled.div`
    position: absolute;
    top: 1px;
    right: 25px;
    background-color: white;
    padding: 0 5px;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: fit-content;
    padding: 10px 0;
    p {
        margin: 0;
        padding: 5px 20px;
        font-size: 20px;
    }
`;

export const SuccessSection = styled.div`
    margin-left: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.successDark};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;
export const SuccessIcon = styled.div`
    padding-top: 8px;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const SuccessDescription = styled.div`
    margin-left: 5px;
`;
export const FailureSection = styled.div`
    max-width: 150px;
    margin-left: 10px;
    font-weight: 700;
    color: red;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const FileSection = styled.div`
    margin: 0px 0px 5px 10px;
`;
