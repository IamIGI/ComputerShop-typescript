import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 96%;
    height: 100%;
    padding: 20px 2% 50px 2%;

    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }

    @media screen and (max-width: 500px) {
        width: 98%;
        padding: 10px 1% 50px 1%;
    }
`;

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    padding: 0px 2% 50px 0%;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin: 10px 0 0 0;
        padding: 0px;
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        order: 2;
    }
`;
//----------------------------------------------------
export const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 28%;
    margin-left: 2%;
    height: fit-content;
    padding: 5px 1% 10px 1%;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px, rgb(0 0 0 / 20%) 0px 0px 2px 1px;
    border-radius: 20px;
    h3 {
        margin-left: 10px;
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        order: 1;
        margin-left: 0%;
        margin-bottom: 10px;
        position: static;
        padding: 5px 1% 10px 4%;
    }

    @media screen and (max-width: 400px) {
        padding: 5px 1% 10px 3%;
        h3 {
            margin: 10px;
        }
    }
`;

export const TitlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    a {
        width: 100%;
        text-decoration: none;
        color: black;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

export const Number = styled.div`
    width: 100%;
    max-width: 20px;
    font-size: ${({ theme }) => theme.fontSize.l_plus};
    text-align: center;
    font-weight: 700;
    color: grey;
`;

export const TitleContents = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    width: 100%;

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 15px;
    }
`;

//--------------------------------------------------------------

export const Legend = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    color: #989898;

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const InfoWrapper = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    color: #989898;

    @media screen and (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const Date = styled.div`
    width: fit-content;
    align-items: left;
    text-align: left;

    @media screen and (max-width: 500px) {
        padding-left: 2%;
    }
`;

export const Author = styled.div`
    display: flex;
    width: fit-content;
    align-items: right;
    text-align: right;
`;

export const DescriptionWrapper = styled.div`
    h2 {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin: 10px 0 0 0;
        padding: 0px;
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 500px) {
        h2 {
            font-size: ${({ theme }) => theme.fontSize.l};
            margin: 10px 0 0 0;
            padding: 0px;
        }

        p {
            font-size: ${({ theme }) => theme.fontSize.m};
            line-height: 18px;
        }
    }
`;

export const DescriptionImg = styled.div`
    margin: 10px 0px 0px 0px;
    img {
        width: 100%;
        /* max-height: 200px; */
    }
`;

export const ContentContainer = styled.div``;

export const BigScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const SmallScreen = styled.div`
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    order: 0;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.xl};
        margin: 10px 0 0 0;
        padding: 0px;
    }

    p {
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 900px) {
        display: flex;
    }

    @media screen and (max-width: 650px) {
        h1 {
            font-size: ${({ theme }) => theme.fontSize.l_plus};
            margin: 7px 0 0 0;
        }
        P {
            font-size: ${({ theme }) => theme.fontSize.m_plus};
        }
    }
`;
