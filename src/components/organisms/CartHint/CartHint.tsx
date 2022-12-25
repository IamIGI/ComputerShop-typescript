import {
    ProductsSection,
    Wrapper,
    Image,
    TitleSection,
    Quantity,
    Link,
    ProductQuantity,
    RemoveBasket,
    BottomWrapper,
    DeleteProduct,
} from './CartHint.style';
import { Button } from 'components/atoms/Button/Button';
import { IoTrashBinOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import ScrollTop from 'helpers/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getBasket, removeBasket } from 'features/basket/basketSlice';

const CartHint = () => {
    const dispatchBasket = useDispatch();
    const basketItems = useSelector(getBasket);

    const getQuantityOfItems = () => {
        let temp = 0;
        basketItems.map((item) => (temp += item.quantity));
        return temp;
    };

    return (
        <>
            {basketItems.length === 0 ? (
                <></>
            ) : (
                <>
                    <Wrapper>
                        <TitleSection>
                            <Quantity>{getQuantityOfItems()}</Quantity>
                            Koszyk
                        </TitleSection>

                        <ProductsSection>
                            {basketItems.map((item, index) => (
                                <Image key={index}>
                                    <ProductQuantity>{item.quantity}</ProductQuantity>
                                    <DeleteProduct onClick={() => dispatchBasket(deleteProduct({ id: item._id }))}>
                                        <MdOutlineDelete />
                                    </DeleteProduct>
                                    <Link to={`/product/${item._id}`} key={item._id} onClick={() => ScrollTop('Top')}>
                                        <img src={item.prevImg} alt="product preview" />
                                    </Link>
                                </Image>
                            ))}
                        </ProductsSection>
                        <BottomWrapper>
                            <Link to={`/basket`}>
                                <Button>Do koszyka</Button>
                            </Link>
                            <RemoveBasket onClick={() => dispatchBasket(removeBasket())}>
                                <IoTrashBinOutline />
                            </RemoveBasket>
                        </BottomWrapper>
                    </Wrapper>
                </>
            )}
        </>
    );
};

export default CartHint;
