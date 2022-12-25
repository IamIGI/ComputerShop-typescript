import { createContext, useState, useEffect, ReactNode } from 'react';
import useAuth from 'hooks/useAuth';
import { axiosPrivate } from 'api/axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket, replaceBasket } from 'features/basket/basketSlice';
import { AuthContextInterface } from './AuthProvider';

interface PromoCodesProviderProps {
    children: ReactNode;
}

interface PromoCodesResponseInterface {
    prevImg: string;
    _id: string;
    quantity: number;
    name: string;
    brand: string;
    price: number;
    isDiscount: boolean;
    priceBeforeDiscount: number; // to fix
}

export interface PromoCodesContextInterface {
    successfullyUsedPromoCode: boolean;
    promoCode: string;
    promoCodeAlert: string;
    promoCodeInputDisabled: boolean;
    promoCodeDisabled: () => void;
    promoCodeEnabled: () => void;
    promoCodeSubmit: () => Promise<PromoCodesResponseInterface[] | void>;
    sendPromoCode: (value: string) => void;
    resetPromoCode: () => void;
    promoCodeUsedSucceeded: () => void;
}

interface PromoCodesResponseErrorInterface {
    message: string;
    errCode: string;
}

const PromoCodesContext = createContext<PromoCodesContextInterface | {}>({});

export const PromoCodesProvider = ({ children }: PromoCodesProviderProps) => {
    const basketItems = useSelector(getBasket);
    const dispatchBasket = useDispatch();

    const { auth } = useAuth() as AuthContextInterface;
    const [promoCodeInputDisabled, setPromoCodeInputDisabled] = useState<boolean>(false);
    const [successfullyUsedPromoCode, setSuccessfullyUsedPromoCode] = useState<boolean>(false);
    const [promoCode, setPromoCode] = useState<string>('');
    const [promoCodeAlert, setPromoCodeAlert] = useState<string>('');

    const notifyUsedPromoCode = () => {
        toast.success('Użyto kodu promocyjnego', {
            duration: 2000,
        });
    };

    useEffect(() => {
        setTimeout(() => {
            setPromoCodeAlert('');
        }, 4000);
    }, [promoCodeAlert]);

    useEffect(() => {
        if (basketItems !== null && basketItems.length === 0) setPromoCodeInputDisabled(false);
    }, [basketItems]);

    const promoCodeDisabled = () => {
        setPromoCodeInputDisabled(true);
    };

    const promoCodeEnabled = () => {
        setPromoCodeInputDisabled(false);
    };

    const promoCodeSubmit = async () => {
        const data = { code: promoCode, products: basketItems, auth: auth.id };
        const response = await axiosPrivate.post('/promocodes/checkproducts', data);

        const promoCodesResponse: PromoCodesResponseInterface[] = response.data;
        if (!Array.isArray(promoCodesResponse)) {
            const responseObject: PromoCodesResponseErrorInterface = promoCodesResponse;
            if (responseObject.errCode === '001') {
                setPromoCodeAlert('Podano zły kod');
                return;
            }
            if (responseObject.errCode === '002') {
                setPromoCodeAlert('Podany kod nie przecenia żadnego z produktów');
                return;
            }
            if (responseObject.errCode === '003') {
                setPromoCodeAlert('Podany kod został już użyty');
                return;
            }
        }

        promoCodeDisabled();
        setSuccessfullyUsedPromoCode(true);
        setPromoCodeAlert('Przeceniono produkt');
        notifyUsedPromoCode();

        const discountProduct_Id = promoCodesResponse[0]._id;

        const newBasketItems = basketItems.filter((item) => {
            return item._id !== discountProduct_Id;
        });
        promoCodesResponse.map((item) => newBasketItems.push(item));
        dispatchBasket(replaceBasket(newBasketItems));
    };

    const sendPromoCode = (value: string) => {
        setPromoCode(value);
    };

    const promoCodeUsedSucceeded = () => {
        setSuccessfullyUsedPromoCode(true);
    };

    const resetPromoCode = () => {
        setSuccessfullyUsedPromoCode(false);
        setPromoCode('');
        promoCodeEnabled();
    };
    return (
        <PromoCodesContext.Provider
            value={{
                successfullyUsedPromoCode,
                promoCode,
                promoCodeAlert,
                promoCodeInputDisabled,
                promoCodeDisabled,
                promoCodeEnabled,
                promoCodeSubmit,
                sendPromoCode,
                resetPromoCode,
                promoCodeUsedSucceeded,
            }}
        >
            {children}
        </PromoCodesContext.Provider>
    );
};

export default PromoCodesContext;
