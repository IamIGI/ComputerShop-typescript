import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 15px 0px;
    width: 100%;
    height: 100%;
    margin: 20px 10px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
