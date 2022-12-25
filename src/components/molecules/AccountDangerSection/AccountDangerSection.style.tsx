import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Section = styled.div`
    width: 60%;
    margin-left: 18%;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p {
        margin: 6px 0px;
    }

    @media screen and (max-width: 650px) {
        width: 70%;
    }

    @media screen and (max-width: 520px) {
        margin-left: 16%;

        h3 {
            font-size: ${({ theme }) => theme.fontSize.l};
            margin: 5px 0px;
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
            margin: 5px 0px;
        }
    }
`;

export const SectionTitle = styled.div`
    margin-left: 40px;
    color: red;
`;
