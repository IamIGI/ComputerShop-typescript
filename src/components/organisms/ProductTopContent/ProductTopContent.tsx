import {
    BuySelector,
    CarouselBox,
    DataBuyWrapper,
    PrevData,
    Title,
    TopWrapper,
    BottomWrapper,
    HandyMenuSmallScreen,
} from './ProductTopContent.style';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import PrevDataProduct from 'components/molecules/PrevDataProduct/PrevDataProduct';
import ProductBuyContent from 'components/molecules/ProductBuyContent/ProductBuyContent';
import { Separator } from 'components/atoms/Separator/Separator';
import ProductGallery from 'components/atoms/ProductGallery/ProductGallery';
import ProductHandyMenu from 'components/molecules/ProductHandyMenu/ProductHandyMenu';

const ProductTopContent = () => {
    return (
        <>
            <TopWrapper>
                <CarouselBox>
                    <ProductGallery />
                </CarouselBox>
                <HandyMenuSmallScreen>
                    <ProductHandyMenu />
                </HandyMenuSmallScreen>
            </TopWrapper>
            <BottomWrapper>
                <Title>
                    <TitleContent />
                    <Separator />
                </Title>
                <DataBuyWrapper>
                    <PrevData>
                        <PrevDataProduct />
                    </PrevData>
                    <BuySelector>
                        <ProductBuyContent />
                    </BuySelector>
                </DataBuyWrapper>
            </BottomWrapper>
        </>
    );
};

export default ProductTopContent;
