import { useEffect, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { CircleCheck, Description, Line, WrapperTop, WrapperBottom } from './CheckController.style';

interface CheckControllerProps {
    status: number;
}

interface OrderStatus {
    new: boolean;
    inRealization: boolean;
    send: boolean;
    finished: boolean;
}

const CheckController = ({ status }: CheckControllerProps) => {
    const [orderStatus, setOrderStatus] = useState<OrderStatus>({
        new: false,
        inRealization: false,
        send: false,
        finished: false,
    });
    useEffect(() => {
        switch (status) {
            case 0:
                setOrderStatus((prevValue) => {
                    return { ...prevValue, new: true };
                });
                break;
            case 1:
                setOrderStatus((prevValue) => {
                    return { ...prevValue, new: true, inRealization: true };
                });
                break;
            case 2:
                setOrderStatus((prevValue) => {
                    return { ...prevValue, new: true, inRealization: true, send: true };
                });
                break;
            case 3:
                setOrderStatus(() => {
                    return { new: true, inRealization: true, send: true, finished: true };
                });
                break;

            default:
                console.log(`Bad status order:  ${status}`);
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <WrapperTop>
                <CircleCheck style={orderStatus.new ? { color: 'green' } : {}}>
                    <BsCheckCircle />
                </CircleCheck>
                <Line />
                <CircleCheck style={orderStatus.inRealization ? { color: 'green' } : {}}>
                    <BsCheckCircle />
                </CircleCheck>
                <Line />
                <CircleCheck style={orderStatus.send ? { color: 'green' } : {}}>
                    <BsCheckCircle />
                </CircleCheck>
                <Line />
                <CircleCheck style={orderStatus.finished ? { color: 'green' } : {}}>
                    <BsCheckCircle />
                </CircleCheck>
            </WrapperTop>
            <WrapperBottom>
                <Description style={orderStatus.new ? { color: 'black' } : {}}>Nowe</Description>
                <Description style={orderStatus.inRealization ? { color: 'black' } : {}}>W realizacji</Description>
                <Description style={orderStatus.send ? { color: 'black' } : {}}>Wysłane</Description>
                <Description style={orderStatus.finished ? { color: 'black' } : {}}>Zakończone</Description>
            </WrapperBottom>
        </>
    );
};

export default CheckController;
