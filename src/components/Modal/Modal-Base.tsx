import React, { useEffect, useRef } from 'react';

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
}

export default function ModalBase({
    children,
    modalStatusVal,
    modalToggle,
}: PropsType) {
    const modalBaseRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
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

    return (
        <>
            <div ref={ modalBaseRef } className={ `modal-base` }>
                { children }
            </div>
            <div className={ `modal-blur-bg` }></div>
        </>
    );
}
