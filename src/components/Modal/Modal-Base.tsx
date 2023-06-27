import React, { useEffect, useRef, useState } from 'react';

interface PropsType {
    readonly children: React.ReactNode;
    readonly modalToggle: {
        setCurrentEvent: (currEvnt: HTMLDivElement | null) => void;
        closeModal: () => void;
    };
    readonly modalStatusVal: {
        modalBool: boolean;
        currentEvent: HTMLElement | null;
    };
};

export default function ModalBase({
    children,
    modalStatusVal,
    modalToggle,
}: PropsType) {
    const modalBaseRef = useRef<HTMLDivElement | null>(null);

    const [modalMount, setModalMount] = useState<boolean>(false);

    const handleModalUnmount = () => setModalMount(false);

    useEffect(() => {
        if (modalStatusVal.modalBool) setModalMount(true);

        const handleOutsideClick = (e: MouseEvent) => {
            if (
                modalBaseRef.current &&
                !modalBaseRef.current.contains(e.target as Node)
            ) {
                modalToggle.closeModal();
            }
        };

        const body = document.body;
        modalToggle.setCurrentEvent(modalBaseRef.current);

        if (modalStatusVal.modalBool) {
            body.classList.add('overflow-hidden');
            document.addEventListener('click', handleOutsideClick);
        } else {
            body.classList.remove('overflow-hidden');
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };

    }, [modalStatusVal.modalBool]);

    if (modalMount) {

        return (
            <>
                <div
                    ref={ modalBaseRef }
                    onAnimationEnd={ () => {
                        if (!modalStatusVal.modalBool) handleModalUnmount()
                    } }
                    className={ `modal-base ${modalStatusVal.modalBool ? 'modal-content-mount' : 'modal-content-unmount'}` }
                >
                    { children }
                </div>

                <div
                    className={ `modal-blur-bg ${modalStatusVal.modalBool ? 'modal-fadeIn' : 'modal-fadeOut'}` }>
                </div>

            </>)
    }
}
