import ProductDescription from 'components/molecules/ProductDescription/ProductDescription';
import ProductMenu from 'components/molecules/ProductMenu/ProductMenu';
import SpecificationList from 'components/molecules/SpecificationList/SpecificationList';
import YouMayLike from 'components/molecules/YouMayLike/YouMayLike';
import {
    AboutProductSector,
    Description,
    MenuSector,
    Specification,
    YouMayLikeSector,
} from './ProductMIddleContent.style';

const ProductMiddleContent = () => {
    return (
        <>
            <MenuSector>
                <ProductMenu />
            </MenuSector>
            <AboutProductSector>
                <Description id="Description">
                    <ProductDescription />
                </Description>
                <Specification id="Specification">
                    <SpecificationList />
                </Specification>
                <YouMayLikeSector>
                    <YouMayLike />
                </YouMayLikeSector>
            </AboutProductSector>
        </>
    );
};

export default ProductMiddleContent;
