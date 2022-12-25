import { Button } from 'components/atoms/Button/Button';
import {
    BottomSection,
    ListOfProducts,
    Product,
    Quantity,
    TitleSection,
    Wrapper,
    Description,
    TitleDescription,
    Link,
    InsideWrapper,
} from './BoughtPopUp.style';
import { RiCake3Line } from 'react-icons/ri';
import { BASE_URL } from 'data/URL';
import { useSelector } from 'react-redux';
import { getBasket } from 'features/basket/basketSlice';

interface BoughtPopUpInterface {
    onClose: () => void;
    orderId: string;
    isUserLogIn: boolean;
}

const BoughtPopUp = ({ onClose, orderId, isUserLogIn }: BoughtPopUpInterface) => {
    const basketItems = useSelector(getBasket);

    return (
        <Wrapper>
            <TitleSection>
                <div>
                    <RiCake3Line />
                </div>
                <TitleDescription> Gratulacje !</TitleDescription>
            </TitleSection>
            <InsideWrapper>
                <ListOfProducts>
                    <p>Zakupione produkty:</p>
                    {basketItems.map((product) => (
                        <Product key={product._id}>
                            <Description>
                                <span>&#x2022;</span>
                                {product.name.substring(0, 30)} ...
                            </Description>
                            <Quantity> {product.quantity} szt.</Quantity>
                        </Product>
                    ))}
                </ListOfProducts>
                <BottomSection>
                    {isUserLogIn ? (
                        <Link
                            onClick={() => {
                                onClose();
                            }}
                            to={`/accountSettings/orders/history/${orderId}`}
                        >
                            <Button onClick={() => onClose()}>Status zamówienia</Button>
                        </Link>
                    ) : (
                        <a href={`${BASE_URL}/order/pdf/${orderId}`}>
                            <Button>Pobierz fakturę</Button>{' '}
                        </a>
                    )}
                    <Button onClick={() => onClose()}>Wyjdź</Button>
                </BottomSection>
            </InsideWrapper>
        </Wrapper>
    );
};

export default BoughtPopUp;
