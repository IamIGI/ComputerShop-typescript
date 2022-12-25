import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px;
    width: fit-content;
    margin: auto;
    min-width: 350px;

    a {
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        border-bottom: 2px solid white;
        color: ${({ theme }) => theme.colors.darkGrey};

        :hover {
            border-bottom: 2px solid ${({ theme }) => theme.colors.success};
            color: ${({ theme }) => theme.colors.black};
        }
    }

    @media screen and (max-width: 700px) {
        a {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
    }

    @media screen and (max-width: 450px) {
        gap: 20px;
    }

    @media screen and (max-width: 380px) {
        a {
            font-size: ${({ theme }) => theme.fontSize.l};
        }
        gap: 15px;
    }
`;
