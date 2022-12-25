import React, { useEffect } from 'react';
import {
    DescriptionArea,
    ImageArea,
    PriceArea,
    Section,
    Wrapper,
    List,
    Icon,
    DescriptionAreaMissing,
    DescriptionBottom,
    StyledButton,
    OldPrice,
    CurrentPrice,
    Title,
    ItemSection,
} from './BasketPreview.style';
import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from '../CartHint/CartHint.style';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getBasket, updatePriceToPay } from 'features/basket/basketSlice';
import formatPrices from 'helpers/formatPrices';

const BasketPreview = () => {
    const dispatchBasket = useDispatch();
    const basketItems = useSelector(getBasket);

    useEffect(() => {
        dispatchBasket(updatePriceToPay());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [basketItems]);

    return (
        <>
            <Wrapper>
                {basketItems.length === 0 ? (
                    <Section>
                        <Icon>
                            <BsBasket3 />
                        </Icon>
                        <DescriptionAreaMissing>
                            <h4>Brak produktów w koszyku </h4>
                        </DescriptionAreaMissing>
                    </Section>
                ) : (
                    <List>
                        {basketItems.map((item, index) => (
                            <li id={index.toString()} key={index}>
                                <ItemSection>
                                    <ImageArea>
                                        <img src={item.prevImg} alt="Product prev" />
                                    </ImageArea>
                                    <DescriptionArea>
                                        <Link to={`/product/${item._id}`}>
                                            <Title>{item.name}</Title>
                                        </Link>
                                        <DescriptionBottom>
                                            <div>{item.quantity} szt.</div>
                                            <div>
                                                <StyledButton
                                                    onClick={() => dispatchBasket(deleteProduct({ id: item._id }))}
                                                >
                                                    <AiOutlineDelete />
                                                </StyledButton>
                                            </div>
                                        </DescriptionBottom>
                                    </DescriptionArea>
                                    <PriceArea>
                                        {item.isDiscount ? (
                                            <>
                                                <OldPrice>
                                                    <span>{formatPrices(item.priceBeforeDiscount)} zł</span>
                                                </OldPrice>
                                                <CurrentPrice>{formatPrices(item.price)} zł</CurrentPrice>
                                            </>
                                        ) : (
                                            <CurrentPrice>
                                                <p>{formatPrices(item.price)} zł</p>
                                            </CurrentPrice>
                                        )}
                                    </PriceArea>
                                </ItemSection>
                            </li>
                        ))}
                    </List>
                )}
            </Wrapper>
        </>
    );
};

export default BasketPreview;
