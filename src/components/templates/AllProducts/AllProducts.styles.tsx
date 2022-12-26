import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Products = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-evenly;
    align-content: flex-start;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

export const ButtonForFilters = styled.div`
    display: none;

    @media screen and (max-width: 1100px) {
        margin-top: 10px;
        height: fit-content;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 15px 6px;
        border: 1px solid ${({ theme }) => theme.colors.grey};
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        writing-mode: vertical-rl;
        text-orientation: upright;
        font-weight: 700;

        &:hover {
            color: green;
            cursor: pointer;
        }
    }
`;

export const FilterIcon = styled.div`
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 10px;
    margin-left: 5px;
`;
