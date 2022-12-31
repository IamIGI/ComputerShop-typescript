import { Wrapper, Section, CheckboxLocal, Description, Icon, SectionTitle } from './DeliveryOptions.style';
import { BsTruck, BsInboxes } from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { DeliveryOptionsInterface } from 'interfaces/Order.interfaces';
import { getDeliveryDate } from '../DeliveryPreview/DeliveryPreview.logic';

interface DeliveryOptionsProps {
    initDeliveryCheckboxesOpt: DeliveryOptionsInterface;
    deliveryCheckboxesOpt: DeliveryOptionsInterface;
    setDeliveryCheckboxesOpt: (arg0: DeliveryOptionsInterface | ((arg0: DeliveryOptionsInterface) => void)) => void;
}

const DeliveryOptions = ({
    initDeliveryCheckboxesOpt,
    deliveryCheckboxesOpt,
    setDeliveryCheckboxesOpt,
}: DeliveryOptionsProps) => {
    const setState = (name: string) => {
        let setValue = false;
        if (deliveryCheckboxesOpt[name as keyof DeliveryOptionsInterface]) {
            setValue = false;
        } else {
            setValue = true;
        }
        setDeliveryCheckboxesOpt(() => {
            return { ...initDeliveryCheckboxesOpt, [name]: setValue };
        });
    };

    return (
        <>
            <SectionTitle id="delivery">
                <SectionDescription title={'Sposób dostawy'} icon={<MdOutlineDeliveryDining />} />
            </SectionTitle>
            <Wrapper>
                <Section onClick={() => setState('deliveryMan')}>
                    <CheckboxLocal
                        type="checkbox"
                        name="deliveryMan"
                        checked={deliveryCheckboxesOpt.deliveryMan}
                        readOnly={true}
                    />
                    <Description>
                        <h4>Kurier – InPost, UPS, FedEx, DTS bezpłatnie</h4>
                        <p>Zamówienie dostaniesz: {getDeliveryDate()}</p>
                    </Description>
                    <Icon>
                        <BsTruck />
                    </Icon>
                </Section>
                <Section onClick={() => setState('atTheSalon')}>
                    <CheckboxLocal
                        type="checkbox"
                        name="atTheSalon"
                        checked={deliveryCheckboxesOpt.atTheSalon}
                        readOnly={true}
                    />
                    <Description>
                        <h4>Odbiór w salonie HotShoot</h4>
                        <p>Aktualna możliwośc odbioru, tylko: Kraków, ul. Czarnowiejska 66 Budynek B5</p>
                    </Description>
                    <Icon>
                        <FaRegBuilding />
                    </Icon>
                </Section>
                <Section onClick={() => setState('locker')}>
                    <CheckboxLocal
                        type="checkbox"
                        name="locker"
                        checked={deliveryCheckboxesOpt.locker}
                        readOnly={true}
                    />
                    <Description>
                        <h4>Paczkomat 24/7</h4>
                        <p>Aktualna możliwośc odbioru, tylko: Paczkomat KRA35A Reymonta 17 Kraków</p>
                    </Description>
                    <Icon>
                        <BsInboxes />
                    </Icon>
                </Section>
            </Wrapper>
        </>
    );
};

export default DeliveryOptions;
