import { useEffect, useState } from 'react';
import {
    BuyButton,
    Separator,
    Wrapper,
    DiscountSize,
    OldPrice,
    PriceSection,
    CurrentPrice,
    BuySection,
    BuyIcon,
    ArticleLink,
    BuyButtonMargin,
} from './ProductBuyContent.style';
import { BsCartPlus } from 'react-icons/bs';
import { RiCoinLine } from 'react-icons/ri';
import ProductBuyHint from 'components/atoms/ProductBuyHint/ProductBuyHint';
import PopUpInstallment from 'components/organisms/PopUpInstallment/PopUpInstallment';
import { FiSmartphone } from 'react-icons/fi';
import PopUpFreeDelivery from 'components/organisms/PopUpFreeDelivery/PopUpFreeDelivery';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import SetFilterItems from 'components/atoms/SetFilterItems/SetFilterItems';
import { numberOptions } from './ProductBuyContent.logic';
import formatPrices from 'helpers/formatPrices';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'features/products/productsSlice';
import { addProductToBasket } from 'features/basket/basketSlice';
import { AppDispatch } from 'app/store';
import { ProductDataInterface } from 'interfaces/Product.interfaces';
import { FiltersDropDownListInterface } from 'interfaces/GLOBAL.interfaces';

const ProductBuyContent = () => {
    const dispatchBasket = useDispatch<AppDispatch>();

    const product = useSelector(getProductById) as ProductDataInterface;
    const [quantity, setQuantity] = useState<number>(1);
    const [priceBeforeDiscount, setPriceBeforeDiscount] = useState<string>('0');
    const [isDiscount, setIsDiscount] = useState<boolean>(false);
    const [resetProductQuantity, setResetProductQuantity] = useState<boolean>(false);

    const handleAddProduct = () => {
        setQuantity(1);
        dispatchBasket(addProductToBasket({ product, quantity }));

        handleResetProductQuantity(true);
    };

    const handleResetProductQuantity = (value: boolean) => {
        setResetProductQuantity(value);
    };

    const getPrice = (product: ProductDataInterface) => {
        if (product.special_offer.mode) {
            setPriceBeforeDiscount((product.price + product.special_offer.price).toFixed(2));
            setIsDiscount(true);
        } else {
            setPriceBeforeDiscount('0'); // don't matter
            setIsDiscount(false);
        }
    };

    const handleQuantity = (data: FiltersDropDownListInterface[]) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                setQuantity(data[i].value as number);
                break;
            }
        }
    };

    useEffect(() => {
        getPrice(product);
    }, [product]);

    return (
        <>
            <Wrapper>
                {isDiscount ? (
                    <>
                        <DiscountSize>Oszczędzasz {product.special_offer.price} zł </DiscountSize>
                        <PriceSection>
                            <OldPrice>{formatPrices(priceBeforeDiscount)} zł</OldPrice>
                            <CurrentPrice> {formatPrices(product.price.toFixed(2))} zł</CurrentPrice>
                        </PriceSection>
                    </>
                ) : (
                    <PriceSection>
                        <CurrentPrice> {formatPrices(product.price)} zł</CurrentPrice>
                    </PriceSection>
                )}

                <BuySection>
                    <SetFilterItems
                        afterClickWrap={true}
                        selectOptionsInCenter={true}
                        OneTimeChoice={true}
                        width="50px"
                        description={''}
                        filterData={numberOptions}
                        handleItems={handleQuantity}
                        handleReset={handleResetProductQuantity}
                        reset={resetProductQuantity}
                    />
                    <BuyButtonMargin>
                        <BuyButton onClick={() => handleAddProduct()}>
                            <BuyIcon>
                                <BsCartPlus />
                            </BuyIcon>
                            <div> Dodaj do koszyka</div>
                        </BuyButton>
                    </BuyButtonMargin>
                </BuySection>
                <ArticleLink to={'/articles/63754235f4d73ff45867a613'}>
                    <ProductBuyHint icon={<FiSmartphone />} title="Zakupy z aplikacji" ask="Dowiedz się więcej" />
                </ArticleLink>
                <Separator />
                <ProductBuyHint
                    icon={<TbShoppingCartDiscount />}
                    title="Dzień zniżek"
                    ask="Sprawdź szczegóły"
                    popUp={<PopUpFreeDelivery product={product} />}
                />
                <Separator />
                <ProductBuyHint
                    icon={<RiCoinLine />}
                    title={` Rata tylko ${formatPrices(Number((product.price / 24).toFixed(2)))} zł`}
                    ask="Oblicz ratę"
                    popUp={<PopUpInstallment product={product} />}
                />
            </Wrapper>
        </>
    );
};

export default ProductBuyContent;
