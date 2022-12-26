import BasketPreview from 'components/organisms/BasketPreview/BasketPreview';
import DeliveryOptions from 'components/organisms/DeliveryOptions/DeliveryOptions';
import DeliveryPreview from 'components/organisms/DeliveryPreview/DeliveryPreview';
import PaymentOptions from 'components/organisms/PaymentOptions/PaymentOptions';
import { useEffect, useState } from 'react';
import { Wrapper, Main, Prev, PrevWrapper } from './Basket.styles';
import PaymentPreview from 'components/organisms/PaymentPreview/PaymentPreview';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import useLogout from 'hooks/useLogout';
import useMultiCheckboxMemory from 'hooks/useMultiCheckboxMemory';
import { Prices } from 'data/Prices';
import Modal from 'components/atoms/Modal/Modal';
import BoughtPopUp from 'components/molecules/BoughtPopUp/BoughtPopUp';
import RecipientDetails from 'components/organisms/RecipientDetails/RecipientDetails';
import { initDeliveryCheckboxesOpt, initDeliveryCheckboxesPay, initRecipientDetails } from './Basket.logic';
import useLocalStorage from 'hooks/useLocalStorage';
import usePromoCodes from 'hooks/usePromoCodes';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket, getPriceToPay, removeBasket } from 'features/basket/basketSlice';
import { PromoCodesContextInterface } from 'context/PromoCodesProvider';
import { AuthContextInterface } from 'context/AuthProvider';
import { OrderTemplateDocumentInterface } from 'interfaces/Order.interfaces';
import { RecipientFormDataInterface } from 'interfaces/RecipientTemplates.interfaces';

const Basket = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = useLogout();

    const dispatchBasket = useDispatch();
    const basketItems = useSelector(getBasket);
    const priceToPay = useSelector(getPriceToPay);

    const { successfullyUsedPromoCode, promoCode, resetPromoCode } = usePromoCodes() as PromoCodesContextInterface;
    const { auth } = useAuth() as AuthContextInterface;

    const [deliveryCheckboxesOpt, setDeliveryCheckboxesOpt] = useMultiCheckboxMemory(
        'deliveryMethod',
        initDeliveryCheckboxesOpt
    );
    const [deliveryCheckboxesPay, setDeliveryCheckboxesPay] = useMultiCheckboxMemory(
        'paymentMethod',
        initDeliveryCheckboxesPay
    );
    const [orderData, setOrderData] = useMultiCheckboxMemory('orderForm', initRecipientDetails);
    const { street } = orderData;
    const [finishOrder, setFinishOrder] = useState<boolean>(false);
    const [priceForDelivery, setPriceForDelivery] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<[boolean, any?]>([false]);
    const [orderId, setOrderId] = useState<string>('');
    const [orderTemplateData, setOrderTemplateData] = useLocalStorage('orderData', '');
    const [orderReady, setOrderReady] = useState(false);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get('success')) {
            try {
                async function saveOrder() {
                    const response = await axiosPrivate.post(`order/make`, orderTemplateData);
                    setOrderId(response.data.OrderId);
                }
                saveOrder();
            } catch (err) {
                console.log(err);
            }
            setIsOpen([true]);
            let stateObj = { foo: 'bar' };
            window.history.replaceState(stateObj, 'page 3', 'basket.html');
        }
        // eslint-disable-next-line
    }, []);

    const resetAllData = () => {
        dispatchBasket(removeBasket());
        setOrderData(initRecipientDetails);
        setFinishOrder(false);
        resetPromoCode();
        setDeliveryCheckboxesOpt(initDeliveryCheckboxesOpt);
        setDeliveryCheckboxesPay(initDeliveryCheckboxesPay);
        localStorage.removeItem('basketItems');
        localStorage.removeItem('orderData');
        localStorage.removeItem('deliveryMethod');
        localStorage.removeItem('paymentMethod');
    };

    const onPopUpClose = () => {
        resetAllData();
        setIsOpen([false]);
    };

    const handleOrderData = (recipientFormData: RecipientFormDataInterface) => {
        setOrderData({
            ...recipientFormData,
        });
    };

    const finishHandler = () => {
        setFinishOrder(() => {
            return true;
        });
    };

    useEffect(() => {
        let isMounted = true;
        //make orderDocument
        //temp variables
        let tempOpt = '';
        let tempPay = '';
        let orderTemplateDocument: OrderTemplateDocumentInterface | {} = {};
        //logic---------------------------
        Object.values(deliveryCheckboxesOpt).map((x, index) => {
            if (x) {
                return (tempOpt = Object.keys(deliveryCheckboxesOpt)[index]);
            }
            return undefined;
        });

        Object.values(deliveryCheckboxesPay).map((x, index) => {
            if (x) {
                return (tempPay = Object.keys(deliveryCheckboxesPay)[index]);
            }
            return undefined;
        });

        switch (tempOpt) {
            case 'deliveryMan':
                setPriceForDelivery(Prices.deliveryMan);
                break;
            case 'atTheSalon':
                setPriceForDelivery(Prices.atTheSalon);
                break;
            case 'locker':
                setPriceForDelivery(Prices.locker);
                break;

            default:
                setPriceForDelivery(0.0);
                break;
        }

        const finalPrice = (priceToPay + priceForDelivery).toFixed(2);
        orderTemplateDocument = {
            status: 1, //all orders have to start from "In realization" status // for now
            products: basketItems,
            transactionInfo: {
                deliveryMethod: tempOpt,
                paymentMethod: tempPay,
                price: finalPrice,
                recipientDetails: orderData,
            },
            user: auth.id,
            usedPromoCode: { isUsed: successfullyUsedPromoCode, code: promoCode },
        };

        const { transactionInfo } = orderTemplateDocument as OrderTemplateDocumentInterface;
        const { deliveryMethod, paymentMethod, price, recipientDetails } = transactionInfo;
        const { email } = recipientDetails;

        if (price !== 0 && deliveryMethod !== '' && paymentMethod !== '' && email !== '') {
            setOrderReady(true);
        } else {
            setOrderReady(false);
        }

        //main statement
        if (price !== 0 && deliveryMethod !== '' && paymentMethod !== '' && email !== '') {
            if (finishOrder === true) {
                const sendUserOrder = async () => {
                    try {
                        if (
                            (orderTemplateDocument as OrderTemplateDocumentInterface).transactionInfo.paymentMethod ===
                            'card'
                        ) {
                            const products = [];
                            (orderTemplateDocument as OrderTemplateDocumentInterface).products.map((product) =>
                                products.push({ id: product._id, quantity: product.quantity })
                            );

                            const stripeObj = {
                                products: basketItems,
                                delivery: (orderTemplateDocument as OrderTemplateDocumentInterface).transactionInfo
                                    .deliveryMethod,
                            };

                            const response = await axiosPrivate.post(`stripe/checkout`, stripeObj);
                            setOrderTemplateData(orderTemplateDocument);
                            window.location = response.data.url;
                        } else {
                            const response = await axiosPrivate.post(`order/make`, orderTemplateDocument);
                            setOrderId(response.data.OrderId);
                        }
                    } catch (err) {
                        console.log(err);
                        await logout();
                        navigate('/', { state: { from: location }, replace: true });
                    }
                };
                isMounted && sendUserOrder();
                //clearData
                if (
                    (orderTemplateDocument as OrderTemplateDocumentInterface).transactionInfo.paymentMethod !== 'card'
                ) {
                    setIsOpen([true]);
                }
            }
        } else {
            setFinishOrder(false);
        }
        return () => {
            isMounted = false;
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deliveryCheckboxesOpt, deliveryCheckboxesPay, orderData, priceToPay, basketItems, finishOrder]);

    return (
        <Wrapper>
            <Main>
                <DeliveryOptions
                    initDeliveryCheckboxesOpt={initDeliveryCheckboxesOpt}
                    deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                    setDeliveryCheckboxesOpt={setDeliveryCheckboxesOpt}
                />
                <PaymentOptions
                    initDeliveryCheckboxesPay={initDeliveryCheckboxesPay}
                    deliveryCheckboxesPay={deliveryCheckboxesPay}
                    setDeliveryCheckboxesPay={setDeliveryCheckboxesPay}
                />
                <RecipientDetails handleOrderData={handleOrderData} />
            </Main>
            <Prev>
                <PrevWrapper>
                    <BasketPreview />
                    <DeliveryPreview
                        deliveryCheckboxesPay={deliveryCheckboxesPay}
                        deliveryCheckboxesOpt={deliveryCheckboxesOpt}
                        orderStreet={street}
                    />
                    <PaymentPreview
                        orderReady={orderReady}
                        isUserLogIn={Boolean(auth.id)}
                        finishHandler={finishHandler}
                        priceForDelivery={priceForDelivery}
                    />
                </PrevWrapper>
            </Prev>
            <Modal open={isOpen} onClose={onPopUpClose}>
                <BoughtPopUp onClose={onPopUpClose} orderId={orderId} isUserLogIn={Boolean(auth.id)} />
            </Modal>
        </Wrapper>
    );
};

export default Basket;
