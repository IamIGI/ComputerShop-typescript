import { getProductById } from 'features/products/productsSlice';
import { ProductDataInterface } from 'interfaces/Product.interfaces';
import { useSelector } from 'react-redux';
import { Wrapper } from './TitleContent.style';

const TitleContent = () => {
    const product = useSelector(getProductById) as ProductDataInterface;

    return (
        <Wrapper>
            <h1>{product.name}</h1>
            <p>
                od: <span>{product.brand}</span> | kod producenta: {product.specification.producent_code.description} |{' '}
                {product._id}{' '}
            </p>
        </Wrapper>
    );
};

export default TitleContent;
