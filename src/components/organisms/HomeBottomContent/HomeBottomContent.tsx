import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import Contact from 'components/molecules/Contact/Contact';
import Newsletter from 'components/molecules/Newsletter/Newsletter';
import { Wrapper, InsideWrapper } from './HomeBottomContent.style';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import HomePrevArticles from 'components/molecules/HomePrevArticles/HomePrevArticles';

const HomeBottomContent = () => {
    return (
        <Wrapper>
            <SectionDescription title={'Artykuły'} icon={<BiNews />} />
            <HomePrevArticles />
            <SectionDescription title={'Informacje'} icon={<AiOutlineInfoCircle />} />
            <InsideWrapper>
                <Newsletter />
                <Contact />
            </InsideWrapper>
        </Wrapper>
    );
};

export default HomeBottomContent;
