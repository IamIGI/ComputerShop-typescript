import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { VscBook } from 'react-icons/vsc';
import { Wrapper, InsideWrapper } from './ProductDescription.style';
import { useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { ProductDataInterface } from 'interfaces/Product.interfaces';

const ProductDescription = () => {
    const product = useSelector(getProductById) as ProductDataInterface;
    return (
        <>
            <Wrapper>
                <SectionDescription title={'Opis'} icon={<VscBook />} />
                {product.description.map((item, index) => (
                    <InsideWrapper key={index}>
                        <h3>{item.title}</h3>
                        {item.content.map((content, index) => (
                            <p key={index}>{content.p}</p>
                        ))}
                        <img src={item.image} alt="img" />
                    </InsideWrapper>
                ))}
            </Wrapper>
        </>
    );
};

export default ProductDescription;
