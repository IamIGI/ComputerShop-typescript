import { useEffect, useState } from 'react';
import {
    Title,
    Wrapper,
    Image,
    Description,
    Price,
    Timer,
    GivenTime,
    DescTimer,
    Colon,
    ProductDescription,
    PromoDescription,
    InsideWrapper,
} from './HotShootContent.style';
import { getHotShootPromotion } from 'api/hotShoot';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { TimerCount } from './HotShootContent.logic';
import formatPrices from 'helpers/formatPrices';
import { useSelector } from 'react-redux';
import { getRefreshProduct } from 'features/products/productsSlice';
import { HotShootDataInterface } from 'interfaces/HotShoot.interfaces';

const HotShootContent = () => {
    const [counters, setCounters] = useState<[string, string, string]>(['1', '2', '3']);
    const [isFetchHotShoot, setIsFetchHotShoot] = useState<boolean>(true);
    const [hotShoot, setHotShoot] = useState<HotShootDataInterface | {}>({});
    const refresh = useSelector(getRefreshProduct);

    useEffect(() => {
        const fetchHotShoot = async () => {
            setIsFetchHotShoot(true);
            const response = await getHotShootPromotion();
            setHotShoot(response);
            setIsFetchHotShoot(false);
        };
        fetchHotShoot();

        const interval = setInterval(async () => {
            setCounters(TimerCount());
        }, 1000);

        return () => clearInterval(interval);
    }, [refresh]);

    return (
        <Wrapper>
            {isFetchHotShoot ? (
                <LoadingAnimation loadingSize={15} />
            ) : (
                <InsideWrapper to={`/product/${(hotShoot as HotShootDataInterface).productData._id}`}>
                    <ProductDescription>
                        <Title>
                            <h2>Gorący strzał</h2>
                        </Title>
                        <Image>
                            <img src={(hotShoot as HotShootDataInterface).productData.prevImg} alt="product" />
                        </Image>
                        <Description>{(hotShoot as HotShootDataInterface).productData.name}</Description>
                    </ProductDescription>
                    <PromoDescription>
                        <Price>
                            <p>
                                <span>{formatPrices((hotShoot as HotShootDataInterface).productData.price)} zł</span>
                            </p>
                            <h3>
                                {formatPrices(
                                    (
                                        (hotShoot as HotShootDataInterface).productData.price -
                                        (hotShoot as HotShootDataInterface).discount
                                    ).toFixed(2)
                                )}{' '}
                                zł
                            </h3>
                        </Price>
                        <DescTimer>
                            <h3>
                                Następny <span>HotShoot</span> za:
                            </h3>
                        </DescTimer>
                        <Timer>
                            <GivenTime>{counters[0]}</GivenTime>
                            <Colon>:</Colon>
                            <GivenTime>{counters[1]}</GivenTime>
                            <Colon>:</Colon>
                            <GivenTime>{counters[2]}</GivenTime>
                        </Timer>
                    </PromoDescription>
                </InsideWrapper>
            )}
        </Wrapper>
    );
};

export default HotShootContent;
