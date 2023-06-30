import { useState } from 'react';

export default function useModalToggler <CurrEventType> () {
    const [modalVal,setModalVal] = useState<{
        modalBool:boolean,
        currentEvent:CurrEventType | null
    }>({
        currentEvent: null,
        modalBool:false
    });

    const toggleModal = ():void => setModalVal({
        ...modalVal,
        modalBool: !modalVal.modalBool
    });
    const closeModal = ():void => setModalVal({
        currentEvent: null,
        modalBool: false
    });
    const modalCurrentEvent = (currEvnt: CurrEventType):void => setModalVal({
        ...modalVal,
        currentEvent: currEvnt
    });

    return {
        modalVal,
        toggleModal,
        modalCurrentEvent,
        closeModal
    }

};