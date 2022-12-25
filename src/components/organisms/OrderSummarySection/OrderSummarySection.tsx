import React from 'react';
import { getDeliveryPrice } from '../AccountOrderHistoryItem/AccountOrderHistoryItem.logic';
import { Line } from '../AccountOrderHistoryItem/AccountOrderHistoryItem.style';
import { Wrapper } from './OrderSummarySection.style';
import formatPrices from 'helpers/formatPrices';
import { OrderDataInterface } from 'interfaces/Order.interfaces';

interface OrderSummarySectionProps {
    value: OrderDataInterface;
}

const OrderSummarySection = ({ value }: OrderSummarySectionProps) => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <div> Wartość koszyka:</div>
                    <div>
                        {formatPrices(
                            (
                                value.transactionInfo.price - getDeliveryPrice(value.transactionInfo.deliveryMethod)
                            ).toFixed(2)
                        )}
                        zł
                    </div>
                </li>
                <li>
                    <div>Koszt dostawy: </div>
                    <div>{getDeliveryPrice(value.transactionInfo.deliveryMethod)} zł</div>
                </li>
                <Line />
                <li>
                    <div>Razem: </div>
                    <div>{formatPrices(value.transactionInfo.price.toFixed(2))} zł</div>
                </li>
            </ul>
        </Wrapper>
    );
};

export default OrderSummarySection;
