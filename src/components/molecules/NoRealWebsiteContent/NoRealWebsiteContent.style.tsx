import styled from 'styled-components';

export const InsideWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const Title = styled.div`
    text-align: center;
    color: red;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 10px;
`;

export const Subtitle = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
`;

export const ListSection = styled.div`
    li {
        line-height: 20px;
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
    margin-bottom: 10px;
`;

export const GitLink = styled.div`
    text-align: center;

    a {
        color: blue;
    }
`;

export const GetPDF = styled.div`
    width: fit-content;

    a {
        color: blue;
    }

    :hover {
        cursor: pointer;
    }
`;
