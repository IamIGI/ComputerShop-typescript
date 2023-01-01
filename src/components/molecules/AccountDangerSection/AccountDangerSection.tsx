import { useState } from 'react';
import useLogout from 'hooks/useLogout';
import { Section, Wrapper, SectionTitle } from './AccountDangerSection.style';
import { Button } from 'components/atoms/Button/Button';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FiAlertCircle } from 'react-icons/fi';
import Modal from 'components/atoms/Modal/Modal';
import PopUpAccountDelete from '../PupUpAccountDelete/PopUpAccountDelete';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { removeBasket } from 'features/basket/basketSlice';

const AccountDangerSection = () => {
    const dispatchBasket = useDispatch();

    const logout = useLogout();
    const [isOpen, setIsOpen] = useState<[boolean, { DataName: string; value: string } | {}]>([
        false,
        { DataName: '', value: '' },
    ]);
    const notify = () =>
        toast.success('Wylogowano', {
            icon: '🔐',
            duration: 2000,
        });

    const signOut = async () => {
        notify();
        dispatchBasket(removeBasket());
        await logout();
    };

    return (
        <>
            <SectionTitle>
                <SectionDescription title={'UWAGA!'} icon={<FiAlertCircle />} />
            </SectionTitle>
            <Wrapper>
                <Section>
                    <h3>Wylogowanie ze wszystkich urządzeń</h3>

                    <p>
                        Dzięki tej opcji możesz wylogować się z naszej strony i aplikacji na wszystkich przeglądarkach i
                        urządzeniach jednocześnie – również na tym, którego teraz używasz.
                    </p>

                    <div>
                        <Button onClick={signOut}>Wyloguj się wszędzie</Button>
                    </div>
                </Section>
                <Section>
                    <h3>Usuwanie konta</h3>

                    <p>
                        Jeśli klikniesz w ten przycisk, usuniesz swoje konto w naszym sklepie. Upewnij się, że na pewno
                        chcesz to zrobić – Twojego konta nie będziemy mogli przywrócić.
                    </p>
                    <p>
                        Jeśli chcesz zachować swoje konto, ale nie chcesz dostawać od nas wiadomości – odznacz zgody w
                        ustawieniach powiadomień.
                    </p>
                    <div>
                        <Button onClick={() => setIsOpen([true, { DataName: 'DeleteAccount', value: 'password' }])}>
                            Usuń konto
                        </Button>
                    </div>
                </Section>
            </Wrapper>
            <Modal open={isOpen} onClose={() => setIsOpen([false, {}])}>
                <PopUpAccountDelete
                    signOut={signOut}
                    name={(isOpen[1] as { DataName: string; value: string }).DataName}
                />
            </Modal>
        </>
    );
};

export default AccountDangerSection;
