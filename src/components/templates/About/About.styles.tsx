import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;

    padding: 0px 3% 50px 3%;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 27px;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    @media screen and (max-width: 650px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        padding: 0 2% 30px 3%;
    }
`;

export const Title = styled.div`
    width: 100%;
    margin: 40px 0 20px 0;
`;

export const Description = styled.div``;
