import { ReactNode, useState } from 'react';
import { HintSection, HintIcon, HintDescription, HintTitle, HintAsk } from './ProductBuyHint.style';
import Modal from 'components/atoms/Modal/Modal';

interface ProductByHintProps {
    icon: ReactNode;
    title: string;
    ask: string;
    popUp: ReactNode;
}

const ProductBuyHint = ({ icon, title, ask, popUp }: ProductByHintProps) => {
    const [isOpen, setIsOpen] = useState<[boolean]>([false]);

    return (
        <>
            <HintSection onClick={() => setIsOpen([true])}>
                <HintIcon>{icon}</HintIcon>
                <HintDescription>
                    <HintTitle>{title}</HintTitle>
                    <HintAsk>{ask}</HintAsk>
                </HintDescription>
            </HintSection>
            <Modal open={isOpen} onClose={() => setIsOpen([false])}>
                {popUp}
            </Modal>
        </>
    );
};

export default ProductBuyHint;
