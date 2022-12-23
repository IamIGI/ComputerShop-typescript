import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { GrClose } from 'react-icons/gr';

import { Close, InsideWrapper, Overlay, OutsideWrapper } from './Modal.styles';

interface ModalProps {
    width?: number;
    open: [boolean];
    children: ReactNode;
    onClose: () => void;
}

export default function Modal({ width, open, children, onClose }: ModalProps) {
    if (!open[0]) return null;

    return ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose} />
            <OutsideWrapper>
                <InsideWrapper>
                    <Close onClick={onClose}>
                        <GrClose />
                    </Close>

                    <div>{children}</div>
                </InsideWrapper>
            </OutsideWrapper>
        </>,
        document.getElementById('portal')!
    );
}
