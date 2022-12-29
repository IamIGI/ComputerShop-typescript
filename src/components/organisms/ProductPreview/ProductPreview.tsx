import { useState, useEffect } from 'react';

import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import BadFiltersInfo from 'components/molecules/BadFiltersInfo/BadFiltersInfo';
import useWindowSize from 'hooks/useWindowSize';
import ProductPreviewItem from 'components/molecules/ProductPreviewItem/ProductPreviewItem';
import { store } from 'app/store';
import {
    fetchProducts,
    getAllProducts,
    getProductsErrors,
    getProductsFilters,
    getProductsStatus,
    getRefreshProduct,
} from 'features/products/productsSlice';
import { useSelector } from 'react-redux';
import productsPreviewLogic from './productsPreview.logic';

interface ProductPreviewProps {
    allProducts?: boolean;
    limitTheNumber?: boolean;
}

const ProductPreview = ({ allProducts = false, limitTheNumber = false }: ProductPreviewProps) => {
    const [numberOfProducts, setNumberOfProducts] = useState<number>(0);
    const windowSize = useWindowSize();

    const productFilters = useSelector(getProductsFilters);
    const products = useSelector(getAllProducts);
    const productsStatus = useSelector(getProductsStatus);
    const productsError = useSelector(getProductsErrors);
    const refresh = useSelector(getRefreshProduct);

    useEffect(() => {
        store.dispatch(fetchProducts());
    }, [productFilters, refresh]);

    useEffect(() => {
        setNumberOfProducts(productsPreviewLogic.handleNumberOfProducts(windowSize, limitTheNumber, products.length));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize, products]);

    return (
        <>
            {productsStatus === 'loading' ? (
                <LoadingAnimation loadingSize={15} />
            ) : products.length === 0 ? (
                <BadFiltersInfo />
            ) : productsStatus === 'succeeded' ? (
                <>
                    {products.slice(0, numberOfProducts).map((item, index) => (
                        <ProductPreviewItem key={index} item={item} allProducts={allProducts} />
                    ))}
                </>
            ) : (
                <p>{productsError}</p>
            )}
        </>
    );
};

export default ProductPreview;
