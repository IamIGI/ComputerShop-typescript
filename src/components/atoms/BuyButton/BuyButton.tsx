import { StyledButton } from './BuyButton.styles';
import { BsCartPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addProductToBasket } from 'features/basket/basketSlice';
import { ProductDataInterface } from 'interfaces/product.interfaces';

const BuyButton = ({ item }: { item: ProductDataInterface }) => {
    const basketDispatch = useDispatch();

    const product = item;

    return (
        <StyledButton onClick={() => basketDispatch(addProductToBasket({ product, quantity: 1 }))}>
            <BsCartPlus />
        </StyledButton>
    );
};

export default BuyButton;
