import { getRefreshProduct, handleRefreshProducts } from 'features/products/productsSlice';

import { useDispatch, useSelector } from 'react-redux';

const ChangeHotShootTimer = (): void => {
    const dispatch = useDispatch();
    const refresh = useSelector(getRefreshProduct);

    setInterval(async () => {
        let date = new Date().toString();
        let time = date.split(' ')[4];
        let hours = time.split(':')[0];
        let minutes = time.split(':')[1];
        let seconds = time.split(':')[2];
        if ((hours === '10' || hours === '22') && minutes === '00' && seconds === '05') {
            console.log('Refresh hotShootPromotion: 0' + refresh, !refresh);

            dispatch(handleRefreshProducts());
        }
    }, 1000);

    return;
};

export default ChangeHotShootTimer;
