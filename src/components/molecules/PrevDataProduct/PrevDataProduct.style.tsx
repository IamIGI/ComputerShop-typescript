import styled from 'styled-components';

export const Wrapper = styled.div`
    color: 2px solid ${({ theme }) => theme.colors.grey};
    margin-left: 30px;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    p {
        color: 2px solid ${({ theme }) => theme.colors.grey};
    }

    ul {
        list-style: none;
        margin: 0px;
        margin-left: 5px;
        padding: 0px;
    }
    li {
        margin: 7px 0;
    }

    span {
        margin-right: 7px;
        text-decoration: underline;
    }

    @media screen and (max-width: 1400px) {
        margin-left: 15px;

        a {
            font-size: ${({ theme }) => theme.fontSize.m};
        }

        ul {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 1300px) {
        margin-left: 0px;
    }

    @media screen and (max-width: 1100px) {
        li {
            margin: 5.5px 0;
        }
        li:last-child {
            padding-bottom: 0px;
        }
    }
`;

export const SpecificationLinkSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
        border-radius: 50%;
        border: 2px solid transparent;
    }
    :hover {
        span {
            border: 2px solid ${({ theme }) => theme.colors.success};
        }
    }
`;
export const Icon = styled.div`
    padding: 4px 3px 0px 3px;
    font-size: 20px;
`;

export const SpecificationDescription = styled.div`
    padding-bottom: 4px; ;
`;
