import HotShootContent from 'components/molecules/HotShootContent/HotShootContent';
import {
    Advertisement,
    ProductPrevWrapper,
    Recommended,
    RightTopWrapper,
    NormalScreenSize,
    SmallScreenSize,
} from './HomeTopContent.style';
import ProductPreview from '../ProductPreview/ProductPreview';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { AiOutlineHeart } from 'react-icons/ai';
import WelcomeImg from '../../../data/WelcomeIMG_resize.jpg';

const HomeTopContent = () => {
    return (
        <>
            <NormalScreenSize>
                <HotShootContent />
                <RightTopWrapper>
                    <Advertisement>
                        <img src={WelcomeImg} alt="What's my purpose" />
                    </Advertisement>
                    <Recommended>
                        <SectionDescription title={'Polecane'} icon={<AiOutlineHeart />} />
                        <ProductPrevWrapper>
                            <ProductPreview limitTheNumber={true} />
                        </ProductPrevWrapper>
                    </Recommended>
                </RightTopWrapper>
            </NormalScreenSize>
            <SmallScreenSize>
                <Advertisement>
                    <img src={WelcomeImg} alt="What's my purpose" />
                </Advertisement>
                <HotShootContent />
                <RightTopWrapper>
                    <Recommended>
                        <SectionDescription title={'Polecane'} icon={<AiOutlineHeart />} />
                        <ProductPrevWrapper>
                            <ProductPreview allProducts={true} limitTheNumber={true} />
                        </ProductPrevWrapper>
                    </Recommended>
                </RightTopWrapper>
            </SmallScreenSize>
        </>
    );
};

export default HomeTopContent;
