import React, { useState } from "react";

function useModal() {
    //[MODAL]
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    };
    const handleOpenModal = () => {
        console.log(openModal);
        
        setOpenModal(true);
    };
    return { openModal, handleCloseModal, handleOpenModal };
}

export default useModal;
