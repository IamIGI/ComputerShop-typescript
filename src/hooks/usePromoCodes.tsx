import { useContext } from 'react';
import PromoCodesContext from 'context/PromoCodesProvider';

const usePromoCodes = () => {
    return useContext(PromoCodesContext);
};

export default usePromoCodes;
