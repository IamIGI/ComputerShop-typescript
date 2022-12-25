import styled from 'styled-components';

export const UniversitySection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const UniversityInfo = styled.div`
    width: 40%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 650px) {
        min-width: 0;
        width: fit-content;
    }
`;

export const UniversityDescription = styled.div``;

export const UniversityData = styled.div`
    a {
        color: blue;
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
`;

export const UniversityImage = styled.div`
    width: 45%;
    min-width: 350px;
    justify-content: center;
    align-self: center;
    img {
        border-radius: 30px;
        width: 100%;
        max-height: auto;
    }

    @media (max-width: 650px) {
        img {
            border-radius: 20px;
        }
    }
`;
