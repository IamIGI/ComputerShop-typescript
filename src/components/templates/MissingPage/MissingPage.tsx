import { Wrapper } from './MissingPage.style';
import MissingPageImg from 'data/404_page.jpg';

const MissingPage = () => {
    return (
        <Wrapper>
            <img src={MissingPageImg} alt="Missing page" />{' '}
        </Wrapper>
    );
};

export default MissingPage;
