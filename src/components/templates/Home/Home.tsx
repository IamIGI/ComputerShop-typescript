import HomeBottomContent from 'components/organisms/HomeBottomContent/HomeBottomContent';
import HomeTopContent from 'components/organisms/HomeTopContent/HomeTopContent';

import { Wrapper } from './Home.styles';

const Home = () => {
    return (
        <Wrapper>
            <HomeTopContent />
            <HomeBottomContent />
        </Wrapper>
    );
};

export default Home;
