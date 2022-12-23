import styled from 'styled-components';

export const InputSection = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 10px;
`;
export const InputDescription = styled.div`
    position: absolute;
    top: -5px;
    right: 15px;
    background-color: white;
    padding: 0 5px;
    font-size: 15px;
`;

export const InputField = styled.input`
    margin: 3px 0px;
    height: 40px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: left;
    padding-left: 20px;
    padding-right: 10px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    &:hover {
        border: 1px solid grey;
    }

    &:focus {
        outline-width: 0;
        border: 1px solid grey;
    }
`;
