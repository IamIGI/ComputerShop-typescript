import {
    Image,
    Info,
    InfoCode,
    InfoDescription,
    InsideWrapper,
    ProductName,
    ProductSection,
    Title,
    Wrapper,
} from './PopUpFreeDelivery.style';
import toast from 'react-hot-toast';
import { ProductPrevDataInterface } from 'interfaces/Product.interfaces';

interface PopUpFreeDeliveryProps {
    product: ProductPrevDataInterface;
}

const PopUpFreeDelivery = ({ product }: PopUpFreeDeliveryProps) => {
    function copyToClipboard(code: string) {
        navigator.clipboard.writeText(code);
        toast.success('Skopiowano kod', {
            duration: 2000,
        });
    }

    return (
        <Wrapper>
            <Title>Dzień zniżek</Title>
            <InsideWrapper>
                <ProductSection>
                    <Image>
                        <img src={product.prevImg} alt="product" />
                    </Image>
                    <ProductName>{product.name}</ProductName>
                </ProductSection>
                <Info>
                    <InfoDescription>Skorzystaj z dnia zniżek:</InfoDescription>
                    <InfoCode onClick={() => copyToClipboard('do_kieszeni')}>do_kieszeni</InfoCode>
                </Info>
            </InsideWrapper>
        </Wrapper>
    );
};

export default PopUpFreeDelivery;
