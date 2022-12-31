import React from 'react';
import { Description, Icon, Section, Wrapper, LineSeparator } from './DeliveryPreview.style';
import { BsTruck, BsCalendarEvent } from 'react-icons/bs';
import { FaCashRegister } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';
import { getDeliveryDate, showPaymentMethod, showDeliveryMethod } from './DeliveryPreview.logic';
import { DeliveryOptionsInterface, PaymentOptionsInterface } from 'interfaces/Order.interfaces';

interface DeliveryPreviewProps {
    deliveryCheckboxesPay: PaymentOptionsInterface;
    deliveryCheckboxesOpt: DeliveryOptionsInterface;
    orderStreet: string;
}

const DeliveryPreview = ({ deliveryCheckboxesPay, deliveryCheckboxesOpt, orderStreet }: DeliveryPreviewProps) => {
    let deliveryDescriptionPay = showPaymentMethod(deliveryCheckboxesPay);
    let deliveryDescriptionOpt = showDeliveryMethod(deliveryCheckboxesOpt);

    return (
        <Wrapper>
            <a href="#delivery">
                <Section>
                    <Icon>
                        <BsTruck />
                    </Icon>
                    <Description>
                        <h5>Sposób dostawy:</h5>
                        <p>{deliveryDescriptionOpt}</p>
                    </Description>
                </Section>
                <LineSeparator />
            </a>
            <a href="#payment">
                <Section>
                    <Icon>
                        <FaCashRegister />
                    </Icon>
                    <Description>
                        <h5>Sposób płatności:</h5>
                        <p>{deliveryDescriptionPay}</p>
                    </Description>
                </Section>
                <LineSeparator />
            </a>
            <a href="#recipient">
                <Section>
                    <Icon>
                        <GrHomeRounded />
                    </Icon>
                    <Description>
                        <h5>Miejsce dostarczenia:</h5>
                        {orderStreet === '' ? <p>Wypełnij formularz</p> : <p>{orderStreet}</p>}
                    </Description>
                </Section>
                <LineSeparator />
            </a>
            <Section>
                <Icon>
                    <BsCalendarEvent />
                </Icon>
                <Description>
                    <h5>Data dostarczenia:</h5>
                    <p>{getDeliveryDate(true)}</p>
                </Description>
            </Section>
        </Wrapper>
    );
};

export default DeliveryPreview;
