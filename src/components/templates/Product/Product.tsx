import { useEffect } from 'react';
import {
    Wrapper,
    TopWrapper,
    MidWrapper,
    BottomWrapper,
    HandyMenuBigScreen,
    TitleWhenSmallScreen,
} from './Product.styles';
import ProductTopContent from 'components/organisms/ProductTopContent/ProductTopContent';
import ProductMiddleContent from 'components/organisms/ProductMiddleContent/ProductMiddleContent';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import CommentsSection from 'components/templates/CommentsSection/CommentsSection';
import { useParams } from 'react-router-dom';
import ProductHandyMenu from 'components/molecules/ProductHandyMenu/ProductHandyMenu';
import TitleContent from 'components/molecules/TitleContent/TitleContent';
import { Separator } from 'components/atoms/Separator/Separator';
import { store } from 'app/store';
import { fetchProductById, getProductByIdStatus, getProductsErrors } from 'features/products/productsSlice';
import { useSelector } from 'react-redux';

const Product = () => {
    const code = useParams().id;

    useEffect(() => {
        if (code !== undefined) {
            store.dispatch(fetchProductById(code));
        }
    }, [code]);

    const productStatus = useSelector(getProductByIdStatus);
    const productError = useSelector(getProductsErrors);

    return (
        <Wrapper>
            {productStatus === 'loading' ? (
                <LoadingAnimation loadingSize={15} />
            ) : productStatus === 'succeeded' ? (
                <>
                    <TitleWhenSmallScreen>
                        <TitleContent />
                        <Separator />
                    </TitleWhenSmallScreen>
                    <HandyMenuBigScreen>
                        <ProductHandyMenu />
                    </HandyMenuBigScreen>
                    <TopWrapper id="Top">
                        <ProductTopContent />
                    </TopWrapper>
                    <MidWrapper>
                        <ProductMiddleContent />
                    </MidWrapper>
                    <BottomWrapper>
                        <CommentsSection />
                    </BottomWrapper>
                </>
            ) : (
                <p>{productError}</p>
            )}
        </Wrapper>
    );
};

export default Product;
