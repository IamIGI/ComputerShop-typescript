import { MdOutlinePayment } from 'react-icons/md';
import { CheckboxLocal, Description, Icon, Section, SectionTitle, Wrapper } from './PaymentOptions.style';
import { HiStatusOnline } from 'react-icons/hi';
import { RiVisaLine } from 'react-icons/ri';
import { BsCashCoin, BsWallet2, BsPiggyBank } from 'react-icons/bs';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { PaymentOptionsInterface } from 'interfaces/Order.interfaces';

interface PaymentOptionsProps {
    initDeliveryCheckboxesPay: PaymentOptionsInterface;
    deliveryCheckboxesPay: PaymentOptionsInterface;
    setDeliveryCheckboxesPay: (arg0: PaymentOptionsInterface | ((arg0: PaymentOptionsInterface) => void)) => void;
}

const PaymentOptions = ({
    initDeliveryCheckboxesPay,
    deliveryCheckboxesPay,
    setDeliveryCheckboxesPay,
}: PaymentOptionsProps) => {
    const setState = (name: string) => {
        let setValue = false;
        if (deliveryCheckboxesPay[name as keyof PaymentOptionsInterface]) {
            setValue = false;
        } else {
            setValue = true;
        }

        setDeliveryCheckboxesPay(() => {
            return { ...initDeliveryCheckboxesPay, [name]: setValue };
        });
    };

    return (
        <>
            <SectionTitle id="payment">
                <SectionDescription title={'Sposób płatności'} icon={<MdOutlinePayment />} />
            </SectionTitle>
            <Wrapper>
                <Section onClick={() => setState('online')}>
                    <CheckboxLocal
                        type="checkbox"
                        name="online"
                        checked={deliveryCheckboxesPay.online}
                        readOnly={true}
                    />
                    <Description>
                        <h4>
                            Płatność online <span>(bezpłatnie)</span>{' '}
                        </h4>
                    </Description>
                    <Icon>
                        <HiStatusOnline />
                    </Icon>
                </Section>
                <Section onClick={() => setState('card')}>
                    <CheckboxLocal type="checkbox" name="card" checked={deliveryCheckboxesPay.card} readOnly={true} />
                    <Description>
                        <h4>
                            Karta płatnicza online <span>(bezpłatnie)</span>
                        </h4>
                    </Description>
                    <Icon>
                        <RiVisaLine />
                    </Icon>
                </Section>
                <Section onClick={() => setState('cash')}>
                    <CheckboxLocal type="checkbox" name="cash" checked={deliveryCheckboxesPay.cash} readOnly={true} />
                    <Description>
                        <h4>Przelew gotówkowy</h4>
                    </Description>
                    <Icon>
                        <BsCashCoin />
                    </Icon>
                </Section>
                <Section onClick={() => setState('uponReceipt')}>
                    <CheckboxLocal
                        type="checkbox"
                        name="uponReceipt"
                        checked={deliveryCheckboxesPay.uponReceipt}
                        readOnly={true}
                    />
                    <Description>
                        <h4>Przy odbiorze</h4>
                    </Description>
                    <Icon>
                        <BsWallet2 />
                    </Icon>
                </Section>
                <Section onClick={() => setState('installment')}>
                    <CheckboxLocal
                        type="checkbox"
                        name="installment"
                        checked={deliveryCheckboxesPay.installment}
                        readOnly={true}
                    />
                    <Description>
                        <h4>Raty</h4>
                    </Description>
                    <Icon>
                        <BsPiggyBank />
                    </Icon>
                </Section>
            </Wrapper>
        </>
    );
};

export default PaymentOptions;
