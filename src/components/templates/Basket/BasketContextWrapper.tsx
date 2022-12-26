import { PromoCodesProvider } from 'context/PromoCodesProvider';
import Basket from './Basket';

const BasketContextWrapper = () => {
    return (
        <PromoCodesProvider>
            <Basket />
        </PromoCodesProvider>
    );
};

export default BasketContextWrapper;
