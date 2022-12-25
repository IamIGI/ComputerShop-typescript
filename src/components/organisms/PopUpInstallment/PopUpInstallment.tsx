import React, { useEffect, useState } from 'react';
import {
    Title,
    Wrapper,
    ProductSection,
    Image,
    ProductName,
    InstallmentSection,
    InstallmentField,
    Info,
    InstallmentDescription,
    SliderSection,
    SumUp,
    InsideWrapper,
    SumUpDescription,
    SumUpAmount,
    Currency,
    InstallmentCurrency,
    PriceField,
} from './PopUpInstallment.style';
import Slider from 'components/atoms/Slider/Slider';
import formatPrices from 'helpers/formatPrices';
import { ProductDataInterface } from 'interfaces/Product.interfaces';

interface PopUpInstallmentProps {
    product: ProductDataInterface;
}

const PopUpInstallment = ({ product }: PopUpInstallmentProps) => {
    const maxSelfDeposit = product.special_offer.mode
        ? Number((product.price - product.special_offer.price).toFixed(2)) // there may be error
        : product.price;
    const maxNumberOfInstallment = 48;
    const [selfDeposit, setSelfDeposit] = useState<number>(0);
    const [numberOfInstallment, setNumberOfInstallment] = useState<number>(12);

    useEffect(() => {
        console.log(selfDeposit);
    }, [selfDeposit]);

    useEffect(() => {
        console.log(numberOfInstallment);
    }, [numberOfInstallment]);

    const handleSelfDeposit = (value: number) => {
        setSelfDeposit(value);
    };

    const handleNumberOfInstallment = (value: number) => {
        setNumberOfInstallment(value);
    };

    const calculateInstallmentAmount = (numberOfInstallment: number, selfDeposit: number) => {
        const productPrice = product.special_offer.mode
            ? Number((product.price - product.special_offer.price).toFixed(2))
            : Number(product.price);
        const installment = Math.floor(((productPrice - selfDeposit) / numberOfInstallment) * 100) / 100;
        return isFinite(installment) ? installment : 0;
    };

    console.log(product.name);
    return (
        <Wrapper>
            <Title>Oblicz ratę</Title>
            <InsideWrapper>
                <ProductSection>
                    <Image>
                        <img src={product.prevImg} alt="produkt" />
                    </Image>
                    <ProductName>{product.name}</ProductName>
                </ProductSection>
                <InstallmentSection>
                    <InstallmentDescription>Wartość produktu</InstallmentDescription>
                    <PriceField>
                        {product.special_offer.mode
                            ? formatPrices((product.price - product.special_offer.price).toFixed(2))
                            : formatPrices(product.price)}{' '}
                        <InstallmentCurrency>zł</InstallmentCurrency>
                    </PriceField>
                </InstallmentSection>
                <InstallmentSection>
                    <InstallmentDescription>Wpłata własna</InstallmentDescription>
                    <PriceField>
                        {selfDeposit} <InstallmentCurrency>zł</InstallmentCurrency>
                    </PriceField>
                </InstallmentSection>
                <SliderSection>
                    <Slider max={maxSelfDeposit} value={selfDeposit} handleValue={handleSelfDeposit} />
                </SliderSection>
                <InstallmentSection>
                    <InstallmentDescription>Liczba rat</InstallmentDescription>
                    <InstallmentField>{numberOfInstallment}</InstallmentField>
                </InstallmentSection>
                <SliderSection>
                    <Slider
                        max={maxNumberOfInstallment}
                        value={numberOfInstallment}
                        handleValue={handleNumberOfInstallment}
                    />
                </SliderSection>
                <SumUp>
                    <SumUpDescription>Orientacyjna wysokość raty:</SumUpDescription>
                    <SumUpAmount>
                        {formatPrices(calculateInstallmentAmount(numberOfInstallment, selfDeposit))}{' '}
                    </SumUpAmount>
                    <Currency>zł</Currency>
                </SumUp>
                <Info>
                    <p>
                        Obliczenia w kalkulatorze są orientacyjne. Bank przygotuje dla Ciebie ostateczną ofertę, kiedy
                        złożysz wniosek ratalny.
                    </p>
                </Info>
            </InsideWrapper>
        </Wrapper>
    );
};

export default PopUpInstallment;
