import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 30px;

    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    form {
        width: 100%;
    }

    @media screen and (max-width: 1050px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    @media screen and (max-width: 550px) {
        padding: 30px 0px;
    }
`;

export const Section = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: fit-content;
    padding: 10px 50px 30px 50px;
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 4px 0px, rgb(0 0 0 / 8%) 0px 0px 2px 1px;
    border-radius: 10px;
    gap: 15px;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin-bottom: 0px;
    }
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 550px) {
        padding: 10px 30px;
        gap: 10px;
        width: 90%;
    }
`;

export const BottomLogin = styled.div`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 10px;

    :hover {
        cursor: pointer;
    }

    @media screen and (max-width: 550px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const RegisterSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    p {
        width: 250px;
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 600px) {
        gap: 15px;
        p {
            /* font-size: ${({ theme }) => theme.fontSize.m_plus}; */
        }
    }

    @media screen and (max-width: 410px) {
        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;

export const AuthorizationInstructions = styled.div`
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const RegisterInstructions = styled.div`
    justify-content: center;
    text-align: center;
    width: 80%;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.25rem;
    position: relative;
    margin-left: 10%;
    margin-top: 7px;
    margin-bottom: 10px;
`;

export const ErrMsg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;
