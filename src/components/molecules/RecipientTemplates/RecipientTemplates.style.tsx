import styled from 'styled-components';

export const TemplateWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    gap: 20px;
`;

export const TemplateContainer = styled.div`
    position: relative;
    padding: 0 20px;
    flex: 1 0 48%;
    height: fit-content;
    font-size: ${({ theme }) => theme.fontSize.l};
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
    border-radius: 10px;

    ul {
        padding: 0px;
        list-style-type: none;
    }
    li:not(:last-child) {
        margin-bottom: 3px;
    }

    li:first-child {
        font-weight: 700;
    }

    @media screen and (max-width: 960px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ChangeRecipient = styled.button`
    position: absolute;
    top: 15px;
    right: 12px;
    border-radius: 6px;
    border: 0px;
    background-color: white;
    padding: 6px 9px;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;

    :hover {
        cursor: pointer;
        box-shadow: rgb(0 100 0 / 30%) 0px 4px 8px 0px, rgb(0 100 0 / 30%) 0px 0px 4px 2px;
    }
`;

export const DeleteRecipient = styled.button`
    position: absolute;
    top: 53px;
    right: 15px;
    color: red;
    border-radius: 50%;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 3px 3px 0px 3px;

    font-size: ${({ theme }) => theme.fontSize.xl};

    transform: scale(1, 1);
    transition: transform 0.3s ease;

    :hover {
        cursor: pointer;
        color: white;
        background-color: red;
        transform: scale(1.1, 1.1);
    }
`;
