import styled from 'styled-components';
import { BuyButton } from '../ProductBuyContent/ProductBuyContent.style';

export const WrapperOutside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 560px;

    @media screen and (max-width: 625px) {
        min-width: 400px;
    }

    @media screen and (max-width: 450px) {
        min-width: 300px;
    }
`;
export const WrapperInside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin: 0 5%;
`;

export const Title = styled.div`
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    padding: 20px 0px 20px 7%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    border-bottom: 1px solid grey;

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        padding: 15px 0px 15px 7%;
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    flex-wrap: nowrap;
    margin-top: 1%;
    padding-bottom: 1%;
    border-bottom: 1px solid grey;
    margin-bottom: 2%;

    @media screen and (max-width: 450px) {
        padding-bottom: 0;
        margin-top: 0;
    }
`;

export const Image = styled.div`
    padding: 0;
    img {
        width: 160px;
        height: auto;
    }

    @media screen and (max-width: 900px) {
        img {
            width: 145px;
        }
    }

    @media screen and (max-width: 625px) {
        img {
            width: 130px;
        }
    }

    @media screen and (max-width: 450px) {
        img {
            width: 110px;
        }
    }
`;

export const ProductName = styled.div`
    padding-top: 3%;
    padding-left: 5%;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    padding-bottom: 2%;
    margin-bottom: 2%;
    border-bottom: 1px solid grey;
`;

export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 2%;
    padding-left: 1%;

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
        margin-bottom: 1%;
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const RatingStars = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSize.omegaBig};

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const Information = styled.div`
    padding-bottom: 2%;
    margin-bottom: 2%;
    border-bottom: 1px solid grey;
`;

export const LittleDescription = styled.div`
    margin-bottom: 2%;
    padding-left: 1%;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: grey;

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const AnonymousUser = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding-top: 7px;

    @media screen and (max-width: 450px) {
        justify-content: space-between;
    }
`;

export const UserDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 450px) {
        display: none;
    }
`;

export const UserDescriptionSmall = styled.div`
    margin-right: 10px;
    display: none;
    font-size: ${({ theme }) => theme.fontSize.m};
    @media screen and (max-width: 450px) {
        display: flex;
    }
`;

export const Input = styled.input`
    width: 40%;
    border-radius: 10px;
    border: 1px solid lightgrey;
    margin-left: 3%;
    padding: 9px 20px;
    color: grey;
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    :hover {
        border: 1px solid grey;
    }
    :focus {
        outline: none !important;
        border: 1px solid grey;
    }

    @media screen and (max-width: 900px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        padding: 5px 10px;
        margin-left: 0;
        width: 50%;
    }
`;

export const AddComment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    p {
        margin: 0;
        padding: 5px 20px;
        font-size: 20px;
    }
    margin-bottom: 14px;
`;

export const Alert = styled.div`
    margin-top: 15px;
    margin-left: 2%;
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const OpinionSection = styled.div`
    position: relative;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 160px;
    margin-top: 10px;
    padding: 12px 20px;
    border: 1px solid lightgrey;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: grey;
    border-radius: 20px;
    resize: none;

    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;

    :hover {
        border: 1px solid grey;
    }

    :focus {
        outline: none !important;
        border: 1px solid grey;
    }

    @media screen and (max-width: 900px) {
        height: 130px;
    }

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
        height: 110px;
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        height: 100px;
    }
`;

export const NumOfChars = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m};
        right: 12px;
        bottom: 6px;
    }
`;

export const FailureIcon = styled.div`
    padding-top: 8px;
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media screen and (max-width: 625x) {
        font-size: ${({ theme }) => theme.fontSize.l_plus};
    }
`;
export const FailureDescription = styled.div`
    margin-left: 5px;
`;
export const FailureSection = styled.div`
    max-width: 150px;
    margin-left: 10px;
    font-weight: 700;
    color: red;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.m_plus};

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const FileSection = styled.div`
    margin: 7px 0 7px 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const FilesAlert = styled.div`
    font-size: ${({ theme }) => theme.fontSize.m_plus};
    color: red;
    font-weight: 700;
`;

export const ButtonName = styled.div`
    font-size: ${({ theme }) => theme.fontSize.l_plus};

    @media screen and (max-width: 625px) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media screen and (max-width: 450px) {
        font-size: ${({ theme }) => theme.fontSize.m_plus};
    }
`;

export const ButtonAddComment = styled(BuyButton)`
    @media screen and (max-width: 625px) {
        height: 45px;
    }

    @media screen and (max-width: 450px) {
        margin-top: 20px;
        height: 35px;
    }
`;
