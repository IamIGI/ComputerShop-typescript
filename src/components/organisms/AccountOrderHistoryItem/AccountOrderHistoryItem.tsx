import AccountSettings from 'components/templates/AccountSettings/AccountSettings';
import {
    OrderSectionTitle,
    HistorySection,
    OrderTitleSection,
    ProductSection,
    Wrapper,
    Line,
} from './AccountOrderHistoryItem.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BsBox } from 'react-icons/bs';
import CheckController from 'components/atoms/CheckController/CheckController';
import { SectionTitle } from '../DeliveryOptions/DeliveryOptions.style';
import { useState, useEffect } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import { getDate } from '../AccountSettingsOrders/AccountSettingsOrders.logic';
import useWindowSize from 'hooks/useWindowSize';
import OrderSection from 'components/molecules/OrderSection/OrderSection';
import UserOrderSection from 'components/molecules/UserOrderSection/UserOrderSection';
import OrderUserDataSection from 'components/molecules/OrderUserDataSection/OrderUserDataSection';
import OrderProductElement from '../OrderProductElement/OrderProductElement';
import OrderSummarySection from '../OrderSummarySection/OrderSummarySection';
import { OrderDataInterface } from 'interfaces/Order.interfaces';

const AccountOrderHistoryItem = () => {
    const windowSize = useWindowSize();
    const orderId = useParams().orderId as string;
    const axiosPrivate = useAxiosPrivate();
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [orderItem, setOrderItem] = useState<OrderDataInterface | {}>({});

    useEffect(() => {
        const fetchOrder = async (orderId: string) => {
            try {
                const response = await axiosPrivate.get(`user/orderhistory/${orderId}`);
                setOrderItem(response.data);
                setWaitForFetch(false);
            } catch (err) {
                console.log('OrderHistoryItem: Fail');
                console.log(err);
            }
        };

        fetchOrder(orderId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderId]);

    return (
        <AccountSettings>
            <Wrapper>
                {waitForFetch ? (
                    <LoadingAnimation loadingSize={15} />
                ) : (
                    <>
                        <OrderTitleSection>
                            <SectionTitle>
                                <SectionDescription
                                    showTitle={windowSize.width <= 470 ? false : true}
                                    title={`Zamówienie `}
                                    description={`nr. ${(orderItem as OrderDataInterface)._id} 也 ${getDate(
                                        (orderItem as OrderDataInterface).transactionInfo.date.split(':')[0]
                                    )}`}
                                    icon={<BsBox />}
                                />
                            </SectionTitle>
                        </OrderTitleSection>
                        <HistorySection>
                            <CheckController status={(orderItem as OrderDataInterface).status} />
                        </HistorySection>
                        <OrderSection
                            title="Dostawa"
                            value={(orderItem as OrderDataInterface).transactionInfo.deliveryMethod}
                            type="delivery"
                        />
                        <OrderUserDataSection value={orderItem as OrderDataInterface} />
                        <OrderSection
                            title="Płatności"
                            value={(orderItem as OrderDataInterface).transactionInfo.paymentMethod}
                            type="payment"
                        />
                        <UserOrderSection value={orderItem as OrderDataInterface} title="Dane do faktury" />
                        <ProductSection>
                            <OrderSectionTitle>Zamówienie</OrderSectionTitle>
                            {(orderItem as OrderDataInterface).products.map((product) => (
                                <OrderProductElement key={product._id} product={product} />
                            ))}
                        </ProductSection>
                        <Line />
                        <OrderSummarySection value={orderItem as OrderDataInterface} />
                    </>
                )}
            </Wrapper>
        </AccountSettings>
    );
};

export default AccountOrderHistoryItem;
