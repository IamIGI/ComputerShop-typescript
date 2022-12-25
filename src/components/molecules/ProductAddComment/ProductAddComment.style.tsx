import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
    max-height: 300px;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        width: 60%;
        min-width: 400px;
    }

    @media screen and (max-width: 500px) {
        width: 60%;
        min-width: 300px;
    }
`;
export const Description = styled.div`
    padding: 0 2%;

    @media screen and (max-width: 1000px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 800px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.xl};
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 500px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }

    @media screen and (max-width: 400px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l};
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.m};
        }
    }
`;

export const AddComment = styled.div`
    p {
        margin: 0;
        padding: 5px 0;
        font-size: 20px;
    }
`;

export const Icon = styled.div`
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};
`;
